"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Profile", href: "/profile" },
  { name: "Config", href: "/config" },
  { name: "Info", href: "/info" },
];

export default function UsersLayout({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState("")
  const pathName = usePathname();

  return (
    <div>
      <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);

        return (
          <Link
            className={`${isActive ? "text-red-600" : "text-blue-600"}`}
            key={link.href}
            href={link.href}
          >
            {link.name}
          </Link>
        )
      })}
      {children}
    </div>
  )
}