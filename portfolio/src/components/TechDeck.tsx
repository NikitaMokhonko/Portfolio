import { useState } from "react";

function TechDeck({
  items,
}: {
  items: { name: string; Icon: any; color?: string }[];
}) {
  const [focused, setFocused] = useState<number | null>(null);

  return (
    <div className="mt-6">
      <div className="relative h-40 flex items-center justify-beginning">
        <div className="relative flex items-center">
          {items.map((item, i) => {
            const offset = i - 48;
            return (
              <button
                key={item.name}
                onMouseEnter={() => setFocused(i)}
                onMouseLeave={() => setFocused(null)}
                onFocus={() => setFocused(i)}
                onBlur={() => setFocused(null)}
                className={`group relative w-35 h-50 rounded-2xl  bg-white border border-gray-100 shadow-md flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(.2,.9,.2,1)] focus:outline-none`}
                style={{
                  marginLeft: i === 0 ? 0 : offset,
                  zIndex: focused === i ? 40 : 10 + i,
                  transform:
                    focused === i ? "translateY(-10px) scale(1.15)" : "none",
                }}
                aria-label={item.name}
                type="button"
              >
                <div className="flex flex-col items-center justify-center pointer-events-none">
                  <div
                    className="text-4xl"
                    style={{ color: item.color ?? "black" }}
                    aria-hidden="true"
                  >
                    <item.Icon />
                  </div>
                </div>

                <div
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-black text-md opacity-0 transform translate-y-2 transition-all duration-400 pointer-events-none"
                  style={{
                    opacity: focused === i ? 1 : 0,
                    transform:
                      focused === i ? "translateY(0)" : "translateY(8px)",
                  }}
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