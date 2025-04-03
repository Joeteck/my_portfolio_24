import React, { useEffect, useState } from "react";
import gsap from "gsap";

const codeSamples = [
    `function bubbleSort(arr: number[]): number[] {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
        }
    }
    return arr;
    }`,
    `function gapFunction(n: number): number {
    return Math.ceil(n / 1.3);
}`
];

const CodeSnippet = () => {
    const [displayText, setDisplayText] = useState("");
    const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
    
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        
        const typeText = (text: string, index = 0) => {
        if (index <= text.length) {
            setDisplayText(text.substring(0, index));
            timeout = setTimeout(() => typeText(text, index + 1), 40);
        } else {
            setTimeout(() => deleteText(text.length), 2000); // Pause before deleting
        }
        };

        const deleteText = (index: number) => {
        if (index >= 0) {
            setDisplayText(codeSamples[currentCodeIndex].substring(0, index));
            timeout = setTimeout(() => deleteText(index - 1), 30);
        } else {
            setTimeout(() => {
            setCurrentCodeIndex((prev) => (prev + 1) % codeSamples.length);
            }, 500);
        }
        };

        typeText(codeSamples[currentCodeIndex]);
        
        return () => clearTimeout(timeout);
    }, [currentCodeIndex]);

    return (
        <div className="code-snippet-container">
        <div className="code-header">TypeScript Snippet</div>
        <pre className="code-content"><code>{displayText}</code></pre>

        <style jsx>{`
            .code-snippet-container {
            position: fixed;
            bottom: 20px;
            left: 20px;
            width: 320px;
            background: rgba(0, 0, 0, 0.9);
            color: #00ffcc;
            border-radius: 10px;
            padding: 10px;
            font-family: monospace;
            font-size: 14px;
            box-shadow: 0px 4px 10px rgba(0, 255, 204, 0.3);
            border-left: 4px solid #00ffcc;
            z-index: 50;
            }

            .code-header {
            font-weight: bold;
            background: #00ffcc;
            color: black;
            padding: 5px 10px;
            border-radius: 8px 8px 0 0;
            text-align: center;
            }

            .code-content {
            white-space: pre-wrap;
            word-break: break-word;
            padding: 10px;
            overflow: hidden;
            min-height: 80px;
            }
        `}</style>
        </div>
    );
};

export default CodeSnippet;
