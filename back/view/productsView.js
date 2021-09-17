const productsController = require("../controller/productsController")


module.exports = async(app) => {
    app.get("/products", async (req,res)=>{
        // console.log(req.body);
        // res.send("Products");
        // console.log(await productsController.listProducts())
        res.send(await productsController.listProducts())
    })

    app.get("/products/:id", async(req,res) => {
        let productId = req.params.id
        res.send(await productsController.findProduct(productId))
    })
}

