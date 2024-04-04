import React, { useState, useRef } from "react";
import DatepickerReact from "./DatepickerReact";
import "./style.css";
import { RxCross2 } from "react-icons/rx";
import { FaCalendarAlt } from "react-icons/fa";

const AddTask = () => {

  const [details, setDetails] = useState({
    title: "",
    description: "",
    deadline: "",
  });

  const getSelectedDate = (date) => {
    setDetails(prev => ({ ...prev,['deadline']:date}))
  }
  

  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails((prev) => ({ ...prev, [name]: value }));
};

console.log(details);
  return (
    <>
      <div className="add-container">
        <form className="add-form">
          <div className="task">
            <h3> Add Task </h3>
            <span>
              <RxCross2 />
            </span>
          </div>

          <h5 className="mt-4">
            {" "}
            Title <span style={{ color: "red" }}>*</span>
          </h5>
          <input
            type="text"
            placeholder="write your title here"
            name="title"
            onChange={handleChange}
          />
          <h5> Discription (Optional)</h5>
          <input
            type="text"
            placeholder="write your description "
            name="description"
            onChange={handleChange}
          />
          <h5>
            {" "}
            Deadline <span style={{ color: "red" }}>*</span>
          </h5>
          <div className="d-flex d-row">
            <DatepickerReact onChange={getSelectedDate} />
          </div>

          <button className="add-btn "> Add Task</button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
