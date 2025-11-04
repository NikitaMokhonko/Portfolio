import { createFileRoute } from "@tanstack/react-router";
import BackButton from "../components/BackButton";
export const Route = createFileRoute("/novabank")({
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
              src="Novabank-picture.png"
              alt="Nova Bank preview"
              className="w-full sm:h-96 object-fill block"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-center sm:text-left">
              Nova Bank
            </h1>
            <p className="text-lg text-gray-600 max-w-xl text-center sm:text-left">
              A clean, secure full-stack mock banking app built for clarity and
              trust by a team of 11. Focused on a modern feeling, clear buttons
              and minimalistic components to feel premium and seamless.
            </p>

            <div className="flex gap-4 justify-center sm:justify-start my-10 sm:my-6">
              <a
                href="https://www.youtube.com/live/nE_16cvehM0?si=8DhKgkxW_ktEbOvX&t=1415"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-md hover:shadow transition"
              >
                Watch Demo
              </a>
              <a
                href="https://github.com/salt-community/jfs-2025-03-31-novabank-ab"
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
                <p>UI/UX lead & frontend developer</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Timeline</h4>
                <p>3 weeks</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Highlights</h4>
                <ul className="list-disc list-inside">
                  <li>Clean UI/UX that is easy to navigate</li>
                  <li>Robust and streamlined admin panel</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Stack</h4>
                <p>
                  React · Tailwind · TypeScript · Figma · Java · PostgreSQL ·
                  GCP
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
                src="novabank-1.png"
                alt="Nova Bank shot 1"
                className="w-full sm:h-60 object-fill"
              />
            </div>
            <div className="overflow-hidden shadow-md border border-gray-100">
              <img
                src="novabank-2.png"
                alt="Nova Bank shot 2"
                className="w-full sm:h-60 object-fill"
              />
            </div>
            <div className="overflow-hidden shadow-md border border-gray-100">
              <img
                src="novabank-3.png"
                alt="Nova Bank shot 3"
                className="w-full sm:h-60 object-fill"
              />
            </div>
          </div>
        </section>
        <section className="mt-14 grid md:grid-cols-2 gap-6 sm:gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Problem</h4>
            <p className="text-gray-600">
              {"</Salt>"} wanted us to build a modern banking app that felt
              trustworthy and easy to use. The challenge was to create a UI that
              balanced security with a sleek, approachable design.
            </p>

            <h4 className="text-xl font-semibold">Solution</h4>
            <p className="text-gray-600">
              A clean and modern banking app with a UI/UX that doesn't overwhelm
              the user and makes it easy to navigate the app. Clear symbols,
              focus on colors and a minimalistic design language help in making
              the experience sleek and effortless.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contributions</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Clean UI/UX, logo, animations, pages and components</li>
              <li>Responsible for making the entire site feel cohesive</li>
              <li>Sleek landing page with a fade towards the Sign In button</li>
            </ul>

            <h4 className="text-xl font-semibold">Takeaways</h4>
            <p className="text-gray-600">
              This project really made me dive deep into UI/UX. I did a lot of research
              on what makes a banking app feel trustworthy and secure, and how to
              balance that with a modern design. I also surveyed a lot of people to figure out the optimal user flow.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
