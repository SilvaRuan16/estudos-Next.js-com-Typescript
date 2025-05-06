import Link from "next/link";

export default function Config() {
  return (
    <div className="flex flex-col p-3">
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/config"}>Config</Link>
      <Link href={"/info"}>Info</Link>
    </div>
  )
}