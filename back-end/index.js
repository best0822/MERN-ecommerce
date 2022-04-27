const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const PORT = 8080;
const app  = express();

const productSchema = new Schema({
    name:  {type:String, required:true}, 
    category: {type:String, required:true},
    price:   {type:Number, required:true},
    rating: {type:Number, required:true},
    color: 'red' | 'green' | 'black',
    size: 'S' | 'M' | 'L',
    details: Object,
    image : {type:String, required:true},
    images : {type:[String], required:true},
  }, {timestamps: true});

const Product = new mongoose.model('Product',productSchema);  

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('Server Connected');
    // Write Code Here
}


// app.get('/createProduct',(req,res)=>{
//     let product = new Product({
//         id: 3,
//         name: 'Apple iPhone 11',
//         price: 799.75,
//         category: 'Mobile',
//         rating: 4,
//         color: 'black',
//         size: '',
//         details: {
//           product: '',
//           warranty: '',
//           merchant: '',
//         },
//         image: 'product-3-square',
//         images: ['product-3', 'product-3-2', 'product-3-3'],
    
//     })
//     product.save().then((success)=>{
//         res.send(success)
//     }).catch(err=>{
//         res.error(err)
//     })

    
// })

app.get('/product',(req,res)=>{
   Product.find({}).then(result=>{
       res.send(result);
   })
});


app.listen(PORT, ()=>{
   console.log('listen on PORT:', PORT)
})