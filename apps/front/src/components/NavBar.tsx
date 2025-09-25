import { AlignJustify, TextAlignJustify, UserRound } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function NavBar() {
  return (
    <nav className="flex items-center space-x-3">
      <Link
        href="/favorites"
        className="hover:text-green-600 font-semibold transition-colors duration-200 py-2"
      >
        Favorites
      </Link>
      <span className="text-gray-300">|</span>
      <Link
        href="/profile"
        className=" hover:text-green-600 font-medium transition-colors duration-200 py-2"
      >
        <UserRound strokeWidth={3} width={20} absoluteStrokeWidth />
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <AlignJustify color="green" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>About</DropdownMenuItem>
          <DropdownMenuItem>Q&A</DropdownMenuItem>
          <DropdownMenuItem>License</DropdownMenuItem>
          <DropdownMenuItem>Privacy</DropdownMenuItem>
          <DropdownMenuItem>Legal Notice</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
