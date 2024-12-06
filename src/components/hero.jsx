import React, { useState, useEffect, useRef } from "react";

const words = ["Director", "Set Designer", "Actor"];

function HomeHero() {
  const [displayWord, setDisplayWord] = useState(""); // Current displayed text
  const [isTyping, setIsTyping] = useState(true);    // Typing or deleting
  const [wordIndex, setWordIndex] = useState(0);     // Index of the current word
  const timeoutRef = useRef(null);                  // Ref to store the timeout ID

  function startTypingEffect(speed) {
    // Clear any existing timeout (cleanup)
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    console.log(wordIndex)

    if (isTyping) {
      // Typing logic
      setDisplayWord((prev) => {
        const nextChar = words[wordIndex][prev.length];
        if (prev.length < words[wordIndex].length) {
          timeoutRef.current = setTimeout(() => startTypingEffect(speed), speed);
          return prev + nextChar; // Add next character
        } else {
          setIsTyping(false); // Switch to untyping after finishing the word
          timeoutRef.current = setTimeout(() => startTypingEffect(100), 800);
          return prev; // No change needed
        }
      });
    } else {
      // Untyping logic
      setDisplayWord((prev) => {
        if (prev.length > 0) {
          timeoutRef.current = setTimeout(() => startTypingEffect(speed), speed / 2); // Untype faster
          return prev.slice(0, -1); // Remove the last character
        } else {
          // Finished untyping, move to the next word
          setIsTyping(true);
          setWordIndex((prev) => (prev + 1) % words.length); // Move to next word
          timeoutRef.current = setTimeout(() => startTypingEffect(400), 2000); // Delay before typing again
          return prev; // No change needed
        }
      });
    }
  }

  // Start typing effect on mount
  useEffect(() => {
    startTypingEffect(400);
    return () => clearTimeout(timeoutRef.current); // Cleanup timeout on unmount
  }, []);

  return (
    <div>
        <div className="heroinner">
            <p className="typeEffect">{displayWord}</p>
        </div>
    </div>
  );
}

export default HomeHero;