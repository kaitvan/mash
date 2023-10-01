import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Partners from "../components/Partners";
import Jobs from "../components/Jobs";
import Salaries from "../components/Salaries";
import Cars from "../components/Cars";
import Locations from "../components/Locations";

function Quiz() {
  const [formIsValid, setFormIsValid] = useState(false);
  const [index, setIndex] = useState(0);
  const [data, setData] = useState({
    home1: "mansion",
    home2: "apartment",
    home3: "shack",
    home4: "house",
    partner1: "",
    partner2: "",
    partner3: "",
    job1: "",
    job2: "",
    job3: "",
    salary1: "",
    salary2: "",
    salary3: "",
    car1: "",
    car2: "",
    car3: "",
    location1: "",
    location2: "",
    location3: "",
  });

  // const getRandomNumber = (array: string[]) => {
  //   return Math.floor(Math.random() * array.length);
  // };

  const quizText = [
    {
      title: "partner",
      text: "Enter 3 names of people you would like to be your life partner.",
    },
    {
      title: "job",
      text: "Enter 3 possible jobs you would like to do in the future.",
    },
    {
      title: "salary",
      text: "Enter 3 possible salaries.",
    },
    {
      title: "car",
      text: "Enter 3 cars you would like to drive.",
    },
    {
      title: "location",
      text: "Enter 3 locations where you would like to live.",
    },
  ];

  // const checkValidity = () => {
  //   if (
  //     input1.trim().length >= 1 &&
  //     input2.trim().length >= 1 &&
  //     input3.trim().length >= 1
  //   ) {
  //     setFormIsValid(true);
  //   }
  //   return formIsValid;
  // };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  // const checkValidity = (val1: string, val2: string, val3: string) => {
  //   if (
  //     val1.trim().length >= 1 &&
  //     val2.trim().length >= 1 &&
  //     val3.trim().length >= 1
  //   ) {
  //     setFormIsValid(true);
  //   }
  // };

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/results");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (index < 4) {
      setIndex((prevState) => prevState + 1);
    } else if (index === 4) {
      routeChange();
    }
  };

  return (
    <>
      <div className="title">
        <h1>{`MASH ${index + 1}/5`}</h1>
      </div>
      <div className="card-body">
        <div>
          <h2>{`Your ${quizText[index].title}`}</h2>
          <p>{quizText[index].text}</p>
        </div>
        <form onSubmit={onSubmitHandler}>
          {index === 0 && <Partners onChange={onChangeHandler} data={data} />}
          {index === 1 && <Jobs onChange={onChangeHandler} data={data} />}
          {index === 2 && <Salaries onChange={onChangeHandler} data={data} />}
          {index === 3 && <Cars onChange={onChangeHandler} data={data} />}
          {index === 4 && <Locations onChange={onChangeHandler} data={data} />}
          <button disabled={formIsValid}>
            {index < 4 ? "Next" : "Click to see your future"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Quiz;
