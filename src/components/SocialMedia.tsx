import { Social } from "@/data";
import Link from "next/link";

interface Props {
  socials: Social[];
}

export default function SocialMedia({ socials }: Props) {
  return (
    <ul className="ml-1 mt-4 flex items-center cursor-pointer">
      {socials.map((social) => (
        <li key={social.name} className="mr-5 h-7 w-7 cursor-pointer">
          <Link
            href={social.url}
            className="fill-slate-400 hover:fill-slate-200 transition duration-200"
            target="_blank"
          >
            {social.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
