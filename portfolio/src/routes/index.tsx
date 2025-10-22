import { createFileRoute } from "@tanstack/react-router";
import Ribbons from "@/components/Ribbon";
import Header from "@/components/Header";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="w-full h-screen">
      <div className="relative z-20">
        <Header />
      </div>
      <div className="w-full h-full">
        <div className="sm:pt-30 sm:pl-10">
          <h1 className="text-5xl">Turning Your Imagination Into Reality</h1>
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
    </div>
  );
}
