import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNum = function (number) {
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;

    return number;
  };

  const nextPerson = function () {
    setIndex((index) => checkNum(index + 1));
  };

  const prevPerson = function () {
    setIndex((index) => checkNum(index - 1));
  };

  const randPerson = function () {
    let rand = Math.trunc(Math.random() * 4);
    console.log(rand);

    if (rand === index) rand++;

    setIndex(checkNum(rand));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={nextPerson} />
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={prevPerson} />
        </button>
      </div>
      <button className="random-btn" onClick={randPerson}>
        random
      </button>
    </article>
  );
};

export default Review;
