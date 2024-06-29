const router = require("express").Router();
const multer = require('multer');
let Service = require("../models/service"); // create Service model

/////////////////////////add service//////////////////

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage:storage });


router.route("/add").post(upload.array("images" ), (req, res) => {
  console.log(req.body);
  console.log(req.files);
  
  const Service_Name = req.body.Service_Name;
  const Service_Category = req.body.Service_Category;
  const Service_Description = req.body.Service_Description;
  const Service_Duration = req.body.Service_Duration;
  const Service_Price = Number(req.body.Service_Price);
  const Product = req.body.Product;
  const Service_status = req.body.Service_status;
  const images = req.files.map((file) =>({
    filename: file.originalname,
    path: file.path,
  })); 

  const newService = new Service({
    Service_Name,
    Service_Category,
    Service_Description,
    Service_Duration,
    Service_Price,
    Product,
    Service_status,
    images,
  });

  newService
    .save()
    .then(() => {
      res.json("Services added");
    })
    .catch((err) => {
      console.log(err);
    });
});


//////////read//////
router.route("/").get((req,res) =>{
    Service.find().then((services) =>{
        res.json(services)
    }).catch((err)=>{
        console.log(err)
    })


})

///////update//////
// http//localhost:8070/service/update/hgdhwgeyd37

router.route("/update/:id").put(async(req,res) =>{
let serviceID = req.params.id;  
const {Service_Name,Service_Category,Service_Description,Service_Duration,Service_Price,Service_Image,Product,Service_status} = req.body;

const updateService = { 
    Service_Name,    // object
    Service_Category,
    Service_Description,
    Service_Duration,
    Service_Price,
    Product,
    Service_status ,
    images 
}

const update = await Service.findByIdAndUpdate(serviceID, updateService).then(() =>{
    res.status(200).send({status: "user updated"})
}).catch((err) =>{
    console.log(err);
    res.status(500).send({status : "error with updating data" , error: err.message});
})

})
///////// delete////////
// Existing code...

///////// delete /////////
router.route("/delete/:id").delete(async (req, res) => {
  const serviceID = req.params.id;
  try {
    await Service.findByIdAndRemove(serviceID);
    res.json({ status: "ok", data: "Service deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", error: error.message });
  }
});

// Existing code...





module.exports = router;
