import { useNavigate } from "@tanstack/react-router";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          navigate({ to: "/" });
        }
      }}
      className="text-md text-gray-600 hover:text-black mb-10 inline-flex items-center gap-2 cursor-pointer font-semibold"
      >
          <img src="arrow-back.png" className="w-5 h-5"></img>
      Back
    </button>
  );
}

export default BackButton;
