//import the model

const todo = require("../models/todo");


// define route handler

exports.getTodo = async (req, res) => {
  try {
    //fetch all todos items from database
    const todos = await Todo.find({});

    //response 
    res.status(200)
    .json({
        success:true,
        data:todos,
        message:"Entire Todo Data is fetched",
    })
  } catch (err) {
    console.error(err);
    res.status(500)
    .json({
        success:false,
        error:err.message,
        message:'Server Error',
    })
  }
};



exports.getTodoById = async (req, res) => {
    try {
      //fetch todos items by id
      const id = req.params.id;
      const todos = await Todo.findById({_id:id });
  
      //data forgiven id not found
     if(!todo){
        return res.status(404).json({
            success:false,
            message:"No Data Found with Given Id"
        })
     }
    
     //data for given id FOUND
     res.status(200).json({
        success:true,
        data:todo,
        message: `Tpdp ${id} data successfully fetched`,
     })
  }catch (err) {
    console.error(err);
    res.status(500)
    .json({
        success:false,
        error:err.message,
        message:'Server Error',
    })
  }
};
  