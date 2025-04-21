// components/Mascot.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import mascotImg from "../assets/mascot-bear.png"; // ใช้รูปหมี หรืออื่นๆ ที่น่ารัก

export default function Mascot() {
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mascotRef.current) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(mascotRef.current, {
      y: -5,
      rotation: 2,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      ref={mascotRef}
      className="fixed bottom-6 right-6 w-20 h-20 z-50 select-none"
    >
      <img src={mascotImg} alt="น้องมาสคอต" className="w-full h-full object-contain" />
    </div>
  );
}
