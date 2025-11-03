import { createFileRoute } from "@tanstack/react-router";
import BackButton from "../components/BackButton";
export const Route = createFileRoute("/ai-assessment")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="sm:w-[80%] w-[75%] mx-auto min-h-screen bg-white text-black cursor-default">
      <div className="max-w-7xl mx-auto py-10 sm:py-16">
        <BackButton />
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden shadow-lg border border-gray-100">
            <img
              src="AI-assessment-picture.png"
              alt="AI Assessment preview"
              className="w-full sm:h-96 object-fill block"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-center sm:text-left">
              {"</Salt>"} AI Assessment
            </h1>
            <p className="text-lg text-gray-600 max-w-xl text-center sm:text-left">
              A full-stack web application built by a team of 8, designed for
              companies to evaluate their AI knowledge using customizable
              assessment forms.
            </p>

            <div className="flex gap-4 justify-center sm:justify-start my-10 sm:my-6">
              <a
                href="https://github.com/salt-community/jfs-2025-03-31-salt-ai-assesment"
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
                <p>4 weeks</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Highlights</h4>
                <ul className="list-disc list-inside">
                  <li>Design consistent with the {"</Salt>"} site</li>
                  <li>Clean and robust admin panel</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Stack</h4>
                <p>React · Tailwind · TypeScript · Java · PostgreSQL</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-14 animate-subtle-fade">
          <h3 className="text-2xl font-semibold mb-6">Gallery</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="overflow-hidden shadow-md border border-gray-100">
              <img
                src="AI-assessment-1.png"
                alt="AI Assessment shot 1"
                className="w-full sm:h-60 object-fill"
              />
            </div>
            <div className="overflow-hidden shadow-md border border-gray-100">
              <img
                src="AI-assessment-2.png"
                alt="AI Assessment shot 2"
                className="w-full sm:h-60 object-fill"
              />
            </div>
            <div className="overflow-hidden shadow-md border border-gray-100">
              <img
                src="AI-assessment-3.png"
                alt="AI Assessment shot 3"
                className="w-full sm:h-60 object-fill"
              />
            </div>
          </div>
        </section>
        <section className="mt-14 grid md:grid-cols-2 gap-6 sm:gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Problem</h4>
            <p className="text-gray-600">
              {"</Salt>"} needed an AI assessment tool to help companies
              evaluate their AI knowledge through customizable forms. The UI/UX
              had to be consistent with the main site while ensuring ease of use
              and clarity.
            </p>

            <h4 className="text-xl font-semibold">Solution</h4>
            <p className="text-gray-600">
              Designed a clean, intuitive interface aligned with the {"</Salt>"}{" "}
              site aesthetics. Developed a robust admin panel for creating and
              managing assessments, focusing on user-friendly navigation and
              clear navigation.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contributions</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Clean UI/UX design</li>
              <li>Made the app follow the {"</Salt>"} website design</li>
              <li>Created and implemented the Form Builder</li>
            </ul>

            <h4 className="text-xl font-semibold">Takeaways</h4>
            <p className="text-gray-600">
              Building components with future features in mind is a crucial
              time-saver.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
