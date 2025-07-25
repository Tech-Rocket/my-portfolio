import ResponsiveMenu from "../responsive-menu";

export default function Header() {
  return (
    <header className="p-5  antialiased">
      <nav className="w-full bg-white rounded-full p-2 h-[3rem] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-green-600 text-white rounded-full border-none flex items-center justify-center font-bold">
            TR
          </div>
          <h2 className="text-green-600 text-xl font-medium">Rocket</h2>
        </div>
        <ResponsiveMenu />
      </nav>
    </header>
  );
}
