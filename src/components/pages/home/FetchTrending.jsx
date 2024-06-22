
import FeaturedCard from "../cards/FeaturedCard";

const FetchTrending = async ({displayedProducts}) => {
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-3 lg:gap-5">
        {displayedProducts.map((product) => (
          <FeaturedCard key={product.model_id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FetchTrending;
