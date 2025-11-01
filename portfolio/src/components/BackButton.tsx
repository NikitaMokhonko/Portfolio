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
      className="text-sm text-gray-600 hover:text-black mb-6 inline-flex items-center gap-2 cursor-pointer"
    >
      ← Back
    </button>
  );
}

export default BackButton;
