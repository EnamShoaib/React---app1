import { useState } from "react";

function listGroup1() {
  let items = ["Advenucre", "Romantic", "Comidy", "Action"];
  const [selectedIndex, setselectedIndex] = useState(-1);

  return (
    <>
      <h1>Movie</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default listGroup1;
