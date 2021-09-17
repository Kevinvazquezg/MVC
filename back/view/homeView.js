module.exports = async(app) => {
    app.get("/", async (req,res)=>{
        console.log(req.body);
        res.send("Home");
    })
}