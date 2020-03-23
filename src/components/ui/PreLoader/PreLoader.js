import React from 'react';

const PreLoader = () => {
  return (
    <div>
      <SVGIcon />
    </div>
  );
};

const SVGIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ margin: 'auto', background: '#FFF', display: 'block', shapeRendering: 'auto' }}
    width="100%"
    height="625px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <g transform="translate(0 -10)">
      <circle cx="50" cy="38" r="8.36184" fill="#30d9b9" transform="rotate(281.818 50 50)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        />
        <animate
          attributeName="r"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="0;20;0"
          keySplines="0.2 0 0.8 1;0.2 0 0.8 1"
        />
      </circle>
      <circle cx="50" cy="38" r="11.6382" fill="#464a94" transform="rotate(461.818 50 50)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="180 50 50;540 50 50"
        />
        <animate
          attributeName="r"
          dur="1.1111111111111112s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="20;0;20"
          keySplines="0.2 0 0.8 1;0.2 0 0.8 1"
        />
      </circle>
    </g>
  </svg>
);

export default PreLoader;
