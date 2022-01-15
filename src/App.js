import React, { useState,useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://jsonplaceholder.typicode.com/users';

function App() {
const [loading,setLoading]= useState(true);
const [tours,setTours]=useState([]);

const removeTour =(id) =>{
  const newTours = tours.filter((tour) => tour.id !==id);
  setTours(newTours);
};

const fetchTours = async () => {
  setLoading(true);

  try{
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
    }catch(error){
  setLoading(false);
  console.log(error);
}
};
useEffect(() => {
 fetchTours();
}, []);

if(loading){  
  return(
    <main>
    <Loading />
    </main>
  );
}
if(tours.length === 0){
  return(
    <main>
<div className="title">
  <h2>no tours left</h2>
  <button onClick={fetchTours}>refresh</button>
</div>
    </main>
  );
}
  return (
    <main>
    <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
 

// example

// import React, { useState,useEffect } from 'react'
// import Loading from './Loading'
// import Tours from './Tours'

// function Example() {
// const [loading,setLoading]= useState(true);
// const [tours,setTours]=useState([]);
// const removeTour =(id)=>{
//   const filterState = tours.filter((tour)=>tour.id !==id);
//   setTours(filterState);
// }
//   useEffect (()  => {
//   fetch(`https://jsonplaceholder.typicode.com/users`)
// .then(response => response.json())
// .then(json => setTours(json))
// setLoading(false);

// },[])


// if(loading){  
//     return(
//       <div>
//       <Loading />
//       </div>
//     );
//   }
//   if(tours.length ===0){
//     return(
//     <div>
//       <h2>no tour left</h2>
//       <button >refresh</button>
//     </div>);
//   }
//   return (
//     <div>
//     <Tours tours={tours} removeTour={removeTour} />
//     </div>
//   );
// }
// export default Example;





