import React from "react";
import birthdays from "../data/data";

const BirthdayReminder = () => {
  const [data, setData] = React.useState(birthdays);
  const handleClearItem = (id) => {
    return setData((prevState) => {
      return prevState.filter((d) => d.id !== id);
    });
  };
  return (
    <>
      <h1>Birthdays</h1>
      <div className="card" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          {data.map((birthday) => {
            return (
              <li className="list-group-item" key={birthday.id}>
                <span> {birthday.name}</span>
                <span> {birthday.dob}</span>
                <span> {birthday.age}</span>
                <button
                  className="btn border_1"
                  onClick={() => handleClearItem(birthday.id)}
                >
                  Clear Item
                </button>
              </li>
            );
          })}
        </ul>
        <button className="btn submit" onClick={() => setData([])}>
          {" "}
          Clear all{" "}
        </button>
      </div>
    </>
  );
};
export default BirthdayReminder;
