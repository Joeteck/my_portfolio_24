"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation"; // Use next/navigation in the app directory
import { FlipWords } from "../ui/flip-words";
import HeroNavbar from "../HeroNavbar";
import SocialDropdown from "../SocialDropdown";
import { ThreeDCardDemo } from "../ui/3Dcard-effect";


export default function Example() {

    return (
        <div className="w-full h-full bg-primary-green">
            <ThreeDCardDemo/>
        </div>
    )
}