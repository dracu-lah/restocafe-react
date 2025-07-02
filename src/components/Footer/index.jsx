import { GithubIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="p-4 bg-zinc-900 flex justify-center items-center">
      <a
        href="https://github.com/dracu-lah/restocafe-react"
        target="_blank"
        className="flex cursor-pointer gap-2 font-bold text-gray-400"
      >
        Source
        <GithubIcon />
      </a>
    </div>
  );
};

export default Footer;
