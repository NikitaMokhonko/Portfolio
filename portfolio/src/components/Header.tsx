export default function Header() {
  return (
    <header>
      <div className="border-b border-black bg-white">
        <div className="flex flex-row px-5 py-2 justify-center sm:justify-start space-x-2 sm:space-x-3 items-center">
          <img
            alt="Nikita Mokhonko Logo"
            className="w-16 h-16"
            src="nm.png"
          />
          <h1 className="text-3xl text-black">Nikita Mokhonko</h1>
        </div>
      </div>
    </header>
  );
}
