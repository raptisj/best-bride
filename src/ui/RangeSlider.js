import React from "react";
import { Range } from "react-range";

const STEP = 1;

const LabeledTwoThumbs = ({
  handleFinalChange,
  handleChange,
  lowestRange: MIN,
  highestRange: MAX,
  rangeValues,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={rangeValues}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => handleChange(values)}
        onFinalChange={(values) => handleFinalChange(values)}
        allowOverlap={false}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                backgroundColor: "#009387",
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "30px",
              width: "30px",
              outline: 0,
              borderRadius: "50%",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-28px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: isDragged ? "#ec1639" : "#009387",
              }}
            >
              {rangeValues[index].toFixed(1)}€
            </div>
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#ec1639" : "#009387",
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default LabeledTwoThumbs;
