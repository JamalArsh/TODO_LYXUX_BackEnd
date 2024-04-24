const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { title, description, isCompleted } = req.body;

  ToDoModel.create({ title, description, isCompleted }).then((data) => {
    console.log("Added succesfully");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, title, description, isCompleted } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { title, description, isCompleted })
    .then(() => res.send("Updated Successfully"))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  console.log("====================================");
  console.log(req.body);
  console.log("====================================");

  const { _id } = req.body;

  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully"))
    .catch((err) => console.log(err));
};
