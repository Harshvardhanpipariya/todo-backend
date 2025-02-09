//import the model

const Todo = require("../models/todo");



// define route handler

exports.updateTodo = async (req, res) => {
    try {
      console.log(req.params);
      console.log(req.body);
     const {id} = req.params;
     const{title,description} = req.body;
     const todo = await Todo.findByIdAndUpdate({_id:id},
      {title,description,updatedAt:Date.now()},
     )

     res.status(200)
     .json({
         success:true,
        data:todo,
         message:'Updated SUccessfully',
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
  