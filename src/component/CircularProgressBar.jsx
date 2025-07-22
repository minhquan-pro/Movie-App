const CircularProgressBar = ({
  voteAverage,
  percent = Math.ceil(voteAverage * 10),
  sizeVW = 3,
  strokeWidthVW = 0.25,
}) => {
  const radiusVW = sizeVW / 2 - strokeWidthVW;
  const circumferenceVW = 2 * Math.PI * radiusVW;
  const offsetVW = circumferenceVW - (percent / 100) * circumferenceVW;

  return (
    <div>
      <svg width={`${sizeVW}vw`} height={`${sizeVW}vw`}>
        <circle
          r={`${radiusVW}vw`}
          cx={`${sizeVW / 2}vw`}
          cy={`${sizeVW / 2}vw`}
          stroke="white"
          strokeWidth={`${strokeWidthVW}vw`}
        />

        <circle
          r={`${radiusVW}vw`}
          cx={`${sizeVW / 2}vw`}
          cy={`${sizeVW / 2}vw`}
          stroke={`${percent >= 70 ? "green" : `${percent > 50 ? "orange" : "red"}`}`}
          fill="none"
          strokeWidth={`${strokeWidthVW}vw`}
          strokeDasharray={`${circumferenceVW}vw`}
          strokeDashoffset={`${offsetVW}vw`}
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="round"
        />

        <text
          x={`${sizeVW / 2}vw`}
          y={`${sizeVW / 2}vw`}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={`${sizeVW * 0.25}vw`}
          fill="white"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
