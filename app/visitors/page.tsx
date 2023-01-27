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
    const get = async () => {
      const fullData = await fetch("/api/visitor");
      const Dat: { message: [] } = await fullData.json();

      setData(Dat.message.reverse());
      
    };
    get();
  }, [org]);
  return (
    <div className="text-[#ffd3a2] relative w-full  overflow-auto snaps">
      <button onClick={bycount} className="h-[7vh] w-[20vw] ml-[20vw]">
        {" "}
        Sort by count
      </button>
      <button onClick={(e) => {
        e.preventDefault();
        setOrg(org + 1);
      }} className="h-[7vh] w-[20vw] ml-[20vw]">
        {" "}
        Sort by latest
      </button>
      <table className="tables w-full text-center ">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>IP</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, j) => {
            return (
              <tr key={j}>
                <td>{i.name}</td>
                <td>{i.city}</td>
                <td>{i.ip}</td>
                <td>{i.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
