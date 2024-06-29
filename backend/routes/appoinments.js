const router = require("express").Router(); 
let Appoinment = require("../models/appoinment");  

// Create a new appointment

router.route("/addAppoinment").post((req,res) =>{
  const Client_Name = req.body.Client_Name;
  const Client_TelNo = req.body.Client_TelNo;
  const Category = req.body.Category;
  const Service_name = req.body.Service_name;
  const Branch = req.body.Branch;
  const Date = req.body.Date;
  const Time = req.body.Time;
  const Service_Level = req.body.Service_Level;
  
    

    const newAppoinment = new Appoinment ({              // Service model
        Client_Name,
        Client_TelNo,
        Category,
        Service_name,
        Branch,
        Date,
        Time,
        Service_Level,
       
    })

    newAppoinment.save().then(() =>{     // success
        res.json("Appoinment added")  
      }).catch((err) =>{             // not success
           console.log(err);
      })

})

///// view appoinment

router.route("/viewAppoinment").get((req,res) =>{
    Appoinment.find().then((appoinments) =>{
        res.json(appoinments)
    }).catch((err)=>{
        console.log(err)
    })


})
// View appointments for a specific user
router.get("/viewAppointments/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
      const appointments = await Appointment.find({ userId: userId });
      res.json(appointments);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Update appointment
router.put("/updateAppointment/:id", async (req, res) => {
  const id = req.params.id;
  try {
      await Appointment.findByIdAndUpdate(id, req.body);
      res.json({ message: "Appointment updated successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Delete appointment
router.delete("/deleteAppointment/:id", async (req, res) => {
  const id = req.params.id;
  try {
      await Appointment.findByIdAndDelete(id);
      res.json({ message: "Appointment deleted successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

  //////////// find client///////

  router.route("/get/:id").get(async (req, res) =>{
    let client_ID = req.params.id;
    let client;
    client = await Appoinment.findById(client_ID)
    .then((client) => {
        res.status(200).send({status : "client fetched" , view_client_information : client})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "error with get client" , error: err.message})
    })
  })

  module.exports = router;
  
