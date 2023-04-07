import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import { DateElement } from "./DateStyle";
// import "react-datepicker/dist/react-datepicker-cssmodules.css";

const Datepicker = () => {
  // const [startDate, setStartDate] = useState(new Date());
  // return (
  //   <DatePicker
  //     showIcon
  //     selected={startDate}
  //     onChange={(date) => setStartDate(date)}
  //   />
  // );

  const [startDate, setStartDate] = useState(new Date());
  return (
    <DateElement>
      <label>Date of Birth*</label>
      <div>
        <input type="date" />
      </div>
    </DateElement>
  );
};

export default Datepicker;

// <DatePicker
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//           dateFormat="dd/MM/yyyy"
//           style={{ outline: "none", border: 0, height: "25px" }}
//           placeholderText="Select date"
//         />
