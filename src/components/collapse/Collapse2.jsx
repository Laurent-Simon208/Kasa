import { useState } from "react";
import "./collapse2.scss";

function Collapse2({ title, description }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="wrapper-collapse">
      <div className="rectangle">
        <h2 className="title-collapse">{title}</h2>
        <span
          className={`button-title ${open ? "open" : ""}`}
          onClick={toggle}
        >
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="arrow_back_ios-24px 2">
              <path
                id="Vector"
                d="M17.2103 21.8522C16.5409 22.5216 15.4538 22.5216 14.7843 21.8522L4.50206 11.5699C3.83265 10.9005 3.83265 9.81335 4.50206 9.14393C5.17148 8.47451 6.25862 8.47451 6.92804 9.14393L16 18.2159L25.072 9.14929C25.7414 8.47987 26.8285 8.47987 27.4979 9.14929C28.1674 9.81871 28.1674 10.9058 27.4979 11.5753L17.2157 21.8575L17.2103 21.8522Z"
                fill="white"
              />
            </g>
          </svg>
        </span>
      </div>
      <div className={`description-collapse ${open ? "open" : ""}`}>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default Collapse2;