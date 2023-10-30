import { Text, Breadcrumbs } from "@/components";
import {slugToTitle} from "@/utils/utils";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getSeriesRelatedPostQuery} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument>({
    query: getSeriesRelatedPostQuery,
    params,
  });
  if (!post)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: slugToTitle(params.slug),
    description: post?.meta_description,
  };
}


const SeriesDetail = async ({ params }: { params: { slug: string } }) => {
  const articles = await sanityFetch<SanityDocument>({
    query: getSeriesRelatedPostQuery,
    params,
  });
  const title=slugToTitle(params.slug)
  
};

export default SeriesDetail;
