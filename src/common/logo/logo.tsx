import React from 'react';

type LogoProps = {
  width?: string | number;
  color?: string;
  height?: string | number;
};

const Logo: React.FC<LogoProps> = ({ width, color, height }) => (
  <svg
    id="Capa_1"
    data-name="Capa 1"
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 559.14 75.84"
  >
    <defs>
      <clipPath id="clip-path" transform="translate(-144.32 -258.35)">
        <rect fill="none" width="841.89" height="595.28" />
      </clipPath>
    </defs>
    <title>logos vector</title>
    <polygon
      fill={color}
      points="37.77 2.85 21.51 2.85 21.51 38.12 34.37 38.12 41.78 27.32 42.4 27.32 42.4 50.56 41.78 50.56 34.37 39.75 21.51 39.75 21.51 68.19 31.9 74 31.9 74.61 0.62 74.61 0.62 74 7.72 68.09 7.72 7.34 0 1.84 0 1.22 50.73 1.22 54.75 23.85 53.92 24.16 37.77 2.85"
    />
    <g className="cls-3" clipPath="url(#clip-path)">
      <path
        fill={color}
        d="M212.86,296.27c0-21.71,14.92-37.91,34.37-37.91s34.27,16.2,34.27,37.91-14.82,37.92-34.27,37.92-34.37-16.2-34.37-37.92m53.2,0c0-18.65-5.56-36.28-18.83-36.28s-18.94,17.63-18.94,36.28,5.56,36.29,18.94,36.29,18.83-17.63,18.83-36.29"
        transform="translate(-144.32 -258.35)"
      />
      <polygon
        fill={color}
        points="215.6 1.84 207.89 7.75 207.89 75.23 207.27 75.23 160.45 9.99 160.45 68.09 168.16 74 168.16 74.61 150.88 74.61 150.88 74 158.59 68.09 158.59 7.44 158.49 7.24 150.88 1.84 150.88 1.22 171.66 1.22 206.03 49.23 206.03 7.75 198.31 1.84 198.31 1.22 215.6 1.22 215.6 1.84"
      />
      <polygon
        fill={color}
        points="269.64 2.85 269.64 68.09 280.03 74 280.03 74.61 245.56 74.61 245.56 74 255.95 68.09 255.95 2.85 246.58 2.85 230.43 24.16 229.6 23.85 233.62 1.22 291.97 1.22 295.98 23.85 295.16 24.16 279 2.85 269.64 2.85"
      />
      <path
        fill={color}
        d="M505.65,326.45l7.1,5.91V333H482.91v-.61l7.1-5.91-7.2-17.33h-24.5l-6.89,17.33,7.1,5.91V333H442.46v-.61l7-5.91,27.07-68.1h.62Zm-46.72-19h23.15l-11.83-28.65Z"
        transform="translate(-144.32 -258.35)"
      />
      <polygon
        fill={color}
        points="409.09 1.84 401.99 7.75 401.99 68.09 409.09 74 409.09 74.61 381.1 74.61 381.1 74 388.2 68.09 388.2 7.75 381.1 1.84 381.1 1.22 409.09 1.22 409.09 1.84"
      />
      <polygon
        fill={color}
        points="489.05 1.84 481.33 7.75 481.33 75.23 480.71 75.23 433.89 9.99 433.89 68.09 441.61 74 441.61 74.61 424.32 74.61 424.32 74 432.04 68.09 432.04 7.44 431.94 7.24 424.32 1.84 424.32 1.22 445.11 1.22 479.48 49.23 479.48 7.75 471.76 1.84 471.76 1.22 489.05 1.22 489.05 1.84"
      />
      <polygon
        fill={color}
        points="558.31 51.68 559.14 51.99 555.12 74.61 502.74 74.61 502.74 74 510.46 68.5 510.46 7.34 502.74 1.84 502.74 1.22 553.48 1.22 557.49 23.85 556.67 24.16 540.51 2.85 524.25 2.85 524.25 38.12 536.5 38.12 543.7 27.32 544.32 27.32 544.32 50.56 543.7 50.56 536.5 39.75 524.25 39.75 524.25 72.98 542.16 72.98 558.31 51.68"
      />
    </g>
  </svg>
);

Logo.defaultProps = {
  width: '192px',
  color: '#222220',
  height: 'auto'
};

export default Logo;
