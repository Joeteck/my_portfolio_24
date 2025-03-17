import Card from "@/components/globals/ui/Cards";
import { ArrowBigRightDash } from "lucide-react";

type BlogPostPreviewProps = {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
};

const BlogPostPreviewCard = ({ title, description, imageUrl, link }: BlogPostPreviewProps) => {
    return (
        <Card
            variant="blog"
            image={imageUrl}
            title={title}
            description={description}
        >
            <a href={link} className="inline-flex items-center gap-1 mt-4 text-primary font-medium hover:underline">
                Read More <ArrowBigRightDash />
            </a>
        </Card>
    );
};

export default BlogPostPreviewCard;
