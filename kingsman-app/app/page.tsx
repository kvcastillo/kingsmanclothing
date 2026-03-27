"use server";
import Image from "next/image";

export default async function Home() {
  return (
    <div className=" top:0 overflow-hidden">
      <Image
        src="/images/logo.jpg"
        alt="Hero Image"
        fill
        className="object-cover opacity-50"
        priority
      />
    </div>
  );
}
