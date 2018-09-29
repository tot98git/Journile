const express = require('express');
const router = express.Router();
const todo = require("./todomodel")
router.get("/",(req,res)=>{
    todo.find({},(err,docs)=>{
        if(err)return err;
        res.json(docs)
    })
})
router.post("/todos/:id/mark_as_done",(req,res)=>{
    let {id}=req.params
    todo.findByIdAndUpdate({id},{$set:{'done':true}},(err,updated)=>{
        if(err)return err;
        if(updated)res.json(1) //THE REQUEST HAS BEEN DONE
    })
})
router.post("/todos/:id/updated",(req,res)=>{
    let{id}=req.params;
    let{name,date,done}=req.body;
    todo.findByIdAndUpdate({id},{$set:{'name':name,'date':date,'done':done}},(err,updated)=>{
        if(err)return err;
        if(updated)res.json(1) //THE REQUEST HAS BEEN DONE
    })
})
router.delete("/todos/:id",(req,res)=>{
    todo.findByIdAndRemove({id},(err,deleted)=>{
        if(err)return err;
        if(deleted)res.json(1) // the request has been executed
    })
})
module.exports=router;