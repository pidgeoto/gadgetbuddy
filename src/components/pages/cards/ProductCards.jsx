import Image from "next/image";
import Link from "next/link";

const ProductCards = ({ products }) => {

  const fullStars = Math.floor(products.thirtytwo_Score / 200);
  const remainder = products.thirtytwo_Score % 200;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={i}>
        <Image
          src="/images/star.webp"
          height={100}
          width={100}
          alt="star"
          className="h-5 w-5"
          loading="eager"
        />
      </span>
    );
  }

  if (remainder > 16) {
    stars.push(
      <span key="half">
        <Image
          src="/images/halfstar.webp"
          height={100}
          width={100}
          alt="half star"
          className="h-5 w-5"
        />
      </span>
    );
  }
  return (
    <Link
      href={`/${products.categoryname}/${products.slug}`}
    >
      <div className="h-56 lg:h-72 w-40 sm:w-48 lg:w-56 rounded-2xl bg-white transition cursor-pointer hover:shadow-2xl  border border-slate-200 mb-6">
        <div className="h-3/4">
          <div className=" h-8 mt-4 w-[80%]  bg-[#BCFF63] relative overflow-hidden">
            <div className="flex mt-1  ml-2 gap-x-2 justify-start ">
              {stars}
            </div>
            <div className="h-8  w-8 bg-white absolute -right-4 top-0 rotate-45"></div>
          </div>
          {products.img1 && (
            <Image
              alt={products.model_name}
              src={products.img1}
              className="h-40 lg:h-full w-full object-contain p-4 rounded-2xl"
              height={1000}
              width={1000}
              loading="lazy"
              {...(products.img1.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
            />
          )}
        </div>
        <div className="h-1/4 text-black bg-gray-100 pl-2 rounded-2xl px-4 pt-2 flex justify-between shadow-md hover:shadow-2xl items-center">
          <div>
            <h4 className=" capitalize">{products.brandname}</h4>
          </div>
          <div>
            <h5 className=" capitalize">
              {products.model_name.length > 18
                ? products.model_name.slice(0, 18) + "..."
                : products.model_name}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCards;
