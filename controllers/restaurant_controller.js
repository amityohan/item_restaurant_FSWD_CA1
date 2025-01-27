const resModel=require('../models/restaurant_Model');
const mongoose=require('mongoose');

const CreateResController=async(req,res)=>{
    try{
        const resData=req.body;

        await resModel.create(resData);
        res.status(201).send({message:"Restaurant created successfully"}); 

    }catch(er){
        return res.status(500).send({message:"Internal server error"})
    }
}

const GetResController=async(req,res)=>{
    try{
        const {id}=req.params;
        const resData=resModel.findOne({_id:id});
        if(!resData){
            return res.status(404).send({message:"Restaurant not found"});
        }

        return res.status(201).send({message:"Restaurant found", data:resData});

    }catch(er){
        return res.status(400).send({message:"Internal server error"});
    }
}

const UpdateResController=async(req,res)=>{
    try{
        const {id}= req.params;
        const resInfo=resModel.findOne({_id:id});
        if (!resInfo){
            return res.status(404).send({message:"Restaurant not found"});
        }

        const resData=req.body;

        const findAndUpdate=await resModel.findByIdAndUpdate(({_id:id})
                                        ,resData
                                        ,{new:true});

        return res.status(200).send({message:"Restaurant Update Successfully"})

    }catch(er){
        return res.status(500).send({message:"Internal server error"});
    }
};

const DeleteResController=async(req,res)=>{
    try{
        const{id}=req.params;
        const resData=resModel.findOne({_id:id});
        if(!resData){
            return res.status(404).send({message:"Restaurant not found"})
        }

        const deleteData=resModel.findByIdAndDelete({_id:id});
        return res.status(201).send({message:"Restaurant deleted Successfully", data:deleteData});

    }catch(er){
        return res.status(500).send({message:"Internal Server Error."})
    }
}


module.exports={CreateResController, GetResController,UpdateResController,DeleteResController};