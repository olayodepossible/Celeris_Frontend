import React from "react";
import "./ProgressBar.css";

interface ProgressBarProps {
  progress: number;
  isCircle?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  isCircle = false,
}) => {
  return isCircle ? (
    <div className="circular-progress-container">
      <div className="circular-progress-bar">
        <div
          className="circular-progress-inner"
          style={{
            background: `conic-gradient(red 0%, yellow 33%, green 66%, green ${progress}%, transparent ${progress}%)`,
          }}
        />
        <div className="circular-progress-indicator">{progress}%</div>
      </div>
    </div>
  ) : (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-indicator"
          style={{ left: `${progress}%` }}
        ></div>
        {/* <p className="progress-percentage">{progress}</p> */}
      </div>
      <div className="breakpoints">
        <div className="breakpoint" style={{ left: "25%" }}></div>
        <br />
        <div className="breakpoint" style={{ left: "50%" }}></div>
        <br />
        <div className="breakpoint" style={{ left: "75%" }}></div>
        <br />
        <div className="breakpoint" style={{ left: "100%" }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
