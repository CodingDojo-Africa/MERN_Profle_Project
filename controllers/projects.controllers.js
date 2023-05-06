// projects.controllers.js

const { default: mongoose } = require("mongoose");
const { Project } = require("../models/project.models");

// CREATE new project
module.exports.addProject = (req, res,next) => {
  const url=req.protocol+'://'+req.get('host');
  const newProject = new Project(
    {
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      catagorie: req.body.catagorie,
      description: req.body.description,
      enverment: req.body.enverment,
      technologie: req.body.technologie,
      picturePath: req.file ? url + '/' + req.file.filename : null,
      video: req.body.video

    }
  );
  newProject.save()
    .then(project => res.json(project))
    .catch(err => res.status(400).json(err));
};

// READ all projects
module.exports.getAllProjects = (req, res,next) => {
  Project.find()
    .then((projects) => res.json(projects))
    .catch((err) => res.status(400).json(err));
};

// READ one project by ID
module.exports.getOneProject = (req, res) => {
  Project.findById(req.params.id)
    .then((project) => res.json(project))
    .catch((err) => res.status(400).json(err));
};

// UPDATE a project
module.exports.updateProject = (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');
  const updatedProject = {
    title: req.body.title,
    catagorie: req.body.catagorie,
    description: req.body.description,
    enverment: req.body.enverment,
    technologie: req.body.technologie,
    picturePath: req.file ? url + '/' + req.file.filename : req.body.picturePath,
    video: req.body.video
  };
  Project.findByIdAndUpdate(req.params.id, updatedProject, { new: true })
    .then((project) => res.json(project))
    .catch((err) => res.status(400).json(err));
};

// DELETE a project
module.exports.deleteProject = (req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then((project) => res.json(project))
    .catch((err) => res.status(400).json(err));
};
