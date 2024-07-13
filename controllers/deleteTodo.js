//import the model

const Todo = require("../models/todo");



// define route handler

exports.deleteTodo = async (req, res) => {
    try {
     const {id} = req.params;
     const todo = await Todo.findByIdAndDelete(id)
     res.status(200)
     .json({
         success:true,
         data:"Todo DELETED",
         message:'Deleted Successfully',
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
  