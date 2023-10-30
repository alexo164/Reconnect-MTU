import { Text, Breadcrumbs } from "@/components";
import { slugToTitle } from "@/utils/utils";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getCategoryRelatedPostQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await sanityFetch<SanityDocument>({
        query: getCategoryRelatedPostQuery,
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

const CategoryDetail = async ({ params }: { params: { slug: string } }) => {
    const articles = await sanityFetch<SanityDocument>({
        query: getCategoryRelatedPostQuery,
        params,
    });
    const title = slugToTitle(params.slug);
    
};

export default CategoryDetail;
