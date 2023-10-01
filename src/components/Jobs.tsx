const Jobs = ({ onChange, data }) => {
  return (
    <>
      <input
        type="text"
        id="job1"
        name="job1"
        value={data.job1}
        onChange={onChange}
      ></input>
      <input
        type="text"
        id="job2"
        name="job2"
        value={data.job2}
        onChange={onChange}
      ></input>
      <input
        type="text"
        id="job3"
        name="job3"
        value={data.job3}
        onChange={onChange}
      ></input>
    </>
  );
};

export default Jobs;