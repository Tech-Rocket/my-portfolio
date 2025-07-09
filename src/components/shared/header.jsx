import { RiMenuFoldLine } from "react-icons/ri";

export default function Header() {
  return (
    <header className="p-5">
      <nav className="w-full bg-white rounded-full p-4 h-[4.5rem] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-green-600 text-white rounded-full border-none flex items-center justify-center font-bold">
            TR
          </div>
          <h2 className="text-green-600 text-2xl font-medium">Rocket</h2>
        </div>

        <button>
          <RiMenuFoldLine className="text-3xl text-green-600 cursor-pointer" />
        </button>
      </nav>
    </header>
  );
}
