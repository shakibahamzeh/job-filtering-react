import React from 'react';
import removeIcon from '../assets/images/icon-remove.svg';
import list from '../list'

const SearchBar = ({value,search,setSearch,setData}) => {

    const  deleteSkill =  () => {
    const newSkills= search.filter((skill) => skill !== value);
    setSearch(newSkills);
    if (newSkills) {
      let newData = list.filter((element) => {
        return newSkills.every((item) => {
          return (
            element.role === item ||
            element.tools.includes(item) ||
            element.level === item ||
            element.languages.includes(item)
          );
        });
      });
      setData(newData);
    } else {
      setData(list);
    }
  };

  return (
<div  className="search-result" value={value}>
     <p>{value}</p>
    <div className='icon-wrapper'>
         <img src={removeIcon} alt="delete" onClick={deleteSkill} />
    </div>
</div>
  )
}

export default SearchBar;