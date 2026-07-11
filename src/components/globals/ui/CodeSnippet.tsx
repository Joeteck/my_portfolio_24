"use client";

import React, { useEffect, useState } from "react";

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
}`,
];

const CodeSnippet = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const text = codeSamples[currentCodeIndex];

    const deleteText = (index: number) => {
      if (index >= 0) {
        setDisplayText(text.substring(0, index));
        timeout = setTimeout(() => deleteText(index - 1), 30);
      } else {
        timeout = setTimeout(() => {
          setCurrentCodeIndex((prev) => (prev + 1) % codeSamples.length);
        }, 500);
      }
    };

    const typeText = (index: number) => {
      if (index <= text.length) {
        setDisplayText(text.substring(0, index));
        timeout = setTimeout(() => typeText(index + 1), 40);
      } else {
        timeout = setTimeout(() => deleteText(text.length), 2000);
      }
    };

    typeText(0);

    return () => clearTimeout(timeout);
  }, [currentCodeIndex]);

  return (
    <div className="dock-panel">
      <div className="dock-tab">
        <span className="dock-dot" aria-hidden="true" />
        snippet.ts
      </div>
      <pre className="dock-code">
        <code>
          {displayText}
          <span className="dock-caret" aria-hidden="true" />
        </code>
      </pre>

      <style jsx>{`
        .dock-panel {
          width: 100%;
          background: var(--panel, #111411);
          font-family: var(--font-mono), monospace;
        }
        .dock-tab {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--text-dim, #7a8478);
          padding: 0.5rem 1.25rem 0;
        }
        .dock-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent, #ffb000);
        }
        .dock-code {
          margin: 0;
          padding: 0.75rem 1.25rem 1.1rem;
          font-size: 0.8rem;
          line-height: 1.5;
          color: var(--text, #d8dcd3);
          white-space: pre-wrap;
          word-break: break-word;
          min-height: 110px;
          max-height: 160px;
          overflow: hidden;
        }
        .dock-caret {
          display: inline-block;
          width: 0.5em;
          height: 1em;
          background: var(--accent, #ffb000);
          margin-left: 2px;
          vertical-align: text-bottom;
          animation: dock-blink 1s steps(1) infinite;
        }
        @keyframes dock-blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CodeSnippet;