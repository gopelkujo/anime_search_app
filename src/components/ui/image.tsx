import React, { useEffect, useRef, useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  fill?: boolean; // mimic Next.js fill mode
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string; // optional low-res placeholder image
}

export default function Image({
  src,
  alt,
  fill = false,
  className = "",
  style,
  placeholder,
}: ImageProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${fill ? "w-full h-full" : ""}`}
      style={{ position: fill ? "absolute" : "relative", ...style }}
    >
      <img
        ref={imgRef}
        src={isVisible ? src : placeholder || ""}
        alt={alt}
        loading="lazy"
        className={`object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        style={fill ? { width: "100%", height: "100%", objectFit: "cover" } : {}}
      />
    </div>
  );
}
