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
        "imageURL": "https://example.com/aj1-chicago.jpg"
        },
        {
        "username": "rarejcollector",
        "sneakerName": "Air Jordan 4 'Eminem Encore'",
        "year": 2005,
        "forSale": true,
        "marketPrice": 75000,
        "condition": "VNDS",
        "imageURL": "https://example.com/aj4-eminem.jpg"
        },
        {
        "username": "heatseeker",
        "sneakerName": "Air Jordan 11 'Space Jam'",
        "year": 1996,
        "forSale": true,
        "marketPrice": 500,
        "condition": "Used - Good",
        "imageURL": "https://example.com/aj11-spacejam.jpg"
        },
        {
        "username": "OGsneaks",
        "sneakerName": "Air Jordan 5 'Tokyo T23'",
        "year": 2011,
        "forSale": false,
        "marketPrice": 10000,
        "condition": "Deadstock",
        "imageURL": "https://example.com/aj5-tokyo.jpg"
        },
        {
        "username": "hypedfeet",
        "sneakerName": "Air Jordan 1 High Travis Scott",
        "year": 2019,
        "forSale": true,
        "marketPrice": 1500,
        "condition": "VNDS",
        "imageURL": "https://example.com/aj1-travis.jpg"
        }
    ]
}
]
app.set("view engine","ejs")
app.use((req,res,next)=>{
    console.log(req.method +" " +req.path)
})
app.use(express.static(__dirname +"/public"))
app. get ("/", (reg, res) => {
    res. sendFile (_dirname + "/public/index.html")
})
app. get ("/sneakers", (req, res) => {
 res.render ("product.ejs", inventory[0])
 })