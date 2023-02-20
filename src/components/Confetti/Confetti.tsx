import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const Confetti = () => {
  const [windowWidth, setWindowWidth] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [confeti, setConfeti] = useState(true);

  const detectSeze = () => {
    setWindowWidth({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSeze);
    return () => {
      window.removeEventListener("resize", detectSeze);
    };
  }, [windowWidth]);

  useEffect(() => {
    setTimeout(() => {
      setConfeti(false);
    }, 9000);
  }, []);

  return (
    <div>
      {confeti ? (
        <ReactConfetti
          width={windowWidth.width}
          height={windowWidth.height}
          tweenDuration={3000}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Confetti;
