import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";
const stuDetails = {
  firstname: "",
  lastname: "",
  mail: "",
  phoneNumber: "",
  dateOfBirth: "",
  gender: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
};
function App() {
  const [details, setDetails] = useState(stuDetails);
  const [allDetails, setAllDetails] = useState([]);
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(details.firstname==""||details.lastname==""||details.mail==""
    ||details.phoneNumber==""||details.dateOfBirth==""||details.gender==""
    ||details.addressLine1==""||details.addressLine2==""||details.city==""
    ||details.state==""||details.postalCode==""||details.postalCode==""){

      alert("please fill all fields")
      return;
    }
    await axios.post("http://localhost:8082/postDetails").then(res=>{
      // setAllDetails(res.data)
      alert("details are saved")
    }).catch(err=>{
      alert("something went wrong")
    })
  };
  return (
    <div className="app">
      <div className="contaner">
        <h1>Student registration form</h1>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            placeholder="First name"
            name="firstname"
            onChange={(e) => {
              setDetails({ firstname: e.target.value });
            }}
          />
          <input
            placeholder="Last name"
            name="lastname"
            onChange={(e) => {
              setDetails({ lastname: e.target.value });
            }}
          />
          <input
            placeholder="Mail"
            name="mail"
            onChange={(e) => {
              setDetails({ mail: e.target.value });
            }}
          />
          <input
            placeholder="Phone number"
            name="phoneNumber"
            onChange={(e) => {
              setDetails({ phoneNumber: e.target.value });
            }}
          />
          <input
            placeholder="Date of birth"
            name="dateOfBirth"
            onChange={(e) => {
              setDetails({ dateOfBirth: e.target.value });
            }}
          />
          <select  onChange={(e) => {
              setDetails({ gender: e.target.value });
              console.log(details)
            }
            }>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input placeholder="Gender" name="gender" />
          <input
            placeholder="Address line 1"
            name="addressLine1"
            onChange={(e) => {
              setDetails({ addressLine1: e.target.value });
            }}
          />
          <input
            placeholder="Address line 2"
            name="addressLine2"
            onChange={(e) => {
              setDetails({ addressLine2: e.target.value });
            }}
          />
          <input placeholder="City" name="city" />
          <input
            placeholder="State provision"
            name="state"
            onChange={(e) => {
              setDetails({ state: e.target.value });
            }}
          />
          <input
            placeholder="Postal code"
            name="postalCode"
            onChange={(e) => {
              setDetails({ postalCode: e.target.value });
            }}
          />
          <input
            placeholder="Country"
            name="country"
            onChange={(e) => {
              setDetails({ country: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
//student registration form
//html from for input
//use java or any other language
//validate and store registration
//display the students who ever registers
//1.first name,last name,emailId,pgonenumber,date of birth,gender,address line 1, address line2 ,city,state provison,postal code ,country

export default App;
