import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./events.css";
import listEvents from "./eventsdata";

const Events = () => {
  return (
    <>
      <NavBar />
      <div className="artboard">
        {listEvents.map((event) => {
          return (
            <div className="card">
              <div className="card__side card__side--back">
                <div className="card__cover">
                  <h4 className="card__heading">
                    <span className="card__heading-span">{`About ${event.title}`}</span>
                  </h4>
                </div>
                <div className="card__details">
                  <ul>
                    <li>{event.content}</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--front">
                <div className="card__theme">
                  <div className="card__theme-box">
                    <p className="card__subject">abhivarta</p>
                    <p className="card__title">{event.title}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default Events;
