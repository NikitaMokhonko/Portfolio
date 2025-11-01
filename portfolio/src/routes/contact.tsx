import { createFileRoute } from "@tanstack/react-router";
import Ribbons from "@/components/Ribbon";
import { SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-[80%] mx-auto min-h-screen bg-white text-black cursor-default">
      <style>{`
        :root { --ease: cubic-bezier(.2,.9,.2,1); }
        @keyframes gentle-pop { from { opacity: 0; transform: translateY(8px) scale(.997);} to { opacity: 1; transform: translateY(0) scale(1);} }
        .animate-gentle-pop { animation: gentle-pop 480ms var(--ease) both; }
        .contact-card { transition: transform 280ms var(--ease), box-shadow 280ms var(--ease), background 200ms; }
        .contact-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(2,6,23,0.08); }
      `}</style>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <header className="text-center mb-15 animate-gentle-pop">
          <h1 className="text-5xl">Get in touch</h1>
        </header>

        <main className="animate-gentle-pop">
          <div className="flex flex-col sm:flex-row sm:gap-10 justify-center ">
            <div className="space-y-5 mb-5">
              <a
                href="https://www.linkedin.com/in/nikitamokhonko/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card min-w-70 flex items-center gap-4 px-5 py-5 rounded-2xl border border-gray-100 bg-white shadow-sm no-underline hover:bg-white"
              >
                <div className="p-3 rounded-lg bg-[#0A66C2] from-pink-500 to-yellow-400 text-white">
                  <SiLinkedin size={28} />
                </div>
                <div>
                  <div className="text-lg font-medium">LinkedIn</div>
                  <div className="text-xs text-gray-500">Nikita Mokhonko</div>
                </div>
              </a>
              <a
                href="https://instagram.com/nikitamokhonko"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card min-w-70 flex items-center gap-4 px-5 py-5 rounded-2xl border border-gray-100 bg-white shadow-sm no-underline hover:bg-white"
              >
                <div className="p-3 rounded-lg bg-linear-to-b from-pink-500 to-[#feda75] text-white">
                  <SiInstagram size={28} />
                </div>
                <div>
                  <div className="text-lg font-medium">Instagram</div>
                  <div className="text-xs text-gray-500">@nikitamokhonko</div>
                </div>
              </a>
            </div>
            <div className="space-y-5">
              <a
                href="https://github.com/nikitamokhonko"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card min-w-70 flex items-center gap-4 px-5 py-5 rounded-2xl border border-gray-100 bg-white shadow-sm no-underline hover:bg-white"
              >
                <div className="p-3 rounded-lg bg-gray-900 text-white">
                  <SiGithub size={28} />
                </div>
                <div>
                  <div className="text-lg font-medium">GitHub</div>
                  <div className="text-xs text-gray-500">
                    github.com/nikitamokhonko
                  </div>
                </div>
              </a>
              <a
                href="mailto:nikitamokhonko@gmail.com"
                className="contact-card min-w-70 flex items-center gap-4 px-5 py-5 rounded-2xl border border-gray-100 bg-white shadow-sm no-underline hover:bg-white"
              >
                <div className="p-3 rounded-lg bg-blue-500 text-white">
                  <HiOutlineMail size={26} />
                </div>
                <div>
                  <div className="text-lg font-medium">Email</div>
                  <div className="text-xs text-gray-500">
                    nikitamokhonko@gmail.com
                  </div>
                </div>
              </a>

            </div>
          </div>
        </main>
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
