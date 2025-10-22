import { useNavigate } from "@tanstack/react-router";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="relative z-50">
      <div className="border-b border-black bg-white flex justify-between">
        <button
          onClick={() => navigate({ to: "/" })}
          className="flex flex-row px-5 py-2 justify-center sm:justify-start space-x-2 sm:space-x-3 items-center cursor-pointer"
        >
          <img alt="Nikita Mokhonko Logo" className="w-16 h-16" src="nm.png" />
          <h1 className="text-3xl text-black">Nikita Mokhonko</h1>
        </button>
        <div className="flex flex-row pr-10 py-2 justify-center space-x-10 items-center text-xl">
          <button
            onClick={() => navigate({ to: "/about" })}
            className="group flex flex-col items-start cursor-pointer bg-transparent border-0 p-0"
            aria-label="About"
            type="button"
          >
            <span className="pointer-events-none">About</span>
            <span className="block h-px bg-black w-full transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </button>

          <button
            onClick={() => navigate({ to: "/projects" })}
            className="group flex flex-col items-start cursor-pointer bg-transparent border-0 p-0"
            aria-label="Projects"
            type="button"
          >
            <span className="pointer-events-none">Projects</span>
            <span className="block h-px bg-black w-full transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </button>

          <button
            onClick={() => navigate({ to: "/contact" })}
            className="group flex flex-col items-start cursor-pointer bg-transparent border-0 p-0"
            aria-label="Contact"
            type="button"
          >
            <span className="pointer-events-none">Contact</span>
            <span className="block h-px bg-black w-full transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </button>
        </div>
      </div>
    </header>
  );
}
