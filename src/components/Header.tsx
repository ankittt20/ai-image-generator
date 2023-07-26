import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-slate-200 z-50 items-center shadow-md">
      <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          alt="Logo"
          height={30}
          width={30}
        />
        <div>
          <h1 className="font-bold">
            <span className="text-violet-500">AI</span> Image Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALL·E 2, Chat GPT and Microsoft Azure!
          </h2>
        </div>
      </div>

      <div className="flex text-xs md:text-base divide-x divide-black items-center text-gray-700">
        <Link
          href="https://www.linkedin.com/in/ankittt20/"
          className="px-2 font-light text-right"
        >
          LinkedIn
        </Link>
        <Link
          href="https://www.github.com/ankittt20/"
          className="px-2 font-light text-right"
        >
          GitHub
        </Link>
      </div>
    </header>
  );
}

export default Header;
