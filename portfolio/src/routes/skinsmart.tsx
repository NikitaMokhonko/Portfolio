import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/skinsmart")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  return (
    <div className="w-[80%] mx-auto min-h-screen bg-white text-black cursor-default">
      <style>{`
        
      `}</style>
      <div className="max-w-7xl mx-auto py-16">
        <button
          onClick={() => navigate({ to: "/" })}
          className="text-sm text-gray-600 hover:text-black mb-6 inline-flex items-center gap-2 cursor-pointer"
        >
          ← Back
        </button>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden shadow-lg border border-gray-100 animate-sleek-bob">
            <img
              src="Skinsmart-picture.png"
              alt="SkinSmart preview"
              className="w-full h-96 object-fill block"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight">SkinSmart</h1>
            <p className="text-lg text-gray-600 max-w-xl">
              A modern, responsive frontend for a CS2 buy/sell business —
              crafted to feel fast, intuitive and polished. Clean typography,
              careful spacing and focused interactions make the experience feel
              premium and approachable.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.skinsmart.se/"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center px-5 py-2 bg-black text-white rounded-md shadow hover:bg-neutral-900 transition"
              >
                View Live
              </a>
              <a
                href="https://github.com/NikitaMokhonko/DnM-Website"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center px-5 py-2 border border-gray-200 rounded-md hover:shadow transition"
              >
                View Repo
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <h4 className="font-medium text-gray-900">Role</h4>
                <p>Solo developer responsible for full project</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Timeline</h4>
                <p>2 weeks</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Highlights</h4>
                <ul className="list-disc list-inside">
                  <li>Clean design and clear CTAs</li>
                  <li>Marquee & animations for dynamism</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Stack</h4>
                <p>React · Tailwind · TypeScript · Vercel</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-14 animate-subtle-fade">
          <h3 className="text-2xl font-semibold mb-6">Gallery</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="overflow-hidden shadow-md border border-gray-100">
              <img
                src="Skinsmart-picture.png"
                alt="SkinSmart shot 1"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="overflow-hidden shadow-md border border-gray-100">
              <img
                src="Skinsmart-picture.png"
                alt="SkinSmart shot 2"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="overflow-hidden shadow-md border border-gray-100">
              <img
                src="Skinsmart-picture.png"
                alt="SkinSmart shot 3"
                className="w-full h-60 object-cover"
              />
            </div>
          </div>
        </section>
        <section className="mt-14 grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-medium">Problem</h4>
            <p className="text-gray-600">
              The client needed a simple, fast way for users to contact the company in order to sell items. The UI/UX had to be minimal, trustworthy and
              accessible across all devices.
            </p>

            <h4 className="text-xl font-medium">Solution</h4>
            <p className="text-gray-600">
              A clean transactional UI with focused actions, clear hierarchy and
              micro-interactions that reinforce trust. Emphasis on performance,
              responsive images and concise flows.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-medium">Contributions</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Clean UI/UX, logos & animations</li>
              <li>Hosting with purchased domain through Vercel</li>
              <li>Performance and accessibility tuning</li>
            </ul>

            <h4 className="text-xl font-medium">Takeaways</h4>
            <p className="text-gray-600">
              Small, thoughtful details improve conversion and user confidence —
              focus on clarity and speed.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
