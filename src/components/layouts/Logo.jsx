import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image src="/assets/logo.png" alt="Logo" width={50} height={40}></Image>
      <h2 className="md:text-xl font-bold">
        Hero <span className="text-primary">Kidz</span>
      </h2>
    </Link>
  );
};

export default Logo;
