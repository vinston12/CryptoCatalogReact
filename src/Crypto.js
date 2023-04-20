import React, { useState } from 'react';
import Search from './Search';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import toggle from './toggle';
import RandomColorTable from './RandomColorTable';

const Crypto = ({ data }) => {
 

  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Container>
        <header className="main-header ">
          <h1 className="text-center mt-4">Wyszukiwarka crypto</h1>
        </header>
        <Search search={search} setSearch={setSearch} />
        <RandomColorTable>
          <Table>
            <caption className="caption-top">Wynik zapytania z bazy</caption>
            <thead>
              <tr className="odd:bg-white even:bg-slate-50">
                <th className="border border-slate-300">Id</th>
                <th className="border border-slate-300">User ID</th>
                <th className="border border-slate-300">Title</th>
                <th className="border border-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) =>
                  search === "" ? item : item.title.includes(search)
                )
                .map((item) => (
                  <React.Fragment key={item.id}>
                    <tr className="random-background">
                      <td className="border border-slate-300">{item.id}</td>
                      <td className="border border-slate-300">{item.userId}</td>
                      <td className="border border-slate-300">{item.title}</td>
                      <td>
                        <button
                          className="btn btn-info"
                          type="button"
                          id={`btnMSb${item.id}`}
                          aria-expanded="false"
                          onClick={() => toggle(`btnMSb${item.id}`, `#MS01b${item.id}`)}
                          aria-controls={`MS01b${item.id}`}
                          aria-label={`More information about ${item.title}`}>
                          Rozwiń</button>
                      </td>
                    </tr>
                    <tr id={`MS01b${item.id}`}
                        className="visually-hidden"
                        style={{ height: "100px", overflow: "hidden" }}>
                        <td colSpan="4">{item.body}</td>
                    </tr>
                  </React.Fragment>
                ))}
            </tbody>
          </Table>
        </RandomColorTable>
      </Container>
    </div>
  );
};

export default Crypto;