import React from "react";
import ThumbPreview from "./dist/thumb-preview";

let images = ["images/bon-jovi.png", "images/foo.png",
  "images/metallica.jpg", "images/nofx.png", "images/trivium.jpg"];

React.render(<ThumbPreview images={images} />,
  document.getElementById("thumb-react"));
