import React, { useState } from "react";

const AttendanceTracker = () => {
  const students = ["Ravi", "Neha", "Amit", "Priya", "Karan"];
  const [attendance, setAttendance] = useState(
    Array(students.length).fill(false)
  );

  const handleAttendanceChange = (index) => {
    const updated = [...attendance];
    updated[index] = !updated[index];
    setAttendance(updated);
  };

  const presentCount = attendance.filter(Boolean).length;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🎓 Attendance Tracker</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((student, i) => (
          <li key={i}>
            <label>
              <input
                type="checkbox"
                checked={attendance[i]}
                onChange={() => handleAttendanceChange(i)}
              />{" "}
              {student}
            </label>
          </li>
        ))}
      </ul>
      <h3>
        ✅ Total Present: {presentCount} / {students.length}
      </h3>
    </div>
  );
};

export default AttendanceTracker;

