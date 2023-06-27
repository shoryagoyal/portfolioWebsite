function Achievement(props) {
  const { title, shortDescription, description } = props;
  return (
    <>
      <h2>{title}</h2>
      <div>{shortDescription}</div>
      <ul>
        {description.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </>
  );
}

export default Achievement;
