import React from "react";

const STEPS = [
  {
    title: "Discovery",
    description:
      "I start by learning and research based on client brief and resources to gain about the needs, goals, product and requirements.",
    icon: (
      <svg
        className="h-6 w-6 text-brand-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Strategy",
    description:
      "Then start to plan and structure of the project process based on the discovery phase before start design.",
    icon: (
      <svg
        className="h-6 w-6 text-brand-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Design",
    description:
      "After I complete all the process. I will start to do the design process such as creating user flow, wireframe, UI design until finish.",
    icon: (
      <svg
        className="h-6 w-6 text-brand-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

const Process = () => {
  return (
    <section
      className="py-24 bg-[#F9F9F9] text-brand-black"
      data-purpose="working-process"
      id="process"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-brand-accent font-semibold tracking-widest text-xs uppercase">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mt-4">
            Let&apos;s have a look on my working process
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div
              key={step.title}
              className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
