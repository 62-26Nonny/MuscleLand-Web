// app.get("/achievement", async (req, res) =>{
//     const results = await db.achievementget();
//     res.json({ results });
// })

// app.get("/achievement/:id", async (req, res) =>{
//     const results = await db.achievementgetbyid(req.params.id);
//     res.json({ results });
// })

// app.patch("/achievement/:id", async (req, res) =>{
//     const results = await db.achievementupdate(req.params.id, req.body);
//     res.json({ successs: true });
// })

// app.post("/achievement", async (req, res) =>{
//     const results = await db.achievementinsert(req.body);
//     res.json({ id: results[0] });
// })

// function achievementget() {
//     return knex("achievement").select("*");
// };

// function achievementgetbyid(id) {
//     return knex("achievement").select("*").where("userID", id);
// };

// function achievementupdate(id, info) {
//     return knex("achievement").where("id", id).update(info);
// };

// function achievementinsert(info) {
//     return knex("achievement").insert(info);
// };

// achievementget,
// achievementgetbyid,
// achievementinsert,
// achievementupdate,