import Branding from "./Branding";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-52 py-6">
      <Branding />
      <NavBar />
    </header>
  );
}
