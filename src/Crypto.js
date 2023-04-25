import React, { useState } from 'react';
import Search from './Search';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { UseToggle } from './Toggle';
import Modal from './Modal';



const Crypto = ({ data }) => {
  
  const [search, setSearch] = useState("");
  const { expandedRow, toggleExpansion } = UseToggle();

  return (
      <div>
           <Container>
          <header className='main-header'>
          <h1 className='text-center mt-4'>Wyszukiwarka crypto</h1>
          </header>
        <Search search={search} setSearch={setSearch} />
   
        <Table>
          <caption className="caption-top">Wynik zapytania z bazy</caption>
          <thead>
          <tr >
            <th  className='border border-slate-300'>Id</th>
            <th  className='border border-slate-300'>User ID</th>
            <th  className='border border-slate-300'>Title</th>
            <th  className='border border-slate-300'>Actions</th>
          </tr>
          </thead>
          <tbody>
          {data
              .filter((item) =>
                  search === "" ? item : item.title.includes(search)
              )
              .map((item) => (
                  <React.Fragment key={item.id}>
                   
                    <tr className="row-color">
              
                      <td className='border border-slate-300'>{item.id}</td>
                      <td className='border border-slate-300'>{item.userId}</td>
                      <td className='border border-slate-300'>{item.title}</td>
                      <td className='border border-slate-300'>
                      <button
                    className="btn btn-info"
                    type="button"
                    id={`btnMSb${item.id}`}
                    onClick={() => toggleExpansion(item.id)}
                    aria-expanded="false"
                    aria-controls={`MS01b${item.id}`}
                    aria-label={`More information about ${item.title}`}
                  >
                            
                          {/* {expandedRow === item.id ? "Zwiń" : "Rozwiń"} */}
                          </button>
                      </td>
                      {/* <td className='border border-slate-300'>
                        <Modal />
                      </td> */}
                      
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
  </Container>
      </div>
  );
};

export default Crypto;