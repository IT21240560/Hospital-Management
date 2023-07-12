const router = require("express").Router();
const { deleteModel } = require("mongoose");
let Patient = require("../models/patient");

//create
router.route("/add").post((req, res) =>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const id = req.body.id;
    const admit_Date = req.body.admit_Date;
    const discharge_Date = req.body.discharge_Date;

    const newPatient = new Patient({
        name,
        age,
        gender,
        id,
        admit_Date,
        discharge_Date
    })
    newPatient.save().then(()=>{
        res.json("Patient added")
    }).catch((err)=>{
        console.log(err)
    })
})

//read
router.route("/").get((req,res)=>{
    Patient.find().then((patients)=>{
        res.json(patients)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
router.route("/update/:id").put(async(req,res)=>{

    let Id = req.params.id;
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const id = req.body.id;
    const admit_Date = req.body.admit_Date;
    const discharge_Date = req.body.discharge_Date;

    const updatePatient = {
        name, 
        age, 
        gender,
        id,
        admit_Date,
        discharge_Date

    }
    const update = await Patient.findByIdAndUpdate(Id, updatePatient).then(()=>{
        res.status(200).send({status : "patient updated "})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status: "Error with update patient", error: err.message})
    })
})

//delete
router.route("/delete/:id").delete(async(req,res)=>{
    let Id = req.params.id;

    await Patient.findByIdAndDelete(Id).then(()=>{
        res.status(200).send({status: "patient deleted", user: update});
    }).catch((err)=>{
        //consloe.log(err.message);
        //res.status(500).send({status: "Error with delete patient", error: err.message})
    })
})

http://localhost:8083/patient/get/:id
router.route("/get/:id").get(async(req,res)=>{
    let Id= req.params.id;
    const patient = await Patient.findById(Id).then((patient)=>{
        res.status(200).send({status: "patient fetched", patient})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get patient", error: err.message})
    })
})

module.exports = router;
