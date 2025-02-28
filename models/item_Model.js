const mongoose=require('mongoose');
const itemSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    restaurant:{
        type:mongoose.Types.ObjectId,
        ref: "restaurant",
    }
});

// module.exports=mongoose.model('item',itemSchema); OR THE ONE BELOW;

itemModel=mongoose.model('item',itemSchema);

module.exports=itemModel;