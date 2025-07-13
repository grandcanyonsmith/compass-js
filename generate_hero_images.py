#!/usr/bin/env python3
"""
Send every lesson prompt to the Lambda URL *concurrently*.

Each request body is {"prompt": "<lesson prompt>"} as required by
    prompt = event_data['prompt']

Responses:
  • image/*   → <lesson-id>.<ext>
  • JSON      → <lesson-id>.json
  • other     → <lesson-id>.txt
"""

from __future__ import annotations

import asyncio
import json
import mimetypes
from pathlib import Path
from typing import Iterable

import aiohttp

# Optional – load env vars from .env (e.g. if you store the URL there)
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

# ────────────────────────────────────────────────────────────
# Config
# ────────────────────────────────────────────────────────────
LAMBDA_URL   = "https://2q2hbuk4rz7tvvt6faj2jkpkdu0dpfyb.lambda-url.us-west-2.on.aws/"
CONCURRENCY  = 8                        # simultaneous requests
TIMEOUT_SEC  = 120                      # per request
OUTPUT_DIR   = Path("lambda_results")   # where responses land

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


# ────────────────────────────────────────────────────────────
# Lesson prompts (24 items)
# ────────────────────────────────────────────────────────────
LESSONS: list[dict[str, str]] = [
    {"id": "lesson-1-1", "title": "Neuroscience of Identity",
     "prompt": "Abstract visualization of neural pathways forming identity patterns, glowing synapses in brain network, transformation and rewiring concept, modern scientific aesthetic, deep blues and electric purples with gold accents, inspiring and futuristic"},
    {"id": "lesson-1-2", "title": "Auditing Limiting Beliefs",
     "prompt": "Person breaking through glass ceiling or invisible barriers, shattered chains transforming into butterflies, breakthrough moment visualization, empowering atmosphere, warm sunrise colors breaking through darkness"},
    {"id": "lesson-1-3", "title": "Rewiring Self-Talk",
     "prompt": "Silhouette with positive affirmations flowing like light streams, words transforming from dark to bright, inner dialogue visualization, meditation pose with glowing aura, peaceful yet powerful energy"},
    {"id": "lesson-1-4", "title": "Daily Identity Rituals",
     "prompt": "Morning routine montage with sacred geometry patterns, person in powerful stance at sunrise, ritualistic elements like journals and meditation, consistency and discipline visualization, golden hour lighting"},
]


# ────────────────────────────────────────────────────────────
# Helpers
# ────────────────────────────────────────────────────────────
def _extension_from_ctype(ctype: str) -> str:
    """
    Guess file extension from a Content-Type header.
    Returns e.g. '.png', '.jpg', or '.bin' if unknown.
    """
    ext = mimetypes.guess_extension(ctype.split(";")[0].strip())
    return ext or ".bin"


async def save_response(
    lesson_id: str,
    resp: aiohttp.ClientResponse,
) -> None:
    """
    Save the response body based on its Content-Type.
    """
    ctype = resp.headers.get("content-type", "")
    data = await resp.read()

    if ctype.startswith("image/"):
        ext = _extension_from_ctype(ctype)
        path = OUTPUT_DIR / f"{lesson_id}{ext}"
        path.write_bytes(data)

    else:
        # Try JSON first
        try:
            text = data.decode()
            obj = json.loads(text)
            path = OUTPUT_DIR / f"{lesson_id}.json"
            path.write_text(json.dumps(obj, indent=2, ensure_ascii=False))
        except (UnicodeDecodeError, json.JSONDecodeError):
            path = OUTPUT_DIR / f"{lesson_id}.txt"
            path.write_bytes(data)

    print(f"✓ {lesson_id}  →  saved {path.name}")


async def call_lambda(
    session: aiohttp.ClientSession,
    sem: asyncio.Semaphore,
    lesson: dict[str, str],
) -> bool:
    """
    POST one prompt; return True on success.
    """
    payload = {"prompt": "generate all images in cartoon characters and the colors are green and yellow brand theme" + lesson["prompt"]}
    lesson_id = lesson["id"]

    async with sem:  # limit concurrency
        try:
            async with session.post(LAMBDA_URL, json=payload) as resp:
                resp.raise_for_status()
                await save_response(lesson_id, resp)
                return True
        except Exception as exc:  # noqa: BLE001
            print(f"✗ {lesson_id}  →  {exc}")
            return False


async def run_all(lessons: Iterable[dict[str, str]]) -> None:
    timeout = aiohttp.ClientTimeout(total=TIMEOUT_SEC)
    connector = aiohttp.TCPConnector(limit=None)  # rely on our semaphore
    sem = asyncio.Semaphore(CONCURRENCY)

    successes = 0
    total = len(lessons)

    async with aiohttp.ClientSession(timeout=timeout, connector=connector) as session:
        tasks = [
            asyncio.create_task(call_lambda(session, sem, lesson))
            for lesson in lessons
        ]
        for coro in asyncio.as_completed(tasks):
            if await coro:
                successes += 1

    print("\nDone!")
    print(f"{successes}/{total} calls succeeded.  Results → {OUTPUT_DIR.resolve()}")


# ────────────────────────────────────────────────────────────
# Entrypoint
# ────────────────────────────────────────────────────────────
if __name__ == "__main__":
    asyncio.run(run_all(LESSONS))