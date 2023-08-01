import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    imageSrc: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    noReviews: { type: Number, required: true },
    rating: { type: Number, required: true },
    discreption: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    comments:[{ comment: {type : String }, writerName: {type : String} , user : {type : mongoose.Schema.Types.ObjectId, ref : 'User'}}],
    reviews:[
        {
            writerName:String,
            rating  : {type:Number , required : true},
            message : {type:String},
            user : {type : mongoose.Schema.Types.ObjectId, ref : 'User' , required:true}
        }
    ]
} , 
{
    timestamps : true
});

const Product = mongoose.model('Product' , productSchema );
export default Product;
