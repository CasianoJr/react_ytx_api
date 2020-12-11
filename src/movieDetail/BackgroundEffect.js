import { Carousel } from "antd";
import React from "react";

export default function BackgroundEffect({ movie }) {
  return (
    <Carousel effect="fade" autoplay dots={false}>
      <div>
        <div
          className="mt-5"
          style={{
            backgroundImage: `url(${movie.large_cover_image})`,
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
            filter: "blur(15px)",
            height: "500px",
            opacity: "0.2",
          }}
        />
      </div>
      <div>
        <div
          className="mt-5"
          style={{
            backgroundImage: `url(${movie.background_image_original})`,
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
            filter: "blur(15px)",
            height: "500px",
            opacity: "0.2",
          }}
        />
      </div>
    </Carousel>
  );
}
