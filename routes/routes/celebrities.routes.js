// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const app = express()

const Celebrity = require("../models/Celebrity.model")

const res = require("express/lib/response")

// all your routes here

router
.route("celebrities/create")
.post((req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create({ name, occupation, catchPhrase })
    console.log("is this stored in the data")
.get((req, res)=> res.render("/celebrities/create"))
.then(()=>{
    res.redirect("celebrities")
})
.catch((err)=>res.render("/celebrities/new-celebrity"))
});

module.exports = router;

