import { EastOutlined, WestOutlined } from "@mui/icons-material";
import "./slider.scss";
import { useState } from "react";
const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
  const images = [
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  function prevSlide(){
    setCurrentSlide(prev => prev === 0 ? 2 : prev - 1)
  }
  function nextSlide(){
    setCurrentSlide(prev => prev === 2 ? 0 : prev + 1)
  }
  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={images[0]} alt="" />
        <img src={images[1]} alt="" />
        <img src={images[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon">
          <WestOutlined onClick = {prevSlide}/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  );
};

export default Slider;
