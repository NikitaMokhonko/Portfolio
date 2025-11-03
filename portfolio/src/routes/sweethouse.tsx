import { createFileRoute } from "@tanstack/react-router";
import BackButton from "../components/BackButton";
export const Route = createFileRoute("/sweethouse")({
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
              src="Sweethouse-picture.png"
              alt="Sweethouse preview"
              className="w-full sm:h-96 object-fill block"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-center sm:text-left">
              Sweethouse
            </h1>
            <p className="text-lg text-gray-600 max-w-xl text-center sm:text-left">
              A modern digital showcase for artisanal products with refined
              visuals, tactile micro-interactions and a calm browsing
              experience.
            </p>

            <div className="flex gap-4 justify-center sm:justify-start my-10 sm:my-6">
              <a
                href="https://sweethouse-jet.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2 bg-black text-white rounded-md shadow hover:bg-neutral-900 transition"
              >
                View Live
              </a>
              <a
                href="https://github.com/NikitaMokhonko/sweethouse"
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
                  <li>Beautiful theme that fits the aesthetic</li>
                  <li>Endless marquee & train animation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Stack</h4>
                <p>
                  React · Tailwind · TypeScript · Vercel · Figma · Java · Kafka
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
                src="sweethouse-1.png"
                alt="Sweethouse shot 1"
                className="w-full sm:h-60 object-cover"
              />
            </div>
            <div className="overflow-hidden shadow-md border border-gray-100">
              <img
                src="sweethouse-2.png"
                alt="Sweethouse shot 2"
                className="w-full sm:h-60 object-cover"
              />
            </div>
            <div className="overflow-hidden shadow-md border border-gray-100">
              <img
                src="sweethouse-3.png"
                alt="Sweethouse shot 3"
                className="w-full sm:h-60 object-cover"
              />
            </div>
          </div>
        </section>
        <section className="mt-14 grid md:grid-cols-2 gap-6 sm:gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Problem</h4>
            <p className="text-gray-600">
              My girlfriend wanted a website to showcase her pastries, aiming to
              reflect the brand's cozy yet professional vibe, while driving
              sales.
            </p>

            <h4 className="text-xl font-semibold">Solution</h4>
            <p className="text-gray-600">
              A calm, image-first layout with clear browsing flows and elegant
              visual rhythm to match the brand.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contributions</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Clean UI/UX, logos & animations</li>
              <li>Pictures that match the site aesthetic</li>
              <li>Performance, SEO and accessibility tuning</li>
            </ul>

            <h4 className="text-xl font-semibold">Takeaways</h4>
            <p className="text-gray-600">
              Small details like background and logo color can change the feel
              of a website drastically. Without the creamy background the
              website felt much colder and less inviting.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
