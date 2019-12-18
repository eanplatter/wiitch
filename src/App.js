import React from "react";
import LineTo from "react-lineto";
import styled from "styled-components";

import "./App.scss";

const N = styled.div`
  margin-top: 60px;
  color: transparent;
`;

//`

const KEY = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 1,
  k: 2,
  l: 3,
  m: 4,
  n: 5,
  o: 6,
  p: 7,
  q: 8,
  r: 9,
  s: 1,
  t: 2,
  u: 3,
  v: 4,
  w: 5,
  x: 6,
  y: 7,
  z: 8
};

function removeVowels(input) {
  return input
    .split("")
    .filter(l => !["a", "e", "i", "o", "u", " "].includes(l))
    .join("");
}

function removeDupes(input) {
  const inputArr = input.split("");
  return Array.from(new Set(inputArr)).join("");
}

function mapToKey(input, key) {
  const inputArr = input.split("");
  return inputArr.map(l => key[l]).join("");
}

function App() {
  const [input, setInput] = React.useState("");
  const inp = removeDupes(
    mapToKey(removeDupes(removeVowels(input)).toLowerCase(), KEY)
  );
  return (
    <div className="App">
      <header className="App-header">
        <input
          value={input}
          type="input"
          onChange={e => setInput(e.target.value)}
        />
        <ul className="circle-container">
          <li className="6">
            <N>6</N>
          </li>
          <li className="2">
            <N>2</N>
          </li>
          <li className="9">
            <N>9</N>
          </li>
          <li className="5">
            <N>5</N>
          </li>
          <li className="8">
            <N>8</N>
          </li>
          <li className="3">
            <N>3</N>
          </li>
          <li className="7">
            <N>7</N>
          </li>
          <li className="1">
            <N>1</N>
          </li>
          <li className="4">
            <N>4</N>
          </li>
          {inp.split("").map((n, i) => (
            <>
              <LineTo
                className="line"
                to={`${inp.split("")[i + 1]}`}
                from={`${n}`}
                delay={0}
                borderWidth={0}
              />
            </>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
