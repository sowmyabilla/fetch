import React, { useState } from 'react'

const Tour = ({id,company,email,username,name,removeTour}) => {
    const [readMore,setReadMore] = useState(false)
    return (
        <article className='single-tour'>
          <footer>
              <div className="tour-info">
                  <h4>{name}</h4>
            <div className="tour-email">{email}</div>
              </div>
              <div className="tour-username">
                  <h4>{username}</h4>
              </div>
              <h4>{readMore?company.catchPhrase:`${company.catchPhrase.substring(0,10)}`}
              <button onClick={()=> setReadMore(!readMore)}>
                  {readMore?'show less':'read more'}
              </button>
              </h4>
            <button className='delete-btn' onClick={()=>removeTour(id)}>not intrested</button>
          </footer>
        </article>
    )
}

export default Tour;


// example

// import React ,{useState} from 'react'

// const Tour = ({id,company,email,username,name,removeTour}) => {
//     const [readMore,setReadMore] = useState(false)

//     return (
//         <div className='a'>
//                   <h4>{name}</h4>
//                   <h4>{email}</h4>
//                   <h4>{username}</h4>
//                   <h4 >{readMore?company.bs:`${company.bs.substring(0,4)}`}</h4>
//                     <h4 onClick={()=>setReadMore(!readMore)}> {readMore?'show less':'read more'}
//                     </h4>
//                 <button onClick={()=>removeTour(id)}>delete</button> 



            
//         </div>
//     )
// }

// export default Tour

