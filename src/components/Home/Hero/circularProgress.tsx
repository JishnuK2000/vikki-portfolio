import { useState, useEffect } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type AnimatedProgressProps = {
  icon: string;
  alt: string;
  value: number;
  color: string;
};

export function AnimatedProgress({ icon, alt, value, color }: AnimatedProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const stepTime = 20;
    const increment = end / (duration / stepTime);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setProgress(Math.floor(start));
    }, stepTime);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="w-24 h-24">
      <CircularProgressbarWithChildren
        value={progress}
        styles={buildStyles({
          pathColor: color,
          trailColor: '#2e2e2e',
          textColor: '#fff',
        })}
      >
        <img src={icon} alt={alt} className="w-8 h-8" />
      </CircularProgressbarWithChildren>
    </div>
  );
}
