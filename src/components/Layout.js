import React,{useState,useEffect} from 'react';
//import data from "../services/data.json"
import Position from './Position';
import '../assets/styles/layout.css';
import list from '../list'
import SearchBar from './SearchBar';



const Layout = () => {
  const [search,setSearch] = useState([]);
  const [data, setData] = useState([]);
  
const getData = function () {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then(function (data) {
        setData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);




  const selectHandler = (e) => {
    const clickedSkill = e.target.textContent;
    if(!search.includes(clickedSkill)){
   setSearch([...search, clickedSkill]);
  }
   const filteredData = data.filter((ev) =>
      [ev.role, ev.level, ...ev.languages, ...ev.tools].includes(clickedSkill)
    );
    setData(filteredData);
}


  const clearHandler = () => {
    setSearch([]);
    setData(list);
  }
  

  
  return (
    <>
      <header className='header'>
        {
          (search.length === 0) ? null : 
          <section className='search-container'>
            <div className='search-wrapper'>
              {
                search.map((value,index) => <SearchBar key={index} value={value} search={search} setSearch={setSearch} setData={setData}/>)
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