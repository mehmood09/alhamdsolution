import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NotesList() {
  const [userForm, setUserForm] = useState([]);
  const deleteStudent = (_id) => {
    axios
      .delete("http://localhost:4000/notes/delete-note/" + _id)
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
      <table className="table border-1 border-solid border-[#0066ff61] text-[12px] font-bold mb-10 leading-7 text-headingColor">
        <thead>
          <tr>
          <th scope="col">Class</th>
          <th scope="col">Chapter</th>
          <th scope="col">Answer</th>
          <th scope="col">Question</th>
          <th scope="col">#</th>
            
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
            return (
              <tr className="font-Jameel Noori Nastaleeq text-right divide-y divide-y divide-dashed divide-slate-200" key={index}>
                <td>{user.Class}</td>
                <td>{user.Chapter}</td>
                <td>{user.Answer}</td>
                <td>{user.Question}</td>
                <th scope="row">{user.Id}</th>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default NotesList;