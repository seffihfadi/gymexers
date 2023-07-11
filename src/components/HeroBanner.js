import { useRef } from "react";

const HeroBanner = () => {
  // scroll down when the user click the button explore exercises
  const theNextElement = useRef()
  const handleScroll = ()=>{
    theNextElement.current.scrollIntoView({ behavior: 'smooth' });
  } 
  return ( 
    <div className="hero">
      <div className="container">
        <div className="typography text-center md:text-left">
          <h3 className="text-[#d70469] text-3xl font-bold">fitness club</h3>
          <h1 className="text-4xl md:text-5xl">smile, sweet and repeat</h1>
          <button onClick={handleScroll}>explore exercises</button>
        </div>
      </div>

        <div ref={theNextElement}></div>
    </div> 
  );
}
 
export default HeroBanner;