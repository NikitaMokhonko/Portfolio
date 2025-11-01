import { useState, useEffect } from "react";

function TechDeck({
  items,
}: {
  items: { name: string; Icon: any; color?: string }[];
}) {
  const [focused, setFocused] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="mt-6">
      <div className="relative h-40 flex items-center justify-start">
        <div className="relative flex items-center">
          {items.map((item, i) => {
            const offset = i - 48;
            const direction =
              i % 2 === 0 ? "-translate-x-50" : "translate-x-50";

            return (
              <button
                key={item.name}
                onMouseEnter={() => setFocused(i)}
                onMouseLeave={() => setFocused(null)}
                className={`
                  group relative w-35 h-50 rounded-2xl bg-white border border-gray-100 shadow-md 
                  flex items-center justify-center transition-transform duration-1000 ease-out
                  ${mounted ? "translate-x-0 opacity-100" : `${direction} opacity-0`}
                  hover:-translate-y-2 hover:scale-105
                `}
                style={{
                  marginLeft: i === 0 ? 0 : offset,
                  zIndex: focused === i ? 40 : 10 + i,
                }}
                aria-label={item.name}
                type="button"
              >
                <div className="flex flex-col items-center justify-center pointer-events-none">
                  <div
                    className="text-4xl"
                    style={{ color: item.color ?? "black" }}
                  >
                    <item.Icon />
                  </div>
                </div>

                <div
                  className={`absolute bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-black text-md
                    transition-all duration-300 pointer-events-none
                    ${focused === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                  `}
                >
                  {item.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TechDeck;
