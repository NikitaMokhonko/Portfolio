import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import Ribbons from "@/components/Ribbon";
import RotatingText from "@/components/RotatingText";
import { useNavigate } from "@tanstack/react-router";
import ProjectCard from "@/components/ProjectCard";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiPostgresql,
  SiPython,
  SiFigma,
  SiVercel,
  SiHtml5,
  SiAmazon,
  SiGooglecloud,
  SiCss3
} from "react-icons/si";
import {
  DiJavascript,
  DiJava
} from "react-icons/di";

function TechDeck({
  items,
}: {
  items: { name: string; Icon: any; color?: string }[];
}) {
  const [focused, setFocused] = useState<number | null>(null);

  return (
    <div className="mt-6">
      <div className="relative h-40 flex items-center justify-beginning">
        <div className="relative flex items-center">
          {items.map((item, i) => {
            const offset = i -48; 
            return (
              <button
                key={item.name}
                onMouseEnter={() => setFocused(i)}
                onMouseLeave={() => setFocused(null)}
                onFocus={() => setFocused(i)}
                onBlur={() => setFocused(null)}
                className={`group relative w-35 h-50 rounded-2xl  bg-white border border-gray-100 shadow-md flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(.2,.9,.2,1)] focus:outline-none`}
                style={{
                  marginLeft: i === 0 ? 0 : offset,
                  zIndex: focused === i ? 40 : 10 + i,
                  transform:
                    focused === i ? "translateY(-10px) scale(1.15)" : "none",
                }}
                aria-label={item.name}
                type="button"
              >
                <div className="flex flex-col items-center justify-center pointer-events-none">
                  <div
                    className="text-4xl"
                    style={{ color: item.color ?? "black" }}
                    aria-hidden="true"
                  >
                    <item.Icon />
                  </div>
                </div>

                <div
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-black text-md opacity-0 transform translate-y-2 transition-all duration-400 pointer-events-none"
                  style={{
                    opacity: focused === i ? 1 : 0,
                    transform:
                      focused === i ? "translateY(0)" : "translateY(8px)",
                  }}
                >
                  {item.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const navigate = useNavigate();

  const techItems = [
    { Icon: SiReact, name: "React", color: "#61DAFB" },
    { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { Icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "#38B2AC" },
    { Icon: DiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { Icon: DiJava, name: "Java", color: "#007396" },
    { Icon: SiPython, name: "Python", color: "#3776AB" },
    { Icon: SiDocker, name: "Docker", color: "#2496ED" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { Icon: SiVercel, name: "Vercel", color: "#000000" },
    { Icon: SiAmazon, name: "AWS", color: "#FF9900" },
    { Icon: SiGooglecloud, name: "GCP", color: "#4285F4" },
  ];

  return (
    <div className="w-[80%] min-h-screen cursor-default mx-auto">
      <div className="w-full flex justify-between">
        <div className="sm:pt-30 sm:pl-10">
          <h1 className="text-5xl">
            Turning Your Imagination Into{" "}
            <RotatingText
              texts={["Reality", "Success", "A Business"]}
              mainClassName=""
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              rotationInterval={5000}
            />
          </h1>
          <h2 className="pt-8 text-xl">
            Hi! I'm Nikita, a full stack developer with a passion for design.
          </h2>
          <h3 className="pt-5 text-lg text-gray-500 max-w-2xl">
            I love crafting seamless digital experiences that blend creativity
            with clean, scalable and efficient code. Whether it’s building
            full-stack web apps, designing intuitive and modern interfaces, or
            bringing bold ideas to life - I’m all about making technology feel
            human.
          </h3>
          <h3 className="pt-3 text-lg text-gray-500 max-w-2xl">
            Currently, I’m focused on full stack development using React,
            TypeScript, and Java with Spring Boot. Let’s build something amazing
            together!
          </h3>
        </div>
        <div>
          <img
            src="profile.jpg"
            alt="Profile Picture"
            className="mt-25 mr-10 h-100 w-100 border shadow-xl hover:rotate-z-5 duration-500"
          />
        </div>
      </div>
      <div className="mt-40">
        <div className="flex justify-between sm:px-10">
          <h1 className="text-3xl">Tech Stack</h1>
        </div>
        <div className="flex justify-start mx-10 mt-10">
          <TechDeck items={techItems} />
        </div>
      </div>
      <div className="mt-40">
        <div className="flex justify-between sm:px-10">
          <h1 className="text-3xl">Projects</h1>
          <button
            onClick={() => navigate({ to: "/projects" })}
            className="group flex flex-col items-start cursor-pointer bg-transparent border-0 p-0"
            aria-label="Projects"
            type="button"
          >
            <span className="pointer-events-none">View All</span>
            <span className="block h-px bg-black w-full transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </button>
        </div>
        <div className="mt-14 px-10 flex flex-row justify-between mb-20">
          <ProjectCard
            title="SkinSmart"
            description="Responsive frontend website built for a CS2 business, designed
                  to let users easily contact the company to sell their items.
                  The site features a sleek, modern interface, clear
                  presentation of contact options, and a layout optimized for
                  quick navigation."
            img="Skinsmart-picture.png"
            to="/skinsmart"
          />
          <ProjectCard
            title="Nova Bank"
            description="Fully functioning mock banking application built in a team of
                  11 people, with features such as log in, dashboard, transfers
                  between accounts and users, transaction history with
                  AI-powered search, loans and a fully robust admin page."
            img="Novabank-picture.png"
            to="/novabank"
          />
          <ProjectCard
            title="Sweethouse"
            description="Full-stack web application for a French pastry business,
                  designed to showcase products and provide a seamless browsing
                  experience for visitors. The site features responsive layouts,
                  an intuitive UI/UX, and integrated click tracking through
                  Kafka to gather insights on user interactions."
            img="Sweethouse-picture.png"
            to="/sweethouse"
          />
        </div>
      </div>
      <Ribbons
        baseThickness={10}
        colors={["#000000"]}
        speedMultiplier={0.4}
        maxAge={500}
        enableFade={true}
        enableShaderEffect={false}
      />
    </div>
  );
}
