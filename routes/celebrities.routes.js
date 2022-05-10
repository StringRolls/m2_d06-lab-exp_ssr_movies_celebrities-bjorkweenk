// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model")

const res = require("express/lib/response")

// all your routes here

router
.route("/celebrities")
.get((req, res)=> res.render("/views/celebrities"))
.post((req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create({ name, occupation, catchPhrase })
.then(()=>{
    res.redirect("/celebrities/")
})
.catch((err)=>res.render("/celebrities/new-celebrity"))
});

router.get("/celebrities/create",(req,res,next)=>{
    Celebrities.find()
    .then(elem => res.render("celebrities/celebrities", {elem}))
    .catch(err => console.log("Error finding celebrities: ", err))
    })

module.exports = router;

