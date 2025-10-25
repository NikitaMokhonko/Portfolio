import { createFileRoute } from "@tanstack/react-router";
import Ribbons from "@/components/Ribbon";
import RotatingText from "@/components/RotatingText";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen cursor-default">
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
            className="mt-25 mr-10 h-100 w-100 border"
          />
        </div>
      </div>
      <div className="mt-50">
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
          <div
            className="relative group cursor-pointer"
            onClick={() => navigate({ to: "/skinsmart" })}
          >
            <img
              src="Skinsmart-picture.png"
              alt="Skinsmart"
              className="h-60 w-122 border object-cover transition duration-500 ease-in-out filter group-hover:blur-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <span className="text-black text-center text-xl font-semibold mx-5">
                SkinSmart
                <br />
                <span className="text-sm text-black font-normal bg-white">
                  Responsive frontend website built for a CS2 business,
                  designed to let users easily contact the company to sell their
                  items. The site features a sleek, modern interface, clear
                  presentation of contact options, and a layout
                  optimized for quick navigation.
                </span>
              </span>
            </div>
          </div>
          <div
            className="relative group cursor-pointer"
            onClick={() => navigate({ to: "/novabank" })}
          >
            <img
              src="Novabank-picture.png"
              alt="Novabank"
              className="h-60 w-122 border object-cover transition duration-500 ease-in-out filter group-hover:blur-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <span className="text-white text-center text-xl font-semibold mx-5">
                Nova Bank
                <br />
                <span className="text-sm text-white font-normal bg-black">
                  Fully functioning mock banking application built in a team of
                  11 people, with features such as log in, dashboard, transfers
                  between accounts and users, transaction history with
                  AI-powered search, loans and a fully robust admin page.
                </span>
              </span>
            </div>
          </div>
          <div
            className="relative group cursor-pointer"
            onClick={() => navigate({ to: "/sweethouse" })}
          >
            <img
              src="Sweethouse-picture.png"
              alt="Sweethouse"
              className="h-60 w-122 border object-cover transition duration-500 ease-in-out filter group-hover:blur-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <span className="text-black text-center text-xl font-semibold mx-5">
                Sweethouse
                <br />
                <span className="text-sm text-black font-normal bg-white">
                  Full-stack web application for a French pastry business,
                  designed to showcase products and provide a seamless browsing
                  experience for visitors. The site features responsive layouts,
                  an intuitive UI/UX, and integrated click tracking through
                  Kafka to gather insights on user interactions.
                </span>
              </span>
            </div>
          </div>
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
