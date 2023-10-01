import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Partners from "../components/Partners";
import Jobs from "../components/Jobs";
import Salaries from "../components/Salaries";
import Cars from "../components/Cars";
import Locations from "../components/Locations";

interface Future {
  home: string;
  partner: string;
  job: string;
  salary: string;
  car: string;
  location: string;
}

interface Props {
  getFuture: (future: Future) => void;
}

function Quiz({ getFuture }: Props) {
  const [formIsValid, setFormIsValid] = useState(false);
  const [index, setIndex] = useState(0);
  const [partnerData, setPartnerData] = useState({
    partner1: "",
    partner2: "",
    partner3: "",
  });

  const [jobData, setJobData] = useState({
    job1: "",
    job2: "",
    job3: "",
  });

  const [salaryData, setSalaryData] = useState({
    salary1: "",
    salary2: "",
    salary3: "",
  });

  const [carData, setCarData] = useState({
    car1: "",
    car2: "",
    car3: "",
  });

  const [locationData, setLocationData] = useState({
    location1: "",
    location2: "",
    location3: "",
  });

  const homes = {
    home1: "mansion",
    home2: "apartment",
    home3: "shack",
    home4: "house",
  };

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

  const checkValidity = () => {
    let isValid = false;
    if (index === 0) {
      isValid = [...Object.values(partnerData)].every(Boolean);
    } else if (index === 1) {
      isValid = [...Object.values(jobData)].every(Boolean);
    } else if (index === 2) {
      isValid = [...Object.values(salaryData)].every(Boolean);
    } else if (index === 3) {
      isValid = [...Object.values(carData)].every(Boolean);
    } else if (index === 4) {
      isValid = [...Object.values(locationData)].every(Boolean);
    }
    setFormIsValid(isValid);
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (index === 0) {
      setPartnerData((prevState) => ({ ...prevState, [name]: value }));
    } else if (index === 1) {
      setJobData((prevState) => ({ ...prevState, [name]: value }));
    } else if (index === 2) {
      setSalaryData((prevState) => ({ ...prevState, [name]: value }));
    } else if (index === 3) {
      setCarData((prevState) => ({ ...prevState, [name]: value }));
    } else if (index === 4) {
      setLocationData((prevState) => ({ ...prevState, [name]: value }));
    }

    checkValidity();
  };

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/results");
  };

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (index < 4) {
      setIndex((prevState) => prevState + 1);
      setFormIsValid(false);
    } else if (index === 4) {
      getFuture(selectRandomFuture());
      routeChange();
    }
  };

  const selectRandomFuture = () => {
    const home =
      Object.values(homes)[
        Math.floor(Math.random() * Object.values(homes).length)
      ];
    const partner =
      Object.values(partnerData)[
        Math.floor(Math.random() * Object.values(partnerData).length)
      ];
    const job =
      Object.values(jobData)[
        Math.floor(Math.random() * Object.values(jobData).length)
      ];
    const salary =
      Object.values(salaryData)[
        Math.floor(Math.random() * Object.values(salaryData).length)
      ];
    const car =
      Object.values(carData)[
        Math.floor(Math.random() * Object.values(carData).length)
      ];
    const location =
      Object.values(locationData)[
        Math.floor(Math.random() * Object.values(locationData).length)
      ];
    return {
      home,
      partner,
      job,
      salary,
      car,
      location,
    };
  };

  // const getRandomNumber = (array: string[]) => {
  //   return Math.floor(Math.random() * array.length);
  // };

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
          {index === 0 && (
            <Partners onChange={onChangeHandler} data={partnerData} />
          )}
          {index === 1 && <Jobs onChange={onChangeHandler} data={jobData} />}
          {index === 2 && (
            <Salaries onChange={onChangeHandler} data={salaryData} />
          )}
          {index === 3 && <Cars onChange={onChangeHandler} data={carData} />}
          {index === 4 && (
            <Locations onChange={onChangeHandler} data={locationData} />
          )}
          <button disabled={!formIsValid}>
            {index < 4 ? "Next" : "Click to see your future"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Quiz;
