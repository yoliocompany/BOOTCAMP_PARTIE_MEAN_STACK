const Project = require('../models/project');
const { createBoard } = require('./board');


const create = async (req, res, fileNames)=>{

    try {
        
        let data = req.body;
        let project = new Project(data);
        project.files = fileNames;
        project.date = new Date();
        
        project.team = JSON.parse(data.team);

        let result = await project.save();

        createBoard(result._id);

        res.send(result);

    } catch (error) {
        res.send(error);
    }

}

const list = async (req, res)=>{

    try {
        
        let projects = await Project.find()
            .populate({
                path: 'client',
                model: 'Client'
            })
            .populate({
                path:'team',
                model: 'User'
            })
            .exec()

        res.send(projects);  


    } catch (error) {
        res.send(error)
    }

}

const preview = async (req, res)=>{

    try {
        
        let id = req.params.id;
        let project = await Project.findById({_id: id})
            .populate({
                path: 'client',
                model: 'Client'
            })
            .populate({
                path:'team',
                model: 'User'
            })
            .exec()
        res.send(project);

    } catch (error) {
        res.send(error)
    }

}

const byId = async (req, res)=>{
    try {
        
        let id = req.params.id;
        let project = await Project.findById({_id: id})
        res.send(project);

    } catch (error) {
        res.send(error)
    }
}

const deleteProject = async (req, res)=>{
    try {
        let id = req.params.id;
        let deletedProject = await Project.findByIdAndDelete({_id: id});
        res.send(deletedProject);
    } catch (error) {
        res.send(error)
    }
}

const update = async (req, res, fileNames)=>{
    try {
        let data = req.body;
        let id = req.params.id;

        if(fileNames.length > 0){
            data.files = fileNames;
        }
     
        data.team = JSON.parse(data.team);

        let updatedProject = await Project.findByIdAndUpdate({ _id: id }, data);

        res.send(updatedProject);

    } catch (error) {
        res.send(error)
    }
}


module.exports = { create, list, byId, preview, deleteProject, update };