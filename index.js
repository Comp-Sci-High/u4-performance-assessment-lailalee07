const express = require ('express')
const app = express ()


const sneakerData =[
    {
    product: "sneakers",
    items: [
        {
        "username": "sneakerhead23",
        "sneakerName": "Air Jordan 1 Retro High OG 'Chicago'",
        "year": 1985,
        "forSale": false,
        "marketPrice": 25000,
        "condition": "Deadstock",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yGI752cuycuW4VXqjGdQYvWm1NK0bdhE_Q&s"
    },
    {
        
        "username": "rarejcollector",
        "sneakerName": "Air Jordan 4 'Eminem Encore'",
        "year": 2005,
        "forSale": true,
        "marketPrice": 75000,
        "condition": "VNDS",
        "imageURL": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstockx.com%2Fair-jordan-4-retro-eminem-encore-2017&psig=AOvVaw1osu3n5LAQPGl6OIOkmXbG&ust=1738800828263000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjXrYCgq4sDFQAAAAAdAAAAABAE"
        },
        {
        "username": "heatseeker",
        "sneakerName": "Air Jordan 11 'Space Jam",
        "year": 1996,
        "forSale": true,
        "marketPrice": 500,
        "condition": "Used - Good",
        "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlhu7vA8QhmBgx3LBvo1kgZMXx8Ib0pgfyrg&s",
        },
        {
        "username": "OGsneaks",
        "sneakerName": "Air Jordan 5 'Tokyo T23'",
        "year": 2011,
        "forSale": false,
        "marketPrice": 10000,
        "condition": "Deadstock",
        "imageURL": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fde.pinterest.com%2Fpin%2Fair-jordan-5-tokyo-23-varsity-maize-wolf-greyblack-454783701-for-sale-moehfashion-in-2024--844636105143544695%2F&psig=AOvVaw0bvCkaBaJwxqtSyejnUTMQ&ust=1738801020776000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODR8uugq4sDFQAAAAAdAAAAABAE",
        },
        {
        "username": "hypedfeet",
        "sneakerName": "Air Jordan 1 High Travis Scott",
        "year": 2019,
        "forSale": true,
        "marketPrice": 1500,
        "condition": "VNDS",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihwI0MfZoKhENXNYo97lc5IPW1GffX61ZAA&s"
        }
    ]
}

]
app.set("view engine","ejs")
app.use((req,res,next)=>{
    console.log(req.method +" " +req.path)
    next()
})
app.use(express.static(__dirname +"/public"))
app. get ("/", (reg, res) => {
    res.sendFile (__dirname + "/public/index.html")
})
app. get ("/all", (req, res) => {
 res.render ("product.ejs", sneakerData [0])
 })
 app. get ("/overview", (req, res) => {
    res.render ("overview.ejs", sneakerData [0])
    })
 app. listen (3000,()=> {
     console.log("Server running")
})