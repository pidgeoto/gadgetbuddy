import { getBannerData } from "@/api/getBanner";

const ComparisionContent = async () => {
  const fetchcontenResult = getBannerData();
  const contentHome = await fetchcontenResult;
  
  const sanitizeHTML = (htmlString) => {
    if (typeof htmlString === "string") {
      let sanitizedString = htmlString.replace(/{{|}}/g, "");
      sanitizedString = sanitizedString.replace(/'/g, "&#39;");
      return sanitizedString;
    }
    return "";
  };

  return (
    <div>
      <div className="my-8"
        dangerouslySetInnerHTML={{
          __html: sanitizeHTML(contentHome.Popularcomparisoncontent),
        }}
      />
    </div>
  );
};

export default ComparisionContent;