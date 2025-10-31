import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import Ribbons from "@/components/Ribbon";

export const Route = createFileRoute("/sweethouse")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  return (
    <div className="w-[80%] mx-auto min-h-screen bg-white text-black cursor-default">
      <style>{`
        @keyframes subtle-fade { from { opacity: 0; transform: translateY(6px);} to { opacity: 1; transform: translateY(0);} }
        .animate-subtle-fade { animation: subtle-fade 420ms cubic-bezier(.2,.9,.2,1) both; }
        @keyframes sleek-bob { 0% { transform: translateY(0);} 50% { transform: translateY(-5px);} 100% { transform: translateY(0);} }
        .animate-sleek-bob { animation: sleek-bob 4.5s ease-in-out infinite; will-change: transform; }
      `}</style>

      <div className="max-w-7xl mx-auto py-16">
        <button
          onClick={() => navigate({ to: "/" })}
          className="text-sm text-gray-600 hover:text-black mb-6 inline-flex items-center gap-2 cursor-pointer"
        >
          ← Back
        </button>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-sleek-bob">
            <img
              src="Sweethouse-picture.png"
              alt="Sweethouse preview"
              className="w-full h-96 object-fill block"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight">Sweethouse</h1>
            <p className="text-lg text-gray-600 max-w-xl">
              A modern e‑commerce showcase for artisanal products — refined
              visuals, tactile micro-interactions and a calm shopping
              experience.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center px-5 py-2 bg-black text-white rounded-md shadow hover:bg-neutral-900 transition"
              >
                View live
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center px-5 py-2 border border-gray-200 rounded-md hover:shadow transition"
              >
                View code
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <h4 className="font-medium text-gray-900">Role</h4>
                <p>Lead Frontend — Visuals & interactions</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Timeline</h4>
                <p>5 weeks</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Highlights</h4>
                <ul className="list-disc list-inside">
                  <li>Immersive product pages</li>
                  <li>Smooth add-to-cart micro-interactions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Stack</h4>
                <p>React · TypeScript · Tailwind</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 animate-subtle-fade">
          <h3 className="text-2xl font-semibold mb-6">Gallery</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100">
              <img
                src="Sweethouse-picture.png"
                alt="Sweethouse shot 1"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100">
              <img
                src="Sweethouse-picture.png"
                alt="Sweethouse shot 2"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100">
              <img
                src="Sweethouse-picture.png"
                alt="Sweethouse shot 3"
                className="w-full h-60 object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-14 grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-medium">Problem</h4>
            <p className="text-gray-600">
              The client wanted a premium storefront that highlights
              craftsmanship and product stories.
            </p>

            <h4 className="text-xl font-medium">Solution</h4>
            <p className="text-gray-600">
              A calm, image-first layout with clear purchase flows and elegant
              visual rhythm to match the brand.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-medium">Contributions</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Product page composition</li>
              <li>Checkout microcopy and validation</li>
              <li>Accessible navigation</li>
            </ul>

            <h4 className="text-xl font-medium">Takeaways</h4>
            <p className="text-gray-600">
              Strong visuals plus simple flows create a premium experience
              without friction.
            </p>
          </div>
        </section>
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
