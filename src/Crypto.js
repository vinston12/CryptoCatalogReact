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
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleExpansion = (id) => {
    if (id === expandedRow) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  return (
      <div>
        <Search search={search} setSearch={setSearch} />
         <RandomColorTable>
        <Table>
          <caption className="caption-top">Wynik zapytania z bazy</caption>
          <thead>
          <tr >
            <th>Id</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {data
              .filter((item) =>
                  search === "" ? item : item.title.includes(search)
              )
              .map((item) => (
                  <React.Fragment key={item.id}>
                    <tr className='random-background'>
                      <td>{item.id}</td>
                      <td>{item.userId}</td>
                      <td>{item.title}</td>
                      <td>
                        <button
                            className="btn btn-info"
                            type="button"
                            id={`btnMSb${item.id}`}
                            onClick={() => toggleExpansion(item.id)}
                            aria-expanded="false"
                            aria-controls={`MS01b${item.id}`}
                            aria-label={`More information about ${item.title}`}
                        >
                          {expandedRow === item.id ? "Zwiń" : "Rozwiń"}
                        </button>
                      </td>
                    </tr>
                    {expandedRow === item.id && (
                        <tr>
                          <td colSpan="4">{item.body}</td>
                        </tr>
                    )}
                  </React.Fragment>
              ))}
          </tbody>
        </Table>
        </RandomColorTable>
      </div>
  );
};

export default Crypto;