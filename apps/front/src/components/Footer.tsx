import { TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-10 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-6 text-sm ">
        <p>© 2023 WhatAnIcon</p>
        <nav className="flex space-x-4 mt-2 md:mt-0">
          <a href="/about" className="hover:text-green-600">
            About
          </a>
          <a href="/collections" className="hover:text-green-600">
            Collections
          </a>
          <a href="/license" className="hover:text-green-600">
            License
          </a>
          <a href="/license" className="hover:text-green-600">
            Q&A
          </a>
          <a href="/privacy" className="hover:text-green-600">
            License
          </a>
          <a href="/privacy" className="hover:text-green-600">
            Privacy
          </a>
          <a href="/privacy" className="hover:text-green-600">
            Legal Notice
          </a>
        </nav>
        <p className="flex items-center space-x-2 mt-2 md:mt-0 gap-2">
          Get Updates:{" "}
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 0C7.83535 0 0 7.83535 0 17.5C0 27.1646 7.83535 35 17.5 35C27.1646 35 35 27.1646 35 17.5C35 7.83535 27.1646 0 17.5 0Z"
              fill="black"
            />
            <path
              d="M19.4178 15.9163L26.9093 7.20801H25.1341L18.6292 14.7693L13.4337 7.20801H7.44141L15.2979 18.642L7.44141 27.774H9.21676L16.0861 19.789L21.5729 27.774H27.5652L19.4173 15.9163H19.4178ZM9.85643 8.54448H12.5833L25.1349 26.4983H22.4081L9.85643 8.54448Z"
              fill="white"
            />
          </svg>
        </p>
      </div>
    </footer>
  );
}
