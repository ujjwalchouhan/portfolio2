import React from "react";
import cardGrayArrow from "../assets/icons/card-gary-arrow.svg";

const AboutSection = () => {
  return (
    <section
      className="py-24 bg-brand-dark"
      data-purpose="about-me"
      id="about"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Philosophy Card */}
          <div className="relative bg-gradient-to-br from-white/10 to-transparent p-12 rounded-[40px] border border-white/5 aspect-square flex flex-col items-center justify-center overflow-hidden text-center">
            <div className="absolute top-12 left-12">
              <svg
                fill="none"
                height="40"
                viewBox="0 0 40 40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0V40M0 20H40"
                  stroke="#FF6B00"
                  strokeWidth="2"
                />
                <path
                  d="M5.85786 5.85786L34.1421 34.1421M34.1421 5.85786L5.85786 34.1421"
                  stroke="#FF6B00"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="relative z-10 text-3xl md:text-4xl font-serif italic text-white leading-tight max-w-lg px-4">
              &quot;I believe good design isn&apos;t how it looks — it&apos;s how
              clearly it solves a problem.&quot;
            </h3>
            <div
              className="absolute bottom-0 right-0 w-24 md:w-32 h-auto opacity-80 pointer-events-none flex items-end justify-end"
              aria-hidden="true"
            >
              <img
                src={cardGrayArrow}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          </div>
          {/* Content */}
          <div>
            <span className="text-brand-accent font-semibold tracking-widest text-xs uppercase mb-4 block">
              About me
            </span>
            <h2 className="text-5xl md:text-6xl font-serif mb-6">
              Abhay <span className="font-sans font-light opacity-60">Chouhan</span>
            </h2>
            <div className="flex items-center gap-4 mb-8 p-4 bg-white/5 rounded-2xl border border-white/10 w-fit">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">
                g
              </div>
              <div>
                <p className="text-sm font-bold">Galaxy Weblinks LTD, Indore</p>
                <p className="text-xs text-gray-400">UI/UX Designer</p>
              </div>
            </div>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                I&apos;m a UI/UX Designer with 5+ years of experience designing
                SaaS and mobile products for startups and growing businesses.
                Proficient in using industry-standard designing software tools
                and techniques.
              </p>
              <p>
                My approach blends empathy, data, and AI-assisted workflows to
                create products that are not just visually polished, but
                practical, scalable, and easy to use.
              </p>
              <p>
                When I&apos;m not designing interfaces, I&apos;m refining
                workflows, exploring AI tools to improve efficiency, and learning
                how great products are built behind the scenes.
              </p>
            </div>
            <a
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-brand-accent rounded-full font-semibold hover:bg-orange-600 transition-all text-white no-underline"
              href="/resume.pdf"
              download
            >
              Resume
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
