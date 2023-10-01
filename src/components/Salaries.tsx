interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  data: {
    salary1: string;
    salary2: string;
    salary3: string;
  };
}

const Salaries = ({ onChange, data }: Props) => {
  return (
    <>
      <input
        type="text"
        id="salary1"
        name="salary1"
        value={data.salary1}
        onChange={onChange}
      ></input>
      <input
        type="text"
        id="salary2"
        name="salary2"
        value={data.salary2}
        onChange={onChange}
      ></input>
      <input
        type="text"
        id="salary3"
        name="salary3"
        value={data.salary3}
        onChange={onChange}
      ></input>
    </>
  );
};

export default Salaries;
