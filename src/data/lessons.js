export function getModules() {
  return lessons;
}

export async function getLesson(slug) {
  let module = lessons.find(({ lessons }) =>
    lessons.some(({ id }) => id === slug),
  );

  if (!module) {
    return null;
  }

  let index = module.lessons.findIndex(({ id }) => id === slug);

  return {
    ...module.lessons[index],
    module,
    next: index < module.lessons.length - 1 ? module.lessons[index + 1] : null,
  };
}

export async function getLessonContent(slug) {
  return (await import(`@/data/lessons/${slug}.mdx`)).default;
}

const lessons = [
  {
    id: "module-1",
    title: "Module 1 – Identity Re-Coding Foundations",
    description: "Build the neural foundation for lasting personal transformation through science-backed identity work.",
    lessons: [
      {
        id: "lesson-1-1",
        title: "Lesson 1.1 | The Neuroscience of Personal Change",
        description: "Discover how neural pathways form, why they keep you stuck, and the science behind lasting mindset shifts.",
        video: {
          duration: 1200,
          thumbnail: "https://cc360-pages.s3.us-west-2.amazonaws.com/2a42606f-0544-4083-9c11-8caaa7ca9875.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Neuroscience Cheat-Sheet",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-1-2",
        title: "Lesson 1.2 | Auditing Limiting Beliefs",
        description: "Identify subconscious stories that cap your potential and learn a 3-step belief reframe method.",
        video: {
          duration: 1350,
          thumbnail: "https://cc360-pages.s3.us-west-2.amazonaws.com/4b21acae-132a-4187-aa65-04c620edea42.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Limiting Beliefs Worksheet",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-1-3",
        title: "Lesson 1.3 | Rewiring Self-Talk",
        description: "Practice cognitive-behavioral prompts to flip inner dialogue from critic to coach.",
        video: {
          duration: 1100,
          thumbnail: "https://cc360-pages.s3.us-west-2.amazonaws.com/91628235-114d-452b-a72b-189faa08b745.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Positive Self-Talk Prompts",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-1-4",
        title: "Lesson 1.4 | Installing a Growth-Mindset Ritual",
        description: "Design a daily 7-minute ritual to prime your brain for curiosity and resilience.",
        video: {
          duration: 980,
          thumbnail: "https://cc360-pages.s3.us-west-2.amazonaws.com/0417fffd-fce1-40ce-bafd-fac37ab6ee87.png",
          url: "/Users/canyonsmith/Desktop/tailwind-plus-compass/compass-js/lambda_results/nova_gpt-4o-mini-tts_1x_2025-07-13T23_16_09-547Z.mp4",
        },
        materials: [
          {
            title: "Ritual Blueprint",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      }
    ]
  },
  {
    id: "module-2",
    title: "Module 2 – Purpose & Vision Crafting",
    description: "Extract your core values and craft a compelling vision that drives daily motivation and long-term direction.",
    lessons: [
      {
        id: "lesson-2-1",
        title: "Lesson 2.1 | Core Values Extraction",
        description: "Surface the five non-negotiable values that anchor your decisions and motivation.",
        video: {
          duration: 1400,
          thumbnail: "/images/thumbnails/lesson-2-1.png",
          url: "nova_gpt-4o-mini-tts_1x_2025-07-13T23_16_09-547Z.wav",
        },
        materials: [
          {
            title: "Core Values Cards",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-2-2",
        title: "Lesson 2.2 | Life-Domains Assessment",
        description: "Score the eight domains of life to spotlight growth gaps and energy leaks.",
        video: {
          duration: 1250,
          thumbnail: "/images/thumbnails/lesson-2-2.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Life-Domain Wheel",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-2-3",
        title: "Lesson 2.3 | Vision Board 3.0 (Digital & Physical)",
        description: "Fuse neuroscience and visualization to craft a results-oriented vision board.",
        video: {
          duration: 1600,
          thumbnail: "/images/thumbnails/lesson-2-3.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Vision Board Templates",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-2-4",
        title: "Lesson 2.4 | Purpose Statement Codex",
        description: "Write a one-sentence purpose statement that guides daily priorities and long-term goals.",
        video: {
          duration: 1150,
          thumbnail: "/images/thumbnails/lesson-2-4.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Purpose Statement Guide",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      }
    ]
  },
  {
    id: "module-3",
    title: "Module 3 – Habit Architecture & Systems Design",
    description: "Master the science of behavior change and design systems that make success inevitable.",
    lessons: [
      {
        id: "lesson-3-1",
        title: "Lesson 3.1 | Behavior-Change Physics",
        description: "Understand cue-craving-response-reward loops and friction theory.",
        video: {
          duration: 1300,
          thumbnail: "/images/thumbnails/lesson-3-1.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Habit Loop Diagram",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-3-2",
        title: "Lesson 3.2 | Keystone Habit Identification",
        description: "Pinpoint one habit that cascades into multiple life upgrades.",
        video: {
          duration: 1050,
          thumbnail: "/images/thumbnails/lesson-3-2.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Keystone Habit Checklist",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-3-3",
        title: "Lesson 3.3 | Environmental Design & Habit Stacking",
        description: "Engineer surroundings and link new behaviors to existing routines.",
        video: {
          duration: 1400,
          thumbnail: "/images/thumbnails/lesson-3-3.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Habit Stacking Planner",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-3-4",
        title: "Lesson 3.4 | Digital Tracking & Feedback Loops",
        description: "Set up the companion app to log metrics, celebrate streaks, and adjust in real time.",
        video: {
          duration: 1200,
          thumbnail: "/images/thumbnails/lesson-3-4.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "App Setup Guide",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      }
    ]
  },
  {
    id: "module-4",
    title: "Module 4 – 12-Month Destiny Roadmap",
    description: "Create a strategic roadmap that breaks down your vision into actionable quarterly and monthly milestones.",
    lessons: [
      {
        id: "lesson-4-1",
        title: "Lesson 4.1 | Reverse-Engineering Your Ultimate Year",
        description: "Break long-term goals into quarterly milestones and key results.",
        video: {
          duration: 1500,
          thumbnail: "/images/thumbnails/lesson-4-1.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Quarterly Goal Map",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-4-2",
        title: "Lesson 4.2 | Monthly Sprint Planning",
        description: "Adopt agile principles to maintain momentum and pivot fast.",
        video: {
          duration: 1350,
          thumbnail: "/images/thumbnails/lesson-4-2.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Sprint Planning Board",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-4-3",
        title: "Lesson 4.3 | Weekly Review & Reflection Ritual",
        description: "Install a 30-minute ritual to track wins, learnings, and next actions.",
        video: {
          duration: 1100,
          thumbnail: "/images/thumbnails/lesson-4-3.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Weekly Review Template",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-4-4",
        title: "Lesson 4.4 | Risk Anticipation & Contingency Planning",
        description: "Forecast obstacles and pre-build fallback strategies to stay on track.",
        video: {
          duration: 1250,
          thumbnail: "/images/thumbnails/lesson-4-4.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Contingency Worksheet",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      }
    ]
  },
  {
    id: "module-5",
    title: "Module 5 – Accountability & High-Performance Community",
    description: "Leverage the power of community and coaching to accelerate your transformation journey.",
    lessons: [
      {
        id: "lesson-5-1",
        title: "Lesson 5.1 | Building Your Support Tribe",
        description: "Leverage peer groups, mentors, and social contracts for maximum follow-through.",
        video: {
          duration: 1400,
          thumbnail: "/images/thumbnails/lesson-5-1.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Support Tribe Checklist",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-5-2",
        title: "Lesson 5.2 | Mastering Feedback Loops",
        description: "Transform constructive feedback into fuel instead of friction.",
        video: {
          duration: 1200,
          thumbnail: "/images/thumbnails/lesson-5-2.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Feedback Playbook",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-5-3",
        title: "Lesson 5.3 | Coaching Frameworks for Self & Others",
        description: "Apply GROW and CLEAR models to coach yourself and peers effectively.",
        video: {
          duration: 1600,
          thumbnail: "/images/thumbnails/lesson-5-3.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Coaching Model Cards",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-5-4",
        title: "Lesson 5.4 | Celebrations & Micro-Rewards",
        description: "Design micro-rewards to keep dopamine high and burnout low.",
        video: {
          duration: 1000,
          thumbnail: "/images/thumbnails/lesson-5-4.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Reward Menu",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      }
    ]
  },
  {
    id: "module-6",
    title: "Module 6 – Sustaining Momentum & Future Growth",
    description: "Ensure your transformation sticks and create systems for continuous growth and evolution.",
    lessons: [
      {
        id: "lesson-6-1",
        title: "Lesson 6.1 | Habit Relapse Recovery",
        description: "Develop a 24-hour bounce-back protocol for inevitable setbacks.",
        video: {
          duration: 1150,
          thumbnail: "/images/thumbnails/lesson-6-1.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Recovery Roadmap",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-6-2",
        title: "Lesson 6.2 | Scaling Success Across Life Domains",
        description: "Transfer your new systems to finance, health, and relationships.",
        video: {
          duration: 1400,
          thumbnail: "/images/thumbnails/lesson-6-2.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Domain Scaling Matrix",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-6-3",
        title: "Lesson 6.3 | Designing a 5-Year Vision Update Cycle",
        description: "Set checkpoints to renew goals and prevent complacency.",
        video: {
          duration: 1250,
          thumbnail: "/images/thumbnails/lesson-6-3.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Vision Update Planner",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      },
      {
        id: "lesson-6-4",
        title: "Lesson 6.4 | Graduation & Next-Level Resources",
        description: "Celebrate wins, outline alumni perks, and map out continuous learning pathways.",
        video: {
          duration: 1100,
          thumbnail: "/images/thumbnails/lesson-6-4.png",
          url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4",
        },
        materials: [
          {
            title: "Alumni Resource Pack",
            type: "pdf",
            url: "https://assets.tailwindcss.com/templates/compass/sophia-reid-1080p.mp4"
          }
        ]
      }
    ]
  }
];
