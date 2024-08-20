"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export function ThreeDCardDemo() {
    return (
        <CardContainer className="inter-var bg-primary-green">
            <CardBody className="bg-primary-green relative border-black/[0.1] w-[90%] h-auto rounded-xl border top-0">
                <CardItem
                    className="text-lg font-bold text-grey-100  bg-primary-green"
                >
                    Making coding look easy
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="30"
                    className="text-grey-100 text-xs max-w-xs"
                >
                    Growth, consistency, and collaboration. 
                </CardItem>
                <CardItem
                    translateZ="30"
                    rotateX={10}
                    rotateZ={-5}
                    className="w-full"
                >
                    <Image
                        src="/code.png"
                        height="300"
                        width="400"
                        className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl bg-transparent"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-8">
                    <CardItem
                        translateZ={10}
                        translateX={-20}
                        as="button"
                        className="px-2 py-1 rounded-xl text-xs font-normal bg-primary-green border border-primary-green-600 text-primary-green-400 hover:text-white hover:bg-primary-green-600"
                    >
                        Check Projects →
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
