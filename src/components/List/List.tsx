import React, { useEffect, useState } from "react";
import "./List.css";
import { getData } from "../../services/getData.tsx";
import spaceImg from "../../assets/space.jpeg";

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
      <th>Name</th>
      <th>Height</th>
      <th>Mass</th>
      <th>Hair color</th>
      <th>Skin color</th>
      <th>Eye color</th>
      <th>Birth day</th>
      <th>Gender</th>
    </tr>
  );

  return (
    <>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          <div className="tableContainer">
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
      )}
    </>
  );
}
