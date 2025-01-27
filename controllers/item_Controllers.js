const itemModel=require('../models/item_Model');
const mongoose=require('mongoose');

const itemController=async(req,res)=>{
    try{
       const itemData=req.body;
       
       await itemModel.create(itemData);           //wait for the task to be finished.
       res.status(201).send({message:"Item created successfully"});

    }catch(er){
        res.status(500).send({message:"Iternal server error", error:er.message})
    }
};

const getItemController=async(res,req)=>{
    try{
        const {id}=req.params;
        const itemData= itemModel.findOne({_id:id});
        if(!itemData){
            return res.status(404).send({message:"Item not found"});
        }
        return res.status(200).send({message:"item fetched successfully", data:itemData});

    }catch(er){
        return res.status(500).send({message:"Fetching data is unsuccessful", error:er.message})
    }
}

const updateItemController=async(res,req)=>{
    try{
        const {id}=req.params;
        const itemData=req.body;
        
        //checking if the id exists or not
        const itemInfo=itemModel.findOne({_id:id});
        if(!itemInfo){
            return res.status(404).send({message:"item doesnt exist"})
        }
        
        //if item exists

        const findAndUpdate= await itemModel.findByIdAndUpdate({_id:id},
            itemData,
            {new:true},
        );

        return res.status(201).send({message: "item updateed successfully", data:findAndUpdate})

    }catch(er){
        return res.status(500).send({message:"Iternal server error", error:er.message})
    }
}

const deleteItemController= async(req,res)=>{
    try{
        const {id}=req.params;
        //checking if item exists
        const itemInfo=itemModel.findOne({_id:id});
        if(!itemInfo){
            return res.status(404).send({message:"item doesnt exist"})
        }

        //if item exists 
        const deletedData=itemModel.findByIdAndDelete({_id:id});

        return res.status(200).send({message:"Item deleted successfully", data:deletedData});
        
    }catch(er){
        return res.status(500).send({message:"Iternale server error",message:er.message})
    }
}



module.exports={itemController, getItemController,updateItemController,deleteItemController}
