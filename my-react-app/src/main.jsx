// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'
import Vehicle from "./Vehicle.jsx";

function Car(props) {
  return <h2>I am a {props.brand} Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car brand="Ford" />
      <Car brand="BMW" />
      <Car brand="Audi" />
      <Vehicle bike="Honda" />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <Garage />
);
