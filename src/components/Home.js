import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from './Header'

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/all_jobs/`)
      .then((res) => {
        setData(res.data.Job);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <Header />
      <h3>All Jobs</h3>
      <ul>
        {data.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;