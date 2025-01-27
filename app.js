const express=require('express');
const app=express();
const PORT=8080;
const mongoose=require('mongoose')

const {itemController, getItemController, updateItemController, deleteItemController}=require('./controllers/item_Controllers.js');
const { GetResController, CreateResController, UpdateResController, DeleteResController } = require('./controllers/restaurant_controller.js');


app.use(express.json());

mongoose.connect("mongodb+srv://amityohan20:PfwrwRdOI7H1BZSx@cluster0.jmbrf.mongodb.net/E-comm-follow-along")
    .then((data)=>{
        console.log("Connected to database");
    })
    .catch((er)=>{
        console.log("Error connecting due to: ",er.message);
    });


// ITEM ROUTES

app.get('./get-item/:id', getItemController);
app.post('./posting-items',itemController);
app.patch('./update-item/:id', updateItemController);
app.delete('./delete-item/:id', deleteItemController);

// RESTAUTRANT ROUTES
app.get('./get-res/:id', GetResController);
app.post('./posting-res/:id',CreateResController);
app.patch('./update-res/:id',UpdateResController);
app.delete('./delete-res/:id',DeleteResController);

app.listen(PORT,()=>{
    console.log(`App is running on http://localhost:${PORT}`)
})


