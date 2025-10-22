import { createFileRoute } from "@tanstack/react-router";
import Ribbons from "@/components/Ribbon";
import RotatingText from "@/components/RotatingText";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <div className="sm:pt-30 sm:pl-10">
          <h1 className="text-5xl">
            Turning Your Imagination Into <RotatingText
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
            className="m-20 h-100 w-100 border"
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
