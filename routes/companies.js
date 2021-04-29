const db = require('../db');
const express = require('express');
const router = express.Router ();

//Get routes


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


module.exports = router;