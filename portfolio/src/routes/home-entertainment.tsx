import { createFileRoute } from "@tanstack/react-router";
import BackButton from "../components/BackButton";
export const Route = createFileRoute("/home-entertainment")({
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
              src="he-picture.png"
              alt="SkinSmart preview"
              className="w-full sm:h-96 object-fill block"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-center sm:text-left">
              Home EntertAInment System
            </h1>
            <p className="text-lg text-gray-600 max-w-xl text-center sm:text-left">
              A full-stack AI-powered entertainment platform built by a team of
              4, designed to help users discover and interact with personalized
              content such as quizzes, movies, and stories through a sleek and
              responsive interface.
            </p>

            <div className="flex gap-4 justify-center sm:justify-start my-10 sm:my-6">
              <a
                href="https://github.com/salt-community/homeEntertAInment"
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
                <p>UI/UX lead, creator of Movie Picker</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Timeline</h4>
                <p>4 weeks</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Highlights</h4>
                <ul className="list-disc list-inside">
                  <li>AI image generation through Runware</li>
                  <li>Neon arcade theme throughout the site</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Stack</h4>
                <p>
                  Cursor · React · Tailwind · TypeScript · Figma · Java ·
                  PostgreSQL ·
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-14 animate-subtle-fade">
          <h3 className="text-2xl font-semibold mb-6">Gallery</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="overflow-hidden shadow-md border border-gray-100">
              <img
                src="he-1.png"
                alt="Home Entertainment System shot 1"
                className="w-full sm:h-60 object-cover"
              />
            </div>
            <div className="overflow-hidden shadow-md border border-gray-100">
              <img
                src="he-2.png"
                alt="Home Entertainment System shot 2"
                className="w-full sm:h-60 object-cover"
              />
            </div>
            <div className="overflow-hidden shadow-md border border-gray-100">
              <img
                src="he-3.png"
                alt="Home Entertainment System shot 3"
                className="w-full sm:h-60 object-cover"
              />
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
              <li>Clean UI/UX, logo, animations, pages and components</li>
              <li>Responsible for making the entire site feel cohesive</li>
              <li>Created and implemented the Movie Picker feature</li>
            </ul>

            <h4 className="text-xl font-semibold">Takeaways</h4>
            <p className="text-gray-600">
              AL is powerful and can be used to speed up workflows and come up
              with clever ideas, but it still very much requires human oversight
              to ensure code quality.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
