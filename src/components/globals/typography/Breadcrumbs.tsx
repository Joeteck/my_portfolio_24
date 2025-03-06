"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
interface BreadcrumbProps {
  separator?: string; // Custom separator (e.g., "/", ">", "→")
}

export function Breadcrumb({ separator = ">" }: BreadcrumbProps) {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter(Boolean); // Remove empty segments

    return (
        <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
            <li>
            <Link href="/" className="breadcrumb-item">
                Home
            </Link>
            </li>
            {pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;

            return (
                <li key={path} className="flex items-center">
                <span className="breadcrumb-separator">{separator}</span>
                {isLast ? (
                    <span className="breadcrumb-item active">{segment}</span>
                ) : (
                    <Link href={path} className="breadcrumb-item">
                    {segment}
                    </Link>
                )}
                </li>
            );
            })}
        </ul>
        </nav>
    );
}
