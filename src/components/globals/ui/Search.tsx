"use client";

import { useState, useEffect } from "react";
import { searchData } from "@/data/searchData";
import { Search as SearchIcon } from "lucide-react";
import { useRouter } from "next/router";

// Define the type for search results
interface SearchResult {
    id: number;
    name: string;
    description: string;
    category: string;
    link: string;
}

export const Search = () => {
    const [query, setQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
    const [activeIndex, setActiveIndex] = useState(-1);

    const router = useRouter();  // Initialize the router

    useEffect(() => {
        if (query.trim() === "") {
            setFilteredResults([]);
            return;
        }

        const results = searchData.filter(
            (item) =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredResults(results);
    }, [query]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            setActiveIndex((prev) => (prev < filteredResults.length - 1 ? prev + 1 : prev));
        } else if (e.key === "ArrowUp") {
            setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === "Enter" && activeIndex >= 0) {
            // Use router.push() to navigate to the route
            router.push(filteredResults[activeIndex].link);
        }
    };

    const handleItemClick = (link: string) => {
        // Use router.push() to navigate to the route
        router.push(link);
    };

    return (
        <div className="relative w-full max-w-lg z-50">
            <div className="flex items-center border border-gray-300 rounded-full px-3">
                <SearchIcon className="w-5 h-5 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search components..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-2 bg-transparent outline-none"
                />
            </div>

            {query && (
                <ul className="absolute w-96 bg-white border rounded-lg mt-2 max-h-60 overflow-auto shadow-md z-[9999] top-full left-0">
                    {filteredResults.length > 0 ? (
                        filteredResults.map((item, index) => (
                            <li
                                key={item.id}
                                className={`p-3 hover:bg-gray-100 cursor-pointer z-50 ${
                                    index === activeIndex ? "bg-gray-200" : ""
                                }`}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => handleItemClick(item.link)}  // Use the new click handler
                            >
                                <span className="font-semibold">{item.name}</span> -{" "}
                                <span className="text-gray-500">{item.description}</span>
                            </li>
                        ))
                    ) : (
                        <li className="p-3 text-gray-500">No results found.</li>
                    )}
                </ul>
            )}
        </div>
    );
};

