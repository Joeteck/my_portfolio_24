import Card from "@/components/globals/ui/Cards";
import Link from "next/link";

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
            {/* Call-to-Action Button */}
            <Link href={link} className="card-link mt-4 inline-block">
                Read More
            </Link>
        </Card>
    );
};

export default BlogPostPreviewCard;
