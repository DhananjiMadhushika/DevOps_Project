const router = require("express").Router(); 
let User = require("../models/userLogin");

/////////////////////////add user//////////////////

router.route("/addUser").post(async (req,res) =>{
    const UserName = req.body.UserName;
    const Password = req.body.Password;
    

    const newUser = new User({              
        UserName,
        Password,
        
        
    })

   try{
    const systemUser = await User.findOne({UserName:UserName,Password:Password })
        if(systemUser){
            res.json("exist");
        }
        else{
            newUser.save()
            res.json("notexist");
            
        }
    
   }
   catch(e){
    res.json("fail")
   }

})


//////////view user//////
router.route("/viewUser").get((req,res) =>{
    UserLogin.find().then((UserLogins) =>{
        res.json(UserLogins)
    }).catch((err)=>{
        console.log(err)
    })

})

///////update user//////


router.route("/updateUser/:id").put(async(req,res) =>{
    let userID = req.params.id;  
    const {UserName, Password} = req.body; 
    
    const updateUser = { 
        UserName,
        Password
    }
    
    const update = await UserLogin.findByIdAndUpdate(userID, updateUser).then(() =>{
        res.status(200).send({status: "user updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status : "error with updating data" , error: err.message});
    })
    
    })

    ///////// delete user////////

router.route("/deleteuser/:id").delete(async(req, res) =>{
    let userID = req.params.id;
  
    await UserLogin.findByIdAndDelete(userID)
    .then(() =>{
      res.status(200).send({status: "user delete"})
    }).catch((err)=>{
      console.log(err.message);
      res.status(500).send({status: "error with delete table" , error: err.message});c
    })
  })

  //////////// find user///////

  router.route("/getUser/login").post(async (req, res) =>{
    let UserName = req.body.UserName;
    let Password = req.body.Password;

    try{
        const systemUser = await User.findOne({UserName:UserName, Password:Password})

        if (systemUser){
            res.json("exist")
            

        }
        else{
           res.json("notexist") 
        }
    }
    catch{

    }
  })
  
  module.exports = router;

