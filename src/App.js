import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ac.cnstrc.com/search/apple?key=key_fygjntHGW7usvxC8")
      .then((res) => res.json())
      .then((val) => setData(val.response?.results));
  }, []);

  console.log(data);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="flex">
        {data.map((item) => {
          return (
            <a href={item.data.url} referrer="no-referrer" target="_blank">
              <div className="box" key={item.data.id}>
                <div className="image">
                  <img
                    className="image-box"
                    src={item.data.image_url}
                    alt={item.value}
                  />
                </div>
                <div className="name">{item.value}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
