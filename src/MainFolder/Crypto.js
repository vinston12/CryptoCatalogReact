import React, { useState } from 'react';
import Search from '../Components/Search';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { UseToggle } from '../Components/Toggle';
import Popup from '../Popup/Popup';


const Crypto = ({ data }) => {
  
  const [search, setSearch] = useState("");
  const { expandedRow, toggleExpansion } = UseToggle();
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
     
     <div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>To jest niezly popup!</h3>
          </Popup>
           <Container>
          <header className='main-header'>
          <h1 className='text-center mt-4'>Wyszukiwarka crypto</h1>
          </header>
        <Search search={search} setSearch={setSearch} />
                        <form className='intervals' >
                          
                        <input type="checkbox" name="fast" value="wartość"/>
                        <span>Odświeżanie interwałem 10s</span>
                        </form>
        <Table>
          <caption className="caption-top">Wynik zapytania z bazy</caption>
          <thead>
          <tr className='border border-slate-300'>
            <th  className='border border-slate-300'>Id</th>
            <th  className='border border-slate-300'>User ID</th>
            <th  className='border border-slate-300'>Title</th>
          </tr>
          </thead>
          <tbody>
          {data
              .filter((item) =>
                  search === "" ? item : item.title.includes(search)
              )
              .map((item) => (
                  <React.Fragment key={item.id}>
                    <tr className="row-color border border-slate-300" onClick={() => toggleExpansion(item.id)} >
                      <td className='border border-slate-300'>{item.id}</td>
                      <td className='border border-slate-300'>{item.userId}</td>
                      <td className='border border-slate-300'>{item.title}</td>
                    </tr>
                    {expandedRow === item.id && (
                        <tr>
                    
                          <td className='border border-slate-300' colSpan="4">{item.body}
                         <div className='align-right'>
                          <button class='btn btn-outline-dark' onClick={() => setButtonPopup(true)} >Przycisk do popup!</button>
                          </div>
                          </td>
                          
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