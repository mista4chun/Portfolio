import  { useEffect, useState, useCallback, useMemo } from "react";

const Typewriter = ({
  text,
  speed,
  lastWordColor,
  cursorChar = "|",

  cursorBlinkSpeed = 500,
  fontSize = "1rem", // New prop for font size
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const typeText = useCallback(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => text.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(intervalId);
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [text, speed]);

  useEffect(() => {
    const cleanup = typeText();
    return cleanup;
  }, [typeText]);

  useEffect(() => {
    const cursorIntervalId = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, cursorBlinkSpeed);
    return () => clearInterval(cursorIntervalId);
  }, [cursorBlinkSpeed]);

  const renderText = useMemo(() => {
    if (!isTypingComplete || !displayedText) return displayedText;

    const words = displayedText.split(" ");
    if (words.length === 1)
      return <span style={{ color: lastWordColor }}>{displayedText}</span>;

    const lastWord = words.pop();
    const restOfText = words.join(" ");

    return (
      <>
        {restOfText} <span style={{ color: lastWordColor }}>{lastWord}</span>
      </>
    );
  }, [isTypingComplete, displayedText, lastWordColor]);

  if (!text) return null;

  return (
    <span style={{ fontSize: fontSize }}>
      {" "}
      {/* Apply font size here */}
      {renderText}
      <span style={{ visibility: isCursorVisible ? "visible" : "hidden" }}>
        {cursorChar}
      </span>
    </span>
  );
};

export default Typewriter;
