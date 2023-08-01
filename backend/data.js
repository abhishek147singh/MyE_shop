import bcrypt from "bcryptjs";

export default { 
    Products:[
     {
        name:"The Nice shirt",
        imageSrc:"/images/p1.png",
        noReviews:0,
        rating:0,
        brand:"Nike",
        category:"shirt",
        discreption:"This is a nice product ever. you must buy it.",
        price:250,
        countInStock:0,
        comments:[],
        reviews:[]
    },
    {
        name:"The per shirt",
        imageSrc:"/images/p2.png",
        noReviews:0,
        brand:"Nike",
        category:"shirt",
        rating:0,
        discreption:"This is a nice product ever. you must buy it.",
        price:200,
        countInStock:8,
        comments:[],
        reviews:[]
    },
    {
        name:"Nice cotton shirt",
        imageSrc:"/images/p3.png",
        noReviews:0,
        brand:"Nike",
        category:"shirt",
        rating:0,
        discreption:"This is a nice product ever. you must buy it.",
        price:300,
        countInStock:4,
        comments:[],
        reviews:[]
    },
    {
        name:"The good shirt",
        imageSrc:"/images/p4.png",
        noReviews:0,
        brand:"addidas",
        category:"shirt",
        rating:0,
        discreption:"This is a nice product ever. you must buy it.",
        price:265,
        countInStock:6,
        comments:[],
        reviews:[]
    },
    {
        name:"Sallow shirt",
        imageSrc:"/images/p5.png",
        noReviews:0,
        brand:"addidas",
        category:"shirt",
        rating:0,
        discreption:"This is a nice product ever. you must buy it.",
        price:100,
        countInStock:5,
        comments:[],
        reviews:[]
    }
],
Users:[
    {name : 'Abhishek' , email: 'abhi@example.com' , password : bcrypt.hashSync('123456') , isAdmin:true },
    {name : 'shidu' , email: 'shidu@example.com' , password : bcrypt.hashSync('123456') , isAdmin:false },
]
}