import { useRef, useEffect } from "react";

export default function Canvas({ lives }) {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (lives === 7) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.beginPath();
      ctx.strokeStyle = 'white'
      ctx.lineWidth = "3";
      ctx.lineCap = "round";
      ctx.shadowColor = "#8b97b3";
      ctx.shadowBlur = 10;
      if (lives === 6) { // creating the gallow.
        ctx.moveTo(5, 145);
        ctx.lineTo(60, 145);
        ctx.moveTo(25, 145); 
        ctx.lineTo(25, 10);
        ctx.lineTo(110, 10);
        ctx.lineTo(110, 30);
      };
      ctx.stroke();
      ctx.beginPath();
      if (lives === 5) { ctx.arc(110, 45, 15, 0*Math.PI, 2*Math.PI) }; // creating the head
      if (lives === 4) { ctx.moveTo(110, 60); ctx.lineTo(90, 90) }; // creating left hand
      if (lives === 3) { ctx.moveTo(110, 60); ctx.lineTo(130, 90) }; // creating right hand
      if (lives === 2) { ctx.moveTo(110, 60); ctx.lineTo(110, 100) }; // creating spine
      if (lives === 1) { ctx.moveTo(110, 100); ctx.lineTo(90, 130) }; // creating left leg
      if (lives === 0) { ctx.moveTo(110, 100); ctx.lineTo(130, 130) }; // creating right leg
      ctx.stroke();
    }

  }, [lives]);

  return (
    <div className="hangman-canvas">
      <canvas ref={canvasRef} width='150px' height='150px' alt='Hangman'/> 
    </div>
  )
};