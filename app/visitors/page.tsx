"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [org, setOrg] = useState(0);
  const bycount = (e) => {
    e.preventDefault()
    console.log(data);
    setData((temp) => {
      temp.sort((a, b) => a.count - b.count);
      return [...temp.reverse()];
    })
  }
  useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflow = "scroll";

    const get = async () => {
      const fullData = await fetch("/api/visitor");
      const Dat: { message: [] } = await fullData.json();

      setData(Dat.message.reverse());
      
    };
    get();
  }, [org]);
  return (
    <div className="text-[#ffd3a2] text-[4vmin] relative w-full overflow-auto snaps">
      <button onClick={bycount} className="h-[7vh] w-[20vw] ml-[20vw]">
        {" "}
        Sort by count
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setOrg(org + 1);
        }}
        className="h-[7vh] w-[20vw] ml-[20vw]"
      >
        {" "}
        Sort by latest
      </button>
      <table className="tables w-full text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Count</th>
            <th>IP</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, j) => {
            return (
              <tr key={j}>
                <td>{i.name}</td>
                <td>{i.time}</td>
                <td>{i.count}</td>
                <td>{i.ip}</td>
                <td>{i.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
