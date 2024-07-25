const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create a New task

router.post('/', async (req,res)=>{
    const newTask = new Task(req.body);
    try{
        const task = await newTask.save();
        res.status(201).json(task);
    } catch (err){
        res.status(400).json({error : err.message});
    }
});

// Read All Tasks

router.get('/', async (req,res) =>{
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks);

    } catch(err){
        console.log('Error Fetching Tasks:', err);
        res.status(500).json({message: 'Internal Server Error'});
    }
});


// Update a Task

router.put('/:id',async(req,res)=>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(task);
    } catch (err){
        res.status(400).json({error: err.message})
    }
});


// Delete a Task

router.delete('/:id',async(req,res)=>{
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Task Deleted'});
    } catch (err){
        res.status(500).json({error: err.message});
    }
});

module.exports = router;
