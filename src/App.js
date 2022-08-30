import { useEffect, useRef, useState } from "react";
import "./App.css";
const getArray = (start, end) => {
  const list = [];
  for (let i = start; i <= end; i++) {
    list.push(i);
  }
  return list;
};

function App() {
  const tableRef = useRef(null);
  const [scrollx, setScrollx] = useState(false);
  const [scrolly, setScrolly] = useState(false);
  useEffect(() => {
    tableRef.current.addEventListener("wheel", (e) => {
      if (e.deltaX !== "-0") {
        setScrollx(e.deltaX !== "-0");
        // working
      }
      // Vertical
      if (e.deltaY !== "-0") {
        setScrolly(e.deltaY !== "-0");
      }
    });
  }, []);
  const head = getArray(0, 22);
  let board = Array(100)
    .fill(0)
    .map((row) => new Array(23).fill(1));

  return (
    <div className="App">
      <table ref={tableRef}>
        <tr>
          {head.map((val, index) => (
            <th
              className={`${
                scrollx || index == 0 || index === 23 ? "sticky" : ""
              }`}
              style={
                index === 0
                  ? {
                      color: "white",
                      backgroundColor: "grey",
                      top: 0,
                      left: 0,
                      zIndex: 2000,
                    }
                  : {
                      color: "white",
                      backgroundColor: "grey",
                      top: 0,
                      right: 0,
                      zIndex: 1000,
                    }
              }
            >
              {val}
            </th>
          ))}
        </tr>

        {board.map((val, index) => (
          <tr>
            {" "}
            <td
              className={`${scrolly ? "sticky" : ""}`}
              style={{
                left: 0,
                backgroundColor: "grey",
                color: "white",
                zIndex: 1000,
              }}
            >
              {val[0]}
            </td>
            <td>{val[1]}</td>
            <td>{val[2]}</td>
            <td>{val[3]}</td>
            <td>{val[4]}</td>
            <td>{val[5]}</td>
            <td>{val[6]}</td>
            <td>{val[7]}</td>
            <td>{val[8]}</td>
            <td>{val[9]}</td>
            <td>{val[10]}</td>
            <td>{val[11]}</td>
            <td>{val[12]}</td>
            <td>{val[13]}</td>
            <td>{val[14]}</td>
            <td>{val[15]}</td>
            <td>{val[16]}</td>
            <td>{val[17]}</td>
            <td>{val[18]}</td>
            <td>{val[19]}</td>
            <td>{val[20]}</td>
            <td>{val[21]}</td>
            <td
              className="sticky"
              style={{ right: 0, backgroundColor: "grey", color: "white" }}
            >
              {val[22]}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
