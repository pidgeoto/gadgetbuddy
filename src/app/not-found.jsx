import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full bg-[white] h-[fit-content] flex items-center justify-center">
      <div className="flex flex-col items-center mt-4">
        <Image
          src="/images/NotFound.gif"
          alt="Page not found"
          loading="lazy"
          className="max-w-[520px] w-full mb-4"
          height={750}
          width={750}
        />
        <Link href="/" className="text-blue-500 pb-4 mb-8 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
