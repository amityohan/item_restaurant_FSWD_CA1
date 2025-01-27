const mongoose=require('mongoose');
const restaurantSchema=new mongoose.Schema({
    Name:{
        type:String,
    },
    City:{
        type:String,
    },
    items:[mongoose.Types.ObjectId],
})

mongoose.exports=mongoose.model('restaurant', restaurantSchema);