import React,{useState} from 'react';
import data from "../services/data.json"
import Position from './Position';
import '../assets/styles/layout.css';
import removeIcon from '../assets/images/icon-remove.svg'



const Layout = () => {
  const [search,setSearch] = useState([]);
  
  const selectHandler = (e) => {
    const clickedSkill = e.target.textContent;
    if(!search.includes(clickedSkill)){
   setSearch([...search, clickedSkill]);
  }
}


  const clearHandler = () => {
    setSearch([])
  }
  

 

  
  return (
    <>
      <header className='header'>
        {
          (search.length === 0) ? null : 
          <section className='search-container'>
            <div className='search-wrapper'>
              {
                search.map((value,index) => <div key={index} className="search-result">
                  <p>{value}</p>
                  <div className='icon-wrapper'>
                    <img src={removeIcon} alt="delete"/>
                  </div>
                </div>)
              }
            </div>
            <div>
              <button onClick={clearHandler}>Clear</button>
            </div>
           
          </section>
        }
      </header>
      <main className='main'>
        {
         data.map(item => <Position key={item.id} jobData={item} selectHandler={selectHandler}/>)
        }
      </main>
         
    </>
  )
}

export default Layout;