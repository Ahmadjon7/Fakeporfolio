import React, { useEffect, useRef } from "react";

const App = () => {
  const circlesRef = useRef([]);

  useEffect(() => {
    circlesRef.current.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
    });

    const handleMouseMove = (e) => {
      circlesRef.current.forEach((circle, index) => {
        circle.style.left = circle.x - 12 + "px";
        circle.style.top = circle.y - 12 + "px";

        circle.style.transform = `scale(${circlesRef.current.length - index}/${
          circlesRef.current.length
        })`;

        const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
        circle.x += (nextCircle.x - circle.x) * 0.3;
        circle.y += (nextCircle.y - circle.y) * 0.3;
      });
      requestAnimationFrame(animateCircles);
    };

    const animateCircles = () => {
      handleMouseMove();
    };

    animateCircles();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div ref={(el) => (circlesRef.current[0] = el)} className="circle"></div>
      <div ref={(el) => (circlesRef.current[1] = el)} className="circle"></div>
      <div ref={(el) => (circlesRef.current[2] = el)} className="circle"></div>
      <div ref={(el) => (circlesRef.current[3] = el)} className="circle"></div>
      <div ref={(el) => (circlesRef.current[4] = el)} className="circle"></div>
      <div ref={(el) => (circlesRef.current[5] = el)} className="circle"></div>
      <div ref={(el) => (circlesRef.current[6] = el)} className="circle"></div>
      <div ref={(el) => (circlesRef.current[7] = el)} className="circle"></div>
      <div ref={(el) => (circlesRef.current[8] = el)} className="circle"></div>
      <div ref={(el) => (circlesRef.current[9] = el)} className="circle"></div>
      {/* qolgan divlar */}
    </div>
  );
};

export default App;
