const TodoModel = require("../models/todoModel");

module.exports.getTodos = async (req, res)=>{
    const todos =  await TodoModel.find();
    res.send(todos);
}

module.exports.saveTodo = async (req,res)=>{
  const {todo} = req.body;
  TodoModel.create(
    {todo}
   ).then((data)=>{
     console.log("saved Successfully");
     res.status(201).send(data);
   }).catch((err)=>{
       console.log(err);
       res.send({error:err , msg :"something went wrong!"});
   })
}

module.exports.updateTodo = async (req,res)=>{
    const {id} = req.params;
    const {todo} = req.body;
    TodoModel.findByIdAndUpdate(
        id , {todo}
    ).then(()=>{
        res.send("updated successfully");
    }).catch((err)=>{
        console.log(err);
        res.send({error:err , msg:"something went wrong!"});
    })
}

module.exports.deleteTodo = async (req,res)=>{
  const {id} = req.params;
  TodoModel.findByIdAndDelete(
      id
    ).then(()=>{
        res.send("deleted successfully");
    }).catch((err )=>{
        console.log(err);
        res.send({error:err , msg : "something went wrong!"});
    });  
}