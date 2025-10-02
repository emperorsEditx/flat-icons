import {
  AlignJustify,
  LogOut,
  TextAlignJustify,
  User,
  UserRound,
} from "lucide-react";
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
        href="/favourites"
        className="hover:text-green-600 font-semibold transition-colors duration-200 py-2"
      >
        Favourites
      </Link>
      <span className="text-gray-300">|</span>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserRound
            strokeWidth={3}
            width={20}
            absoluteStrokeWidth
            cursor={"pointer"}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              href="/profile"
              className=" hover:text-green-600 font-medium transition-colors duration-200 py-2 flex gap-3.5 items-center"
            >
              <User />{" "}
              <div>
                Account <br/><span className="font-normal">yourname@gmail.com</span>
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut />{" "}
            <Link href="/qa" className="font-semibold">
              Log Out
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <AlignJustify color="green" cursor={"pointer"} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/about">About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/qa">Q&A</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/license">License</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/privacy">Privacy</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/legal-notice">Legal Notice</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
