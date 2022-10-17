import React from "react";
import "./HomeMain.css";

const HomeMain = () => {
  const tour = [
    {
      date: "JUL 16",
      state: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 19",
      state: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 22",
      state: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 29",
      state: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "AUG 2",
      state: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "AUG 7",
      state: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
  ];

  return (
    <div>
      <h1 className="head">TOURS</h1>
      {tour.map((ticket) => {
        return (
          <div>
            <div className="mainItem">
              <div>{ticket.date}</div>
              <div>{ticket.state}</div>
              <div>{ticket.place}</div>
              <button>BUY TICKETS</button>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default HomeMain;
