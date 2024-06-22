import Image from "next/image";

const NoSearch = () => {
  return (
    <div className="w-full bg-white h-[fit-content]">
      <Image
        src="/images/no-fo.svg"
        alt="Page not found"
        loading="lazy"
        className="max-w-[980px] w-full"
        height={750}
        width={750}
      />
    </div>
  );
};

export default NoSearch;
