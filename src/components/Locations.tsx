interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  data: {
    location1: string;
    location2: string;
    location3: string;
  };
}

const Locations = ({ onChange, data }: Props) => {
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
