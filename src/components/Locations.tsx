const Locations = ({ onChange, data }) => {
  return (
    <>
      <input
        type="text"
        id="location1"
        name="location1"
        value={data.location1}
        onChange={onChange}
      ></input>
      <input
        type="text"
        id="location2"
        name="location2"
        value={data.location2}
        onChange={onChange}
      ></input>
      <input
        type="text"
        id="location3"
        name="location3"
        value={data.location3}
        onChange={onChange}
      ></input>
    </>
  );
};

export default Locations;
