import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const AdminCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableDates, setAvailableDates] = useState([
    "2025-05-10",
    "2025-05-15",
    "2025-05-20",
  ]);

  const toggleDate = (date) => {
    const dateStr = date.toISOString().split("T")[0];
    if (availableDates.includes(dateStr)) {
      setAvailableDates((prev) => prev.filter((d) => d !== dateStr));
    } else {
      setAvailableDates((prev) => [...prev, dateStr]);
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const dateStr = date.toISOString().split("T")[0];
      if (availableDates.includes(dateStr)) {
        return "available-date"; // Custom class styled with Tailwind
      }
    }
    return null;
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Admin Calendar
      </h2>
      <Calendar
        onClickDay={(value) => {
          setSelectedDate(value);
          toggleDate(value);
        }}
        value={selectedDate}
        tileClassName={tileClassName}
      />
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Selected: {selectedDate.toDateString()}
        </p>
        <p className="text-sm text-gray-600">
          Click a date to toggle availability.
        </p>
      </div>
    </div>
  );
};

export default AdminCalendar;
