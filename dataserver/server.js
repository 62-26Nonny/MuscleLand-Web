const express       = require('express');
const app           = express();
const cors          = require('cors');
const bodyParser    = require('body-parser');
const db            = require('./data/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
//app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ successs: true});
});

app.get("/user", async (req, res) =>{
    res.json(await db.UserGet());
})

app.get("/user/:id", async (req, res) =>{
    res.json(await db.UserGetByID(req.params.id));
})

app.post("/user/:id", async (req, res) =>{
    await db.UserUpdate(req.params.id, req.body);
    res.json({ successs: true });
})

app.post("/user", async (req, res) =>{
    const results = await db.UserInsert(req.body);
    res.json({ id: results[0] });
})

app.get("/userachievement", async (req, res) =>{
    res.json( await db.UserAchievementGet(req.params.id) );
})

app.get("/userachievement/:id", async (req, res) =>{
    res.json( await db.UserAchievementGetById(req.params.id) );
})

app.get("/userachievement/:userID/:arcID", async (req, res) =>{
    res.json( await db.UserAchievementGetByUserIDAndArcID(req.params.userID, req.params.arcID) );
})

app.post("/userachievement/:id", async (req, res) =>{
    await db.UserAchievementUpdate(req.params.id, req.body);
    res.json({ successs: true });
})

app.post("/userachievement/:userID/:arcID", async (req, res) =>{
    await db.UserAchievementUpdateLevel(req.params.userID, req.params.arcID, req.body);
    res.json({ successs: true });
})

app.post("/userachievement", async (req, res) =>{
    const results = await db.UserAchievementInsert(req.body);
    res.json({ id: results[0] });
})

app.get("/item", async (req, res) =>{
    res.json( await db.ItemGet() );
})

app.get("/item/:name", async (req, res) =>{
    res.json( await db.ItemGetByName(req.params.name) );
})

app.get("/item/user/:userID/:isOwned", async (req, res) =>{
    res.json( await db.ItemGetByUserId(req.params.userID, req.params.isOwned) );
})

app.post("/item/:id", async (req, res) =>{
    await db.ItemUpdate(req.params.id, req.body);
    res.json({ successs: true });
})

app.post("/item", async (req, res) =>{
    const results = await db.ItemInsert(req.body);
    res.json({ id: results[0] });
})

app.get("/inventory", async (req, res) =>{
    res.json(await db.InventoryGet());
})

app.get("/inventory/:id", async (req, res) =>{
    res.json( await db.InventoryGetById(req.params.id) );
})

app.post("/inventory/:id", async (req, res) =>{
    await db.InventoryUpdate(req.params.id, req.body);
    res.json({ successs: true });
})

app.post("/inventory", async (req, res) =>{
    const results = await db.InventoryInsert(req.body);
    res.json({ id: results[0] });
})

app.get("/wearitem", async (req, res) =>{
    res.json( await db.WearItemGet() );
})

app.get("/wearitem/:id", async (req, res) =>{
    res.json( await db.WearItemGetById(req.params.id) );
})

app.post("/wearitem/:id", async (req, res) =>{
    await db.WearItemUpdate(req.params.id, req.body);
    res.json({ successs: true });
})

app.post("/wearitem", async (req, res) =>{
    const results = await db.WearItemInsert(req.body);
    res.json({ id: results[0] });
})

app.get("/queststat", async (req, res) =>{
    res.json(await db.QuestStatGet());
})

app.get("/queststat/:id", async (req, res) =>{
    res.json(await db.QuestStatGetById(req.params.id));
})

app.post("/queststat/:id", async (req, res) =>{
    await db.QuestStatUpdate(req.params.id, req.body);
    res.json({ successs: true });
})

app.post("/queststat", async (req, res) =>{
    const results = await db.QuestStatInsert(req.body);
    res.json({ id: results[0] });
})

app.get("/quest", async (req, res) =>{
    res.json( await db.QuestGet() );
})

app.get("/quest/type/:type", async (req, res) =>{
    res.json( await db.QuestGetByType(req.params.type) );
})

app.post("/quest/accept/:id", async (req, res) =>{
    const results = await db.QuestAcceptUpdate(req.params.id);
    res.json({ id: results[0] });   
})

app.get("/quest/:id", async (req, res) =>{
    res.json( await db.QuestGetById(req.params.id) );
})

app.post("/quest/:id", async (req, res) =>{
    await db.QuestUpdate(req.params.id, req.body);
    res.json({ successs: true });
})

app.delete("/quest/:id", async (req, res) =>{
    await db.QuestDelete(req.params.id);
    res.json({ successs: true });
})

app.post("/quest", async (req, res) =>{
    const results = await db.QuestInsert(req.body);
    res.json({ id: results[0] });
})

app.get("/exploration", async (req, res) =>{
    res.json(await db.ExplorationGet());
})

app.get("/exploration/:id", async (req, res) =>{
    res.json(await db.ExplorationGetById(req.params.id));
})

app.post("/exploration/:id", async (req, res) =>{
    await db.ExplorationUpdate(req.params.id, req.body);
    res.json({ successs: true });
})

app.post("/exploration", async (req, res) =>{
    const results = await db.ExplorationInsert(req.body);
    res.json({ id: results[0] });
})

app.get("/dungeonstat", async (req, res) =>{
    res.json( await db.DungeonStatGet() );
})

app.get("/dungeonstat/:id", async (req, res) =>{
    res.json( await db.DungeonStatGetById(req.params.id) );
})

app.get("/dungeonstat/sum/:userID/:dungeonID", async (req, res) =>{
    res.json( await db.DungeonStatGetSumTotal(req.params.userID, req.params.dungeonID) );
})

app.get("/dungeonstat/:userID/:dungeonID/:difficulty", async (req, res) =>{
    res.json( await db.DungeonStatGetProgress(req.params.userID, req.params.dungeonID, req.params.difficulty) );
})

app.post("/dungeonstat/:userID/:dungeonID/:difficulty", async (req, res) =>{
    await db.DungeonStatUpdate(req.params.userID, req.params.dungeonID, req.params.difficulty, req.body.isComplete);
    res.json({ successs: true });
})

app.post("/dungeonstat", async (req, res) =>{
    const results = await db.DungeonStatInsert(req.body);
    res.json({ id: results[0] });
})

app.post("/dungeonstat/reset", async (req, res) =>{
    await db.DungeonStatReset(req.body);
    res.json({ successs: true });
})

app.get("/achievement", async (req, res) =>{
    res.json(await db.AchievementGet());
})

app.get("/achievement/:id", async (req, res) =>{
    res.json(await db.AchievementGetById(req.params.id));
})

app.post("/achievement/:id", async (req, res) =>{
    await db.AchievementUpdate(req.params.id, req.body);
    res.json({ successs: true });
})

app.post("/achievement", async (req, res) =>{
    const results = await db.AchievementInsert(req.body);
    res.json({ id: results[0] });
})

app.listen(process.env.PORT || 3200, function(req,res){
    console.log("The server has been connect by port : 3200");
});


