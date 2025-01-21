import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="App">
      <PageComponent />
    </div>
  );
}

const PageComponent = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("Page.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 768); // Adjust based on viewport width
    };

    // Initial check
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="post">
      <img
        src="./rohan.webp"
        alt="Rohan"
        style={{
          width: isSmallViewport ? "90%" : "200px", // Adjust width
          height: "auto", // Maintain aspect ratio
          border: "1px solid black", // Black border
          borderRadius: "10px", // Rounded corners
          position: isSmallViewport ? "relative" : "absolute", // Adjust positioning
          margin: isSmallViewport ? "5px" : "10px", // Center for small viewports
          top: isSmallViewport ? "auto" : "3px", // Remove top positioning for small viewports
          left: isSmallViewport ? "50%" : "50%", // Remove left positioning for small viewports
          transform: isSmallViewport ? "translateX(-50%)" : "translateX(40%)", // Remove transformation for small viewports
          maxWidth: "300px", // Prevent the image from being too large
        }}
      />

      <ReactMarkdown children={content} />
      <Analytics />
    </div>
  );
};
