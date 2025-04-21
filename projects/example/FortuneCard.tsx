// components/FortuneCard.tsx
import { useState } from "react";
import { FaRegSmileBeam } from "react-icons/fa";

const messages = [
  "วันนี้จะเป็นวันที่ดีของคุณ 🌈",
  "เหนื่อยก็พักได้นะ ไม่เป็นไรเลย 💖",
  "มีคนแอบชื่นชมคุณอยู่แน่ๆ 🫶",
  "เธอเก่งกว่าที่คิดไว้นะ ✨",
  "ทุกอย่างจะค่อยๆ ดีขึ้นเอง 🍀",
];

export default function FortuneCard() {
  const [message, setMessage] = useState<string>("");

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  const shareToLine = () => {
    const url = `https://line.me/R/msg/text/?${encodeURIComponent(message + "\n\nดูเพิ่มเติม: https://yourlovable.site")}`;
    window.open(url, "_blank");
  };

  const shareToFacebook = () => {
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://yourlovable.site")}&quote=${encodeURIComponent(message)}`;
    window.open(fbShareUrl, "_blank");
  };

  return (
    <div className="max-w-md mx-auto bg-pink-100 p-6 rounded-2xl shadow-lg text-center space-y-4">
      <h2 className="text-xl font-bold text-pink-700 flex items-center justify-center gap-2">
        <FaRegSmileBeam /> กำลังใจวันนี้
      </h2>
      <p className="text-lg text-gray-700 min-h-[3rem] transition-all duration-300">{message}</p>
      <button
        onClick={getRandomMessage}
        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition"
      >
        สุ่มกำลังใจให้ฉัน 💌
      </button>
      {message && (
        <div className="flex justify-center gap-4 pt-2">
          <button onClick={shareToLine} className="text-green-600 hover:underline">
            แชร์ไป LINE
          </button>
          <button onClick={shareToFacebook} className="text-blue-600 hover:underline">
            แชร์ไป Facebook
          </button>
        </div>
      )}
    </div>
  );
}
