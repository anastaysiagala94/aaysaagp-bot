import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios.get("/data/ads_full.json").then(res => setAds(res.data));
  }, []);

  return (
    <div>
      <h1>Anastaysia @ Your Service – Ad Dashboard</h1>
      {ads.slice(0,10).map((ad,i) => (
        <pre key={i}>{ad.content}</pre>
      ))}
    </div>
  );
}