interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  data: {
    partner1: string;
    partner2: string;
    partner3: string;
  };
}

const Partners = ({ onChange, data }: Props) => {
  return (
    <>
      <input
        type="text"
        id="partner1"
        name="partner1"
        value={data.partner1}
        onChange={onChange}
      ></input>
      <input
        type="text"
        id="partner2"
        name="partner2"
        value={data.partner2}
        onChange={onChange}
      ></input>
      <input
        type="text"
        id="partner3"
        name="partner3"
        value={data.partner3}
        onChange={onChange}
      ></input>
    </>
  );
};

export default Partners;
