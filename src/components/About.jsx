import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function About() {
  return (
    <div className="card about">
      <img
        src="https://media.licdn.com/dms/image/v2/D4E03AQGjcgyiGP_lEA/profile-displayphoto-shrink_200_200/B4EZOst2xoH0Ag-/0/1733769769180?e=1768435200&v=beta&t=5QTNav5beDZT9HZ39iu-Ev_9MvmZpSxdPvunwqHaiFs"
        alt=""
      />

      <p>
        <span style={{ color: "white" }}>Hi, I am Oussama.</span> I build cool
        websites like this one.
      </p>
      <a>
        contact <FaArrowRight className="arrow" />
      </a>
    </div>
  );
}

export default About;
