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

  return (
    <div className="post">
      <img
        src="./rohan.webp"
        alt="Rohan"
        style={{
          width: "200px", // Set the width of the image
          height: "auto", // Maintain the aspect ratio
          border: "1px solid black", // Add a black border
          borderRadius: "10px",
          position: "absolute", // Change to relative positioning
          margin: "10px", // Add margin to avoid content overlap
          top: "3px",
          left: "50%", // Position it at the center horizontally
          transform: "translateX(40%)", // Center it correctly relative to its width
          maxWidth: "100%", // Make sure the image doesn’t overflow
        }}
      />
      <ReactMarkdown children={content} />
      <Analytics />
    </div>
  );
};
