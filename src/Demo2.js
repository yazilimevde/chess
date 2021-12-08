import React, { Component } from "react";
import Chessboard from "chessboardjsx";

import StockFish from "./integrations/Stockfish.js";

class Demo2 extends Component {
  render() {
    return (
      <div style={boardsContainer}>
        <StockFish>
          {({ position, onDrop }) => (
            <Chessboard
              id="stockfish"
              position={position}
              width={800}
              onDrop={onDrop}
              boardStyle={boardStyle}
              orientation="white"
              lightSquareStyle={{ backgroundColor: "white" }}
              darkSquareStyle={{ backgroundColor: "green" }}
            />
          )}
        </StockFish>
      </div>
    );
  }
}

export default Demo2;

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: 30,
  marginLeft: 15
};
const boardStyle = {
  borderRadius: "5px",
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
};
