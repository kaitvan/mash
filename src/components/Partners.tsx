const Partners = ({ onChange, data }) => {
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
