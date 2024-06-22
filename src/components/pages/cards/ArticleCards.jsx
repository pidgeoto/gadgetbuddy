import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
const ArticleCards = ({ data }) => {
  return (
    <div className=" flex flex-col overflow-hidden rounded-lg shadow transition hover:shadow-lg min-h-full">
      <div className="bg-white p-4 sm:p-1 flex-1">
        <Link href={`/articles/${data.slug}`}>
          <div className="flex justify-between items-baseline ">
            <HoverCard openDelay={50} closeDelay={50}>
              <HoverCardTrigger asChild>
                <div className="mx-auto">
                  {data.image_url && (
                    <Image
                      alt={data.title}
                      src={data.image_url}
                      className=" h-40 w-full object-contain p-4"
                      height={1000}
                      width={1000}
                      loading="eager"
                    />
                  )}

                  <h4 className="text-gray-900 pl-2 hover:text-[#b8b8b8] text-left">
                    {data.title}
                  </h4>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                
                </div>
                <h4 className="text-sm font-semibold">{data.title}</h4>
                <div className="flex-col space-y-1">
                  <h6 className="text-sm pb-1 text-teal-400">
                    @{data.author_name}
                  </h6>
                  <div className="flex items-center">
                    <h6 className="text-xs text-muted-foreground">
                      {data.meta_desc}
                    </h6>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCards;
