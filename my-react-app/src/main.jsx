// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'
// import Vehicle from "./Vehicle.jsx";
import Practice, { Mycar, Myfavcar } from "./Practices";

import Destructing from "./components/Destructuring";
import ReactStateExample from "./components/ReactStateExample.jsx";

// import { Netflixseries, AnotherComponent } from "./components/Netflixseries.jsx"; // named export
// import  Netflixseries from "./components/Netflixseries.jsx"; // named export
// function Car(props) {
//   return <h2>I am a {props.brand} Car!</h2>;
  
// }
// const theFuel = () =>{
//   return "diesel";
// }
// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my Garage?</h1>
//       <p> Fuel used {theFuel()} </p>
//       <Car brand="Ford" />
//       <Car brand="BMW" />
//       <Car brand="Audi" />
//       <Vehicle bike="Honda" />
//     </>
//   );
// }


// Conditional statements in React

function Garage() {
  // const cars = ["Ford", "BMW", "Audi", "Fiat"];
  // return (
  //   <>
  //     <h1>Who lives in my Garage?</h1>
  //     {cars.length > 0 ? (
  //       <h2>You have {cars.length} cars in your garage.</h2>
  //     ) : (
  //       <h2>Your garage is empty.</h2>
  //     )}
  //   </>
  // );

  let number = 10;
  return (
    <>
    {number > 0  ? <h1>Number is positive</h1> : <h1>Number is negative</h1>}
    </>
  )
}
const root = createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    {/* <Garage /> */}
    <Practice />
    <Mycar brand="Ford" />
    {/* <Netflixseries /> */}
    {/* <AnotherComponent /> */}
    <Myfavcar color="red" carName="Mustang" cars={{ year: 2021 }} />

    <Destructing />
    <ReactStateExample />
  </>
);
