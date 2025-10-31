import { useNavigate } from "@tanstack/react-router";

export type ProjectCardProps = {
  title: string;
  description?: string;
  img: string;
  to?: string;
};

export default function ProjectCard({
  title,
  description,
  img,
  to,
}: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate({ to })}
      className="relative group cursor-pointer"
    >
      <img
        src={img}
        alt={title}
        className="h-50 w-100 border object-cover transition duration-500 ease-in-out filter group-hover:blur-lg shadow-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 bg-black/30">
              <span className="text-white text-center text-xl font-bold mx-5">
                  {title}
                  <br/>
                <span className="text-sm text-white font-semibold">
                      { description}
                </span>
              </span>
            </div>
    </div>
  );
}
