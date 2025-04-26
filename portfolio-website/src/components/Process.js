import React from "react";
import "./../styles/Process.css";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuPencilRuler } from "react-icons/lu";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    icon: <FiSearch className="process-icon" />,
    title: "Discovery",
    description:
      "I start by learn and research based on client brief and resources to gain about the needs goals, product and requirements.",
  },
  {
    icon: <HiOutlineLightBulb className="process-icon" />,
    title: "Strategy",
    description:
      "Then start to plan and structure of the project process based on the discovery phase before start design.",
  },
  {
    icon: <LuPencilRuler className="process-icon" />,
    title: "Design",
    description:
      "After I complete all the process. I will start to do the design process such as creating user flow, wireframe, UI design until finish.",
  },
];

const Process = () => {
  // InView hooks for heading
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Separate refs for steps
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.15 });

  const refs = [ref1, ref2, ref3];
  const views = [inView1, inView2, inView3];

  return (
    <div className="process-container grid-layout">
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <h1 className="main-heading">Process</h1>
        <h2 className="process-title">Let’s have a look on my working process</h2>
      </motion.div>

      <div className="process-steps">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            ref={refs[index]}
            className="process-card"
            initial={{ opacity: 0, y: 40 }}
            animate={views[index] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {step.icon}
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;
