import ProjectCard from "@/components/ProjectCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-[80%] mx-auto min-h-screen bg-white text-black">
      <style>{`
        :root { --ease: cubic-bezier(.2,.9,.2,1); }
        @keyframes gentle-pop { from { opacity: 0; transform: translateY(8px) scale(.997);} to { opacity: 1; transform: translateY(0) scale(1);} }
        .animate-gentle-pop { animation: gentle-pop 480ms var(--ease) both; }
        .contact-card { transition: transform 280ms var(--ease), box-shadow 280ms var(--ease), background 200ms; }
        .contact-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(2,6,23,0.08); }
      `}</style>

      <div className="max-w-4xl mx-auto px-6 pt-20">
        <header className="text-center mb-10 animate-gentle-pop">
          <h1 className="text-5xl">My Projects</h1>
        </header>
      </div>
      <div className="mt-20 px-10 flex flex-col sm:flex-row space-y-10 sm:space-y-0 justify-between mb-20 animate-gentle-pop">
        <ProjectCard
          title="SkinSmart"
          description="Responsive frontend website built for a CS2 business, designed
                    to let users easily contact the company to sell their items.
                    The site features a sleek, modern interface, clear
                    presentation of contact options, and a layout optimized for
                    quick navigation."
          img="Skinsmart-picture.png"
          to="/skinsmart"
        />
        <ProjectCard
          title="Nova Bank"
          description="Fully functioning mock banking application built in a team of
                    11 people, with features such as log in, dashboard, transfers
                    between accounts and users, transaction history with
                    AI-powered search, loans and a fully robust admin page."
          img="Novabank-picture.png"
          to="/novabank"
        />
        <ProjectCard
          title="Sweethouse"
          description="Full-stack web application for a French pastry business,
                    designed to showcase products and provide a seamless browsing
                    experience for visitors. The site features responsive layouts,
                    an intuitive UI/UX, and integrated click tracking through
                    Kafka to gather insights on user interactions."
          img="Sweethouse-picture.png"
          to="/sweethouse"
        />
      </div>
      <div className="mt-14 px-10 flex flex-col sm:flex-row space-y-10 sm:space-y-0 justify-between mb-20">
        <ProjectCard
          title="Home EntertAInment System"
          description="Full-stack AI-powered entertainment platform designed to help users discover and interact with personalized content such as quizzes, movies, and stories through a sleek and responsive interface."
          img="he-picture.png"
          to="/home-entertainment"
        />
        <ProjectCard
          title="</Salt> AI Assessment"
          description="Full-stack web app built for </Salt> by an 8-person team. Provides clients with an AI-maturity assessment via a dynamic questionnaire, with a modern admin UI and a secure backend for user data."
          img="AI-assessment-picture.png"
          to="/ai-assessment"
        />
        <ProjectCard
          title="Portfolio Website"
          description="This website! A personal portfolio site built to showcase my projects and skills, featuring a clean design, smooth animations, and responsive layouts for a great viewing experience across all devices."
          img="portfolio-pic.png"
          to="/portfolio"
        />
      </div>
    </div>
  );
}
