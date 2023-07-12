import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AddPatient(){
    const navigate= useNavigate();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [id, setId] = useState("");
    const [admit_Date, setAdmit_Date] = useState("");
    const [discharge_Date, setDischarge_Date] = useState("");
    
    
    function sendData(e){
        e.preventDefault();
        
        const newPatient ={
            name,
            age,
            gender,
            id,
            admit_Date,
            discharge_Date
        }

        axios.post("http://localhost:8083/patient/add", newPatient).then(()=>{
            alert("Patient Added")
            setName("");
            setAge("");
            setGender("");
            setId("");
            setAdmit_Date("");
            setDischarge_Date("");
            navigate('/ManagePatient');


        }).catch((err)=>{
            alert(err)
        })
    }

    return(

        <div className='d-flex w-100 vh-50 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label for="name">Patient Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Patient Name" onChange={(e)=>{
                        setName(e.target.value); 
                    }} />
                </div>
                <div className="form-group">
                    <label for="age">Patient Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Patient Age" onChange={(e)=>{
                        setAge(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label for="gender">Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter Patient Gender" onChange={(e)=>{
                        setGender(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label for="id">Patient ID</label>
                    <input type="text" className="form-control" id="id" placeholder="Enter Patient ID" onChange={(e)=>{
                        setId(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label for="admit_Date">Admit Date</label>
                    <input type="date" className="form-control" id="admit_Date" placeholder="Enter Patient Admit Date" onChange={(e)=>{
                        setAdmit_Date(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label for="discharge_Date">Discharge Date</label>
                    <input type="date" className="form-control" id="discharge_Date" placeholder="Enter Patient Discharge Date" onChange={(e)=>{
                        setDischarge_Date(e.target.value);
                    }} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    )           
 
}