import { useState } from "react";
import "./slider.css"
import Carousel from 'react-bootstrap/Carousel';


const Slider = ({items}) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {items?.photoAlbum?.map((item, i) => (
        <Carousel.Item>
          <img
            src={item}
            className="w-100"
            alt="..."
            style={{ height: "70vh" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider
