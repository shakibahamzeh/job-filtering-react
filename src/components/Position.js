import React from 'react';
import "../assets/styles/position.css";




const Position = ({jobData,selectHandler}) => {
    const {position,logo,company,postedAt,contract,location,tools,languages,role,level,featured} = jobData;
    const arr = [...languages,...tools,role,level] ;
    console.log(arr)
  return (
    <div className='wrapper'>
       
        <section className='left-container'>
            <figure>
                <img src={logo} alt="logo"/>
            </figure>
            <div className='content'>
                <div className='top-content'>
                    <div className='company-title'>
                      <h3>{company}</h3>
                    </div>
                      <div className='new'>
                        {
                            jobData.new && <h4>new!</h4> 
                        }
                     </div>
                      <div className='featured'>
                      {
                        featured && <h4>featured</h4> 
                      }
                     </div>
                 </div>
                {/* position */}
                <div className='position-title'>
                   <h2>{position}</h2>
                </div>
                {/* buttom */}
                <div className='buttom-content'>
                <div>
                    <p>{postedAt}</p>
                </div>
                <span>.</span>
                <div>
                    <p>{contract}</p>
                </div>
                <span>.</span>
                <div>
                    <p>{location}</p>
                </div>
                </div>
            </div>
        </section>
        <section className='tools-container'>
          <div>
              {
                  arr.map((skill,index) => <li key={index} onClick={selectHandler}>{skill}</li>)
              }
          </div>
        </section>

    </div>
  )
}

export default Position