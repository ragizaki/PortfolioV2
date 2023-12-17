import NavLink from "@/components/NavLink";
import SocialMedia from "@/components/SocialMedia";
import RecentTrack from "@/components/RecentTrack";
import { navLinks, socials } from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zaki Machfj",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24 bg-gray-800 text-slate-400">
      <div className="grid grid-cols-1 lg:grid-cols-2 transition duration-300">
        <div className="lg:sticky lg:flex lg:flex-col lg:max-h-screen lg:justify-between lg:top-0">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              Zaki Machfj
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Backend Developer Intern @ Deliverect
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              Passionate about backend development, generative AI and building
              software solutions.
            </p>
            <ul className="mt-12">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} />
              ))}
            </ul>
          </div>
          <RecentTrack />
          <SocialMedia socials={socials} />
        </div>
        <div className="">Experience</div>
      </div>
    </main>
  );
}
