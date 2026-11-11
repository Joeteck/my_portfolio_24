import { FaCircle, FaRegCircle } from "react-icons/fa";

interface SkillRatingProps {
    title: string;
    items: string[];
    rating: number; // 1–5
}

const SkillRating = ({ title, items, rating }: SkillRatingProps) => {
    return (
        <div className="mb-4">
        {/* Title + Rating */}
        <div className="flex items-center justify-between">
            <h4 className="font-semibold text-sm">{title}</h4>
            <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) =>
                i < rating ? (
                <FaCircle key={i} className="text-[#1bbb8b] text-[10px]" />
                ) : (
                <FaRegCircle key={i} className="text-[#1bbb8b] text-[10px]" />
                )
            )}
            </div>
        </div>

        {/* List with bullets */}
        <ul className="list-disc list-inside text-sm text-primaryLight mt-1 space-y-1">
            {items.map((item, idx) => (
            <li key={idx} className="ml-3">{item}</li>
            ))}
        </ul>
        </div>
    );
};

export default SkillRating;