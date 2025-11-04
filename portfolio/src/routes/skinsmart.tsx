import { createFileRoute } from "@tanstack/react-router";
import BackButton from "../components/BackButton";
export const Route = createFileRoute("/skinsmart")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="sm:w-[80%] w-[90%] mx-auto min-h-screen bg-white text-black cursor-default">
      <div className="max-w-7xl mx-auto py-10 sm:py-16">
        <BackButton />
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden shadow-lg border border-gray-100">
            <img
              src="Skinsmart-picture.png"
              alt="SkinSmart preview"
              className="w-full sm:h-96 object-fill block"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-center sm:text-left">
              SkinSmart
            </h1>
            <p className="text-lg text-gray-600 max-w-xl text-center sm:text-left">
              A modern, responsive frontend for a CS2 buy/sell business that was
              designed with speed, clarity, and user focus in mind. It features
              clean animations, fitting fonts and and a streamlined UI that
              guides users toward key actions.
            </p>

            <div className="flex gap-4 justify-center sm:justify-start my-10 sm:my-6">
              <a
                href="https://www.skinsmart.se/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2 bg-black text-white rounded-md shadow hover:bg-neutral-900 transition"
              >
                View Live
              </a>
              <a
                href="https://github.com/NikitaMokhonko/DnM-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2 border border-gray-200 rounded-md hover:shadow transition"
              >
                View Repo
              </a>
            </div>

            <div className="sm:grid grid-cols-2 gap-4 text-md sm:text-sm text-gray-700 leading-loose sm:leading-normal">
              <div>
                <h4 className="font-semibold text-gray-900">Role</h4>
                <p>Solo developer responsible for full project</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Timeline</h4>
                <p>2 weeks</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Highlights</h4>
                <ul className="list-disc list-inside">
                  <li>Clean design and clear CTAs</li>
                  <li>Marquee & animations for dynamism</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Stack</h4>
                <p>React · Tailwind · TypeScript · Vercel</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-14 grid md:grid-cols-2 gap-6 sm:gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Problem</h4>
            <p className="text-gray-600">
              The client needed a simple, fast way for users to contact the
              company in order to sell items. The UI/UX had to be minimal,
              trustworthy and accessible across all devices.
            </p>

            <h4 className="text-xl font-semibold">Solution</h4>
            <p className="text-gray-600">
              A clean transactional UI with focused actions, clear hierarchy and
              micro-interactions that reinforce trust. Emphasis on performance,
              responsive images and concise flows.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contributions</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Clean UI/UX, logos & animations</li>
              <li>Hosting with purchased domain through Vercel</li>
              <li>Performance, SEO and accessibility tuning</li>
            </ul>

            <h4 className="text-xl font-semibold">Takeaways</h4>
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
