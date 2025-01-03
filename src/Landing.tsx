import { MouseEvent } from "react";
import "./Landing.css";

interface LandingProps {
  setShowLanding: React.Dispatch<React.SetStateAction<boolean>>;
}

function Landing({ setShowLanding }: LandingProps) {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    // Create ripple effect
    const body = document.body;
    const ripple = document.createElement('div');
    const rect = body.getBoundingClientRect();

    ripple.className = 'body-ripple';
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    body.appendChild(ripple);

    setTimeout(() => {
      body.style.background = `var(--dark-color)`;
      setShowLanding(false)
    }, 150);


    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <div className="landing">
      <h1 className="forever">forever</h1>
      <button className="button" onClick={handleClick}>Enter</button>
    </div>
  );
}

export default Landing;
