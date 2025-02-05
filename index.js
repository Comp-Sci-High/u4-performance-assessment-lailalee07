const express = require('express')
const app = express()


const sneakerData = [
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
                "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yGI752cuycuW4VXqjGdQYvWm1NK0bdhE_Q&s",
                "path": "/item/0"
            },
            {

                "username": "rarejcollector",
                "sneakerName": "Air Jordan 4 'Eminem Encore'",
                "year": 2005,
                "forSale": true,
                "marketPrice": 75000,
                "condition": "VNDS",
                "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHqrzrgp9Co3W8CGn-zTFn_IgotseUzFIbg&s",
                "path": "/item/1"
            },
            {
                "username": "heatseeker",
                "sneakerName": "Air Jordan 11 'Space Jam",
                "year": 1996,
                "forSale": true,
                "marketPrice": 500,
                "condition": "Used - Good",
                "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlhu7vA8QhmBgx3LBvo1kgZMXx8Ib0pgfyrg&s",
                "path": "/item/2"
            },
            {
                "username": "OGsneaks",
                "sneakerName": "Air Jordan 5 'Tokyo T23'",
                "year": 2011,
                "forSale": false,
                "marketPrice": 10000,
                "condition": "Deadstock",
                "imageURL": "https://image.made-in-china.com/2f0j00YbEcLeoRsIkD/Nike-Air-Jordan-5-Retro-Tokyo-Branded-Basketball-Shoes.jpg",
                "path": "/item/3"
            },
            {
                "username": "hypedfeet",
                "sneakerName": "Air Jordan 1 High Travis Scott",
                "year": 2019,
                "forSale": true,
                "marketPrice": 1500,
                "condition": "VNDS",
                "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihwI0MfZoKhENXNYo97lc5IPW1GffX61ZAA&s",
                "path": "/item/4"
            }
        ]
    }

]
app.set("view engine", "ejs")
app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
})
app.use(express.static(__dirname + "/public"))
app.get("/", (reg, res) => {
    res.sendFile(__dirname + "/public/index.html")
})
app.get("/all", (req, res) => {
    res.render("overview.ejs", sneakerData[0])
})
app.get("/item/:index", (req, res) => {
    const i = req.params.index
    res.render('detail.ejs', sneakerData[0].items[i]);
});
app.listen(3000, () => {
    console.log("Server running")
})