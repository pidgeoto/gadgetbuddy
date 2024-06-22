import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="flex flex-row items-center">
        <Image
          src="/images/32mobi.webp"
          alt="maain logo"
          width={250}
          height={150}
          loading="eager"
        />
      </Link>
    </div>
  );
};

export default Logo;
