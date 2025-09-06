import { useEffect, useRef } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";
import "./Home.css";
import SearchBar from "./SearchBar";

export default function Home() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = GLOBE({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 600.00,
        minWidth: 600.00,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,
        color2: 0x1e90ff, 
        backgroundColor: 0xe3f0ff, 
        glow: 0.5,
        size: 1.2,
        vertexColors: false,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className="home-vanta-bg">
      <div className="home-content">
        <h2>Bine ai venit pe INFOTerra!</h2>
        <p>Explorează planeta interactivă.</p>
        <SearchBar />
      </div>
    </div>
  );
}