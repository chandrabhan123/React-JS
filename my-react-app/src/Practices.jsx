export const Practice = () => {
  return (
    <div>
      <h1>This is a practice component</h1>
    </div>
  );
  const student = ["Chandrabhan", "Ravi", "Amit", "Sumit"];
  return (
    <>
      <p>{student.length === 0 && "No student found"}</p>
      <p>Number of student : {student.length}</p>
    </>
  );
};

export const Mycar = (props) => {
  return props.brand;
};

export const Myfavcar = (props) => {
    // let carinfo = { carName: "Ford", year: 2020 };
  return (
    <>
      <h3>
        My fab car is {props.color} {props.carName}
      </h3>
      <p>but the year is : {props.cars.year}</p>
    </>
  );
};
export default Practice;
