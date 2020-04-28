import React from "react";

const Point: React.FC<{ color?: boolean }> = ({ color }) => {
  return (
    <td
      style={{
        height: "25px",
        margin: 5,
        width: "25px",
        borderRadius: "6px",
        border: "1px solid rgba(255, 255, 255, 0.26)",
        backgroundColor: color ? "black" : "white",
      }}
    ></td>
  );
};

export const Grid: React.FC<{
  dimensions: [number, number];
  points: { [posYPosX: string]: boolean };
}> = (props) => (
  <table>
    <tbody>
      {new Array(props.dimensions[0]).fill(undefined).map((_, height) => (
        <tr key={`board-row-${height}`}>
          {new Array(props.dimensions[1]).fill(undefined).map((__, width) => (
            <Point
              key={`board-row-${height}-pos-${width}`}
              color={props.points[String([height, width])]}
            />
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
