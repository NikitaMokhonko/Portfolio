import { createFileRoute } from "@tanstack/react-router";
import BackButton from "../components/BackButton";
export const Route = createFileRoute("/portfolio")({
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
              src="portfolio-pic.png"
              alt="SkinSmart preview"
              className="w-full sm:h-96 object-fill block"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-center sm:text-left">
              My Portfolio
            </h1>
            <p className="text-lg text-gray-600 max-w-xl text-center sm:text-left">
              My portfolio site built to showcase my projects and skills as a
              developer. It features a clean, modern design with nice animations
              and a responsive layout to ensure a great user experience across
              all devices.
            </p>

            <div className="flex gap-4 justify-center sm:justify-start my-10 sm:my-6">
              <a
                href="https://github.com/NikitaMokhonko/Portfolio"
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
                  <li>Ribbon that tracks mouse movement</li>
                  <li>Cool cards that show my tech stack</li>
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
              I needed a personal portfolio website to effectively showcase my
              projects, skills and experience to potential employers and
              clients. The challenge was to create a site that was visually
              appealing, easy to navigate and highlighted my strengths as a
              developer.
            </p>

            <h4 className="text-xl font-semibold">Solution</h4>
            <p className="text-gray-600">
              I designed and developed a clean, modern portfolio website that
              features a responsive layout and smooth animations. The site
              highlights my key projects, skills and experience in an organized
              manner, making it easy for visitors to learn more about me and my
              work.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contributions</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Clean UI/UX, logo & animations</li>
              <li>Hosting with purchased domain through Vercel</li>
              <li>Backend that keeps track of page views</li>
            </ul>

            <h4 className="text-xl font-semibold">Takeaways</h4>
            <p className="text-gray-600">
              The last 10% of the polish can take up to 90% of the time. But
              paying attention to small details like animations and
              responsiveness can make a big difference in user experience.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
