export const Destructing = () => {
  const person = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA",
    },
  }; 

  // Destructuring the object
  const { name, age, address: { city, country } } = person;

  return (
    <div>
      <h2>Destructuring Example</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Country: {country}</p>
    </div>
  );
}

export default Destructing;