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
        className="hover:text-green-600 font-bold transition-colors duration-200 py-2 text-2xl"
      >
        Favorites
      </Link>
      <span className="text-gray-300">|</span>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
          >
            <path
              d="M11 11C14.0376 11 16.5 8.53757 16.5 5.5C16.5 2.46243 14.0376 0 11 0C7.96243 0 5.5 2.46243 5.5 5.5C5.5 8.53757 7.96243 11 11 11Z"
              fill="#13415A"
            />
            <path
              d="M11 13.75C2.6125 13.75 0 19.25 0 19.25V22H22V19.25C22 19.25 19.3875 13.75 11 13.75Z"
              fill="#13415A"
            />
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              href="/profile"
              className=" hover:text-green-600 font-medium transition-colors duration-200 py-2 flex gap-3.5"
            >
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1"
              >
                <path
                  d="M16 18.8372C16 19.476 15.4907 20 14.8604 20H1.13956C0.512283 20 0 19.4779 0 18.8372C0 14.3419 3.58172 10.6977 8 10.6977C12.4183 10.6977 16 14.3419 16 18.8372ZM8 12.093C4.41564 12.093 1.49576 14.9876 1.3753 18.6047H14.6247C14.5042 14.9876 11.5844 12.093 8 12.093ZM8 9.76744C5.34903 9.76744 3.2 7.58093 3.2 4.88372C3.2 2.18652 5.34903 0 8 0C10.651 0 12.8 2.18652 12.8 4.88372C12.8 7.58093 10.651 9.76744 8 9.76744ZM8 8.37209C9.89355 8.37209 11.4286 6.8103 11.4286 4.88372C11.4286 2.95715 9.89355 1.39535 8 1.39535C6.10645 1.39535 4.57143 2.95715 4.57143 4.88372C4.57143 6.8103 6.10645 8.37209 8 8.37209Z"
                  fill="#13415A"
                />
              </svg>
              <div>
                <span className="font-bold">Account</span> <br />
                <span className="font-normal text-gray-500">
                  yourname@gmail.com
                </span>
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4531 13.4718C11.5078 13.4718 12.363 12.6735 12.363 11.6889V3.31106C12.363 2.3265 11.5078 1.52818 10.4531 1.52818H6.72961C6.27772 1.52818 5.91109 1.18593 5.91109 0.76409C5.91109 0.342251 6.27772 0 6.72961 0H10.4531C12.4116 0 14 1.48201 14 3.31106V11.6889C14 13.5172 12.4116 15 10.4531 15H6.72961C6.27772 15 5.91109 14.6577 5.91109 14.2359C5.91109 13.8141 6.27772 13.4718 6.72961 13.4718H10.4531ZM4.4072 10.8501C4.08748 11.1485 3.56908 11.1485 3.24934 10.8501L0.239595 8.04047C0.0861244 7.8972 0 7.703 0 7.50004C0 7.29708 0.086113 7.10288 0.239595 6.95962L3.24934 4.15001C3.56906 3.85154 4.08745 3.85154 4.4072 4.15001C4.72692 4.44768 4.72692 4.9316 4.4072 5.23008L2.79404 6.73597H8.65746C9.10935 6.73597 9.47598 7.07822 9.47598 7.50006C9.47598 7.9219 9.10935 8.26415 8.65746 8.26415H2.79404L4.4072 9.77004C4.72692 10.0685 4.72692 10.5516 4.4072 10.8501Z"
                fill="#13415A"
              />
            </svg>

            <Link href="/qa">
              <span className="font-bold pl-1.5">Log Out</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <svg
            width="30"
            height="25"
            viewBox="0 0 30 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
          >
            <line
              x1="30"
              y1="12.3"
              x2="-1.94354e-07"
              y2="12.3"
              stroke="#2CB88B"
              strokeWidth="3"
            />
            <line
              x1="30"
              y1="1.5"
              x2="-1.94354e-07"
              y2="1.5"
              stroke="#2CB88B"
              strokeWidth="3"
            />
            <line
              y1="-1.5"
              x2="30"
              y2="-1.5"
              transform="matrix(1 0 -4.21468e-08 -1 0 21.6)"
              stroke="#2CB88B"
              strokeWidth="3"
            />
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="px-5 py-3 w-[255px]">
          <DropdownMenuItem className="mb-2 p-2">
            <Link className="text-xl font-bold text-[#13415A]" href="/about">About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="mb-2 p-2">
            <Link className="text-xl font-bold text-[#13415A]" href="/qa">Q&A</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="mb-2 p-2">
            <Link className="text-xl font-bold text-[#13415A]" href="/license">License</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="mb-2 p-2">
            <Link className="text-xl font-bold text-[#13415A]" href="/privacy">Privacy</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="mb-2 p-2">
            <Link className="text-xl font-bold text-[#13415A]" href="/legal-notice">Legal Notice</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
