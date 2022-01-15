import Tour from "./Tour";
const Tours = ({tours,removeTour}) => {
    return (  
        <section>
            <div className="tittle">
                <h2>ours tours</h2>
            </div>
            <div>
                {tours.map((tour)=>
                 <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
                
                )}
            </div>
        </section>
    );
}
 
export default Tours;

// example

// import React from 'react'
// import Tour from './Tour';
// const Tours = ({tours,removeTour}) => {
//     return (
//         <div>
//          <div className="tittle">
//                 <h2>ours tours</h2>
//             </div>
//             <div>
//                 {tours.map((tour)=>
//                <Tour key={tour.id} {...tour} removeTour={removeTour} />
//                )

//                 }
//             </div>
//         </div>
//     )
// }

// export default Tours;
