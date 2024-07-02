import pothole from "../assets/landscape.jpg";
import { useRef, useEffect } from "react";
import Timeline from "./Timeline";

export default function Home() {
  const bgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (!bgRef.current) return;
    const parallaxElement = bgRef.current;
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      parallaxElement.style.transform =
        "translateY(" + scrollPosition * 0.5 + "px)";
    });
  }, []);
  return (
    <div className="bg-black text-white text-center font-medium min-h-screen overflow-hidden">
      <section id="hero-section" className="relative h-screen overflow-hidden">
        <img
          src={pothole}
          className="h-screen w-screen absolute inset-0 object-cover bg-fixed parallax-bg"
          ref={bgRef}
          alt=""
        />
        <div className="absolute inset-0 flex flex-col justify-center text-white text-2xl p-5">
          <p>Natural building is an artform.</p>
          <p>We are all artists at eos design</p>
          <p>studio and we invite you to get your hands muddy!</p>
        </div>
      </section>
      <Timeline />
    </div>
  );
}
