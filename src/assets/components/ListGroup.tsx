function listGroup() {
  const items = ["New York", "san Francisco", "Tokyo", "London", "Paris"];
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default listGroup;
