import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Students() {
  const [userForm, setUserForm] = useState([]);
  const deleteStudent = (_id) => {
    axios
      .delete("http://localhost:4000/students/delete-student/" + _id)
      .then(() => {
        console.log("Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/notes/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Question</th>
            <th scope="col">Answer</th>
            <th scope="col">Chapter</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{user._id}</th>
                <td>{user.question}</td>
                <td>{user.answer}</td>
                <td>@{user.chapter}</td>
                <td>@{user.class}</td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Students;