import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/novabank")({
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
              src="Novabank-picture.png"
              alt="NovaBank preview"
              className="w-full h-96 object-fill block"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight">NovaBank</h1>
            <p className="text-lg text-gray-600 max-w-xl">
              A clean, secure banking UI built for clarity and trust. Focused on
              quick flows, clear balances and minimalist controls to feel
              premium and effortless.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center px-5 py-2 bg-black text-white rounded-md shadow hover:bg-neutral-900 transition"
              >
                View Live
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center px-5 py-2 border border-gray-200 rounded-md hover:shadow transition"
              >
                View Repo
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <h4 className="font-medium text-gray-900">Role</h4>
                <p>Product UI — Design & Frontend</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Timeline</h4>
                <p>3 weeks</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Highlights</h4>
                <ul className="list-disc list-inside">
                  <li>Secure onboarding flow</li>
                  <li>Micro-interactions for trust signals</li>
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
                src="Novabank-picture.png"
                alt="NovaBank shot 1"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100">
              <img
                src="Novabank-picture.png"
                alt="NovaBank shot 2"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100">
              <img
                src="Novabank-picture.png"
                alt="NovaBank shot 3"
                className="w-full h-60 object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-14 grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-medium">Problem</h4>
            <p className="text-gray-600">
              Users needed a fast, trustworthy way to manage money on mobile and
              desktop without cognitive overload.
            </p>

            <h4 className="text-xl font-medium">Solution</h4>
            <p className="text-gray-600">
              A stripped-back interface with clear hierarchy, intelligent
              defaults and subtle animations to communicate system state.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-medium">Contributions</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Design tokens and components</li>
              <li>Transaction list UX and filtering</li>
              <li>Performance tuning</li>
            </ul>

            <h4 className="text-xl font-medium">Takeaways</h4>
            <p className="text-gray-600">
              Minimal interfaces with clear affordances increase user confidence
              and retention.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
