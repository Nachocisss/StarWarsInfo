import React, { useEffect, useState } from "react";
import "./List.css";
import { getData } from "../../services/getData.tsx";
import spaceImg from "../../assets/s.jpeg";

export default function List() {
  const intiUrl = "https://swapi.dev/api/people/?page=";
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  function getDataHandler(urlParam) {
    getData(urlParam).then((d) => {
      setData(d);
      setLoading(false);
    });
  }

  useEffect(() => {
    setLoading(true);
    getDataHandler(intiUrl + page);
  }, [page]);

  const header = (
    <tr>
      <th>name</th>
      <th>height</th>
      <th>mass</th>
      <th>hair color</th>
      <th>skin color</th>
      <th>eye color</th>
      <th>birth day</th>
      <th>gender</th>
    </tr>
  );

  return (
    <>
      {loading ? (
        <p style={{ color: "white", fontSize: 48 }}>Loading...</p>
      ) : (
        <div style={{ position: "relative" }}>
          <img src={spaceImg} alt="space background" className="spaceImg" />
          <table>
            <tbody>
              {header}
              {data?.results.map((p) => {
                return (
                  <tr key={p.url}>
                    <td>{p.name}</td>
                    <td>{p.height}</td>
                    <td>{p.mass}</td>
                    <td>{p.hair_color}</td>
                    <td>{p.skin_color}</td>
                    <td>{p.eye_color}</td>
                    <td>{p.birth_year}</td>
                    <td>{p.gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className="buttonContainer">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <span style={{ color: "white" }}> Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </>
  );
}
