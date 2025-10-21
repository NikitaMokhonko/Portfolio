import { createFileRoute } from "@tanstack/react-router";
import Ribbons from "@/components/Ribbon";
import Header from "@/components/Header";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="w-full h-200">
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
