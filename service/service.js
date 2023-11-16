import Emp from "../Model/empModel.js"

const createEmp=async(req,res)=>{
    const { ename,email,emobile}=req.body
    if(!ename|| !email || !emobile)
    res.status(404).json({message:"Missing FIELDS"})
    else
    {
        try{
            const response=await Emp.create({ename,email,emobile})
            if(response)
            res.status(201).json({message:"RECORD CREATED SUCCESFULLY"})
            else
            res.status(201).json({message:"UNABLE TO CREATE RECORD"})
        }catch(err)
        {
            res.json(err.message)
        }
    }
}

const getEmps=async(req,res)=>{
    try{
        const e=await Emp.find()
        if(e.length!=0)
        res.status(200).json(e)
        else
        res.status(404).json({message:"NO RECORDS FOUND"})
    }catch(err){
        res.json(err.message)
    }
}

const getEmp=async(req,res)=>{
    try{
        const es=await Emp.findById(req.params.id)
        if(es)
        res.status(200).json(es)
        else 
        res.status(404).json("No RECORDS")
    }catch(err)
    {
        res.json(err.message)
    }
}

const delEmp=async(req,res)=>{
    try{
        const es=await Emp.findByIdAndRemove(req.params.id)
        if(es)
        res.status(200).json({message:"DELETED"})
        else 
        res.status(404).json("No RECORDS")
    }catch(err)
    {
        res.json(err.message)
    }
}

const upEmp=async(req,res)=>{
    try{
        const es=await Emp.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(es)
        res.status(200).json({message:"RECORD UPDATED SUCCESSFULLY"})
        else 
        res.status(404).json("UNABLE TO UPDATE....")
    }catch(err)
    {
        res.json(err.message)
    }
}

export { createEmp,getEmps,getEmp,delEmp,upEmp }