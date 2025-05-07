import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900">
      {/* Left side - Title and GitHub link */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Image
            src="/T-Sender.svg"
            alt="TSender Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold">TSender</h1>
        </div>
        <a
          href="https://github.com/jayanand05/tsender"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white"
        >
          <FaGithub size={20} />
        </a>
      </div>

      {/* Right side - Connect button */}
      <div>
        <ConnectButton />
      </div>
    </header>
  );
}
