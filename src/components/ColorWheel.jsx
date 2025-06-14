import React, { useRef, useEffect } from "react";

// Hàm chuyển RGB sang HSV
function rgbToHsv(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    v = max;
  let d = max - min;
  s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = 0;
    }
    h /= 6;
  }
  return [h * 360, s, v];
}

const ColorWheel = ({ rgb, size = 200 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, size, size);
    const radius = size / 2;
    // Vẽ bánh xe màu
    for (let angle = 0; angle < 360; angle += 1) {
      for (let r = 0; r < radius; r++) {
        const rad = (angle - 90) * (Math.PI / 180);
        const x = radius + r * Math.cos(rad);
        const y = radius + r * Math.sin(rad);
        const s = r / radius;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 1, y + 1);
        ctx.strokeStyle = `hsl(${angle}, ${s * 100}%, 50%)`;
        ctx.stroke();
      }
    }
    // Vẽ chấm tròn vị trí màu
    if (rgb) {
      const [h, s] = rgbToHsv(rgb[0], rgb[1], rgb[2]);
      const rad = (h - 90) * (Math.PI / 180);
      const r = s * radius;
      const cx = radius + r * Math.cos(rad);
      const cy = radius + r * Math.sin(rad);
      ctx.beginPath();
      ctx.arc(cx, cy, 8, 0, 2 * Math.PI);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#000";
      ctx.stroke();
    }
  }, [rgb, size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{ display: "block", background: "#222", borderRadius: "50%" }}
    />
  );
};

export default ColorWheel;
