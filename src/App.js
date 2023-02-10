import './style.css';
import React, { useEffect, useState } from 'react';
export default function App() {
  const [data, setData] = useState([]);
  const [sel, onSel] = useState();
  useEffect(() => {
    const callApi = async () => {
      try {
        const a = await fetch('https://dummyjson.com/products');
        const b = await a.json();
        const c = await b.products.slice(0, 5);
        let mm = c.map((x) => {
          return x.images[0];
        });
        setData(mm);
      } catch (e) {}
    };
    callApi();
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="images">
        {data.map((pic, i) => {
          return (
            <>
              <div className={sel === i ? 'select' : 'image'}>
                <img src={pic} alt="hi" width="100px" />
              </div>
            </>
          );
        })}
      </div>
      <div className="btn">
        {data.map((x, i) => {
          return (
            <button
              className={sel === i ? 'test' : ''}
              onClick={() => onSel(i)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
