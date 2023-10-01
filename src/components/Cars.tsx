const Cars = ({ onChange, data }) => {
  return (
    <>
      <input
        type="text"
        id="car1"
        name="car1"
        value={data.car1}
        onChange={onChange}
      ></input>
      <input
        type="text"
        id="car2"
        name="car2"
        value={data.car2}
        onChange={onChange}
      ></input>
      <input
        type="text"
        id="car3"
        name="car3"
        value={data.car3}
        onChange={onChange}
      ></input>
    </>
  );
};

export default Cars;
