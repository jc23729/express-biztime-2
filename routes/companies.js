const express = require("express");
const slugify = require("slugify");
const ExpressError = require("../expressError");
const db = require("../db");

let router = new express.Router();

//ROUTES 


//GET /companies


// Returns list of companies, like {companies: [{code, name}, ...]}
router.get("/", async function (req, res, next) {
  try {
    const result = await db.query(
      `SELECT code, name 
           FROM companies 
           ORDER BY name`
    );

    return res.json({ companies: result.rows });
  } catch (err) {
    return next(err);
  }
});



module.exports = router;




// router.get('/', async (req, res, next) => {
//     try {
//         const results = await db.query(
//             `SELECT * FROM companies`);
//         return res.json(results.rows);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ error: "internal server error" });
//     }
// })