const knex = require("./knex");

function AdminGet() {
  return knex("admin").select("*");
}

function UserGet() {
  return knex("User").select("*");
}

function UserCount() {
  return knex("User").count("ID as usercount");
}

function UserGetByID(id) {
  return knex("User").select("*").where("ID", id);
}

function UserUpdate(id, user) {
  return knex("User").where("ID", id).update(user);
}

function UserInsert(user) {
  return knex("User").insert(user);
}

function UserAchievementGet() {
  return knex("userachievement").select("*");
}

function UserAchievementGetById(id) {
  return knex("userachievement").select("*").where("userID", id);
}

function UserAchievementGetByUserIDAndArcID(userID, arcID) {
  return knex("userachievement")
    .select("*")
    .where({ userID: userID, arcID: arcID });
}

function UserAchievementUpdate(id, info) {
  return knex("userachievement").where("userID", id).update(info);
}

function UserAchievementUpdateLevel(userID, arcID, info) {
  return knex("userachievement")
    .where({ userID: userID, arcID: arcID })
    .update(info);
}

function UserAchievementInsert(info) {
  return knex("userachievement").insert(info);
}

function ItemGet() {
  return knex("item").select("*").orderBy("itemID");
}

function ItemGetByName(name) {
  return knex("item").select("*").where("itemname", name);
}

function ItemGetByUserId(userID, isOwned) {
  if (isOwned === "true") {
    return knex("item")
      .select("*")
      .whereIn("itemID", function () {
        this.select("itemID").from("inventory").where("userID", userID);
      })
      .orderBy("itemID");
  } else {
    return knex("item")
      .select("*")
      .whereNotIn("itemID", function () {
        this.select("itemID").from("inventory").where("userID", userID);
      })
      .orderBy("itemID");
  }
}

function ItemUpdate(id, info) {
  return knex("item").where(itemID, id).update(info);
}

function ItemInsert(info) {
  return knex("item").insert(info);
}

function InventoryGet() {
  return knex("inventory").select("*");
}

function InventoryGetById(id) {
  return knex("inventory").select("*").where("userID", id);
}

function InventoryUpdate(id, info) {
  return knex("inventory").where("userID", id).update(info);
}

function InventoryInsert(info) {
  return knex("inventory").insert(info);
}

function WearItemGet() {
  return knex("wearitem").select("*");
}

function WearItemGetById(id) {
  return knex("wearitem").select("*").where("userID", id);
}

function WearItemUpdate(id, info) {
  return knex("wearitem").where("userID", id).update(info);
}

function WearItemInsert(info) {
  return knex("wearitem").insert(info);
}

function QuestStatGet() {
  return knex("queststat").select("*");
}

function QuestStatGetById(id) {
  return knex("queststat").select("*").where("userID", id);
}

function QuestStatUpdate(id, info) {
  return knex("queststat").where(ID, id).update(info);
}

function QuestStatInsert(info) {
  return knex("queststat").insert(info);
}

function QuestGet() {
  return knex("quest").select("*");
}

function QuestGetById(id) {
  return knex("quest").select("*").where("questID", id);
}

function QuestGetByType(type) {
  return knex("quest").select("questID").where("type", type);
}

function QuestUpdate(id, info) {
  return knex("quest").where("questID", id).update(info);
}

function QuestInsert(info) {
  return knex("quest").insert(info);
}
function QuestDelete(questID) {
  return knex("quest").where({ questID: questID }).del();
}

function QuestAcceptUpdate(questID) {
  return knex("quest").where({ questID: questID }).increment({ accept: 1 });
}

function QuestCompleteUpdate(questID) {
  return knex("quest").where({ questID: questID }).increment({ complete: 1 });
}
function ExplorationGet() {
  return knex("exploration").select("*");
}

function ExplorationGetById(id) {
  return knex("exploration").select("*").where("userID", id);
}

function ExplorationUpdate(id, info) {
  return knex("exploration").where("userID", id).update(info);
}

function ExplorationInsert(info) {
  return knex("exploration").insert(info);
}

function DungeonStatGet() {
  return knex("dungeonstat").select("*");
}

function DungeonStatGetById(id) {
  return knex("dungeonstat").select("*").where("userID", id);
}

function DungeonStatGetProgress(userID, dungeonID, difficulty) {
  return knex("dungeonstat")
    .select("*")
    .where({ userID: userID, dungeonID: dungeonID, difficulty: difficulty });
}

function DungeonStatGetSumTotal(userID, dungeonID) {
  return knex("dungeonstat")
    .sum("total as sum")
    .where({ userID: userID, dungeonID: dungeonID });
}

function DungeonStatUpdate(userID, dungeonID, difficulty, isComplete) {
  if (isComplete === "true") {
    return knex("dungeonstat")
      .where({ userID: userID, dungeonID: dungeonID, difficulty: difficulty })
      .increment({ daily: 1, weekly: 1, total: 1 });
  } else {
    return knex("dungeonstat")
      .where({ userID: userID, dungeonID: dungeonID, difficulty: difficulty })
      .increment({ fail: 1 });
  }
}

function DungeonStatInsert(info) {
  return knex("dungeonstat").insert(info);
}

function DungeonStatReset(info) {
  return knex("dungeonstat").update(info);
}

function AchievementGet() {
  return knex("achievement").select("*");
}

function AchievementGetById(id) {
  return knex("achievement").select("*").where("arcID", id);
}

function AchievementUpdate(id, info) {
  return knex("achievement").where("arcID", id).update(info);
}

function AchievementInsert(info) {
  return knex("achievement").insert(info);
}

module.exports = {
  AdminGet,
  UserGet,
  UserCount,
  UserInsert,
  UserGetByID,
  UserUpdate,
  UserAchievementGet,
  UserAchievementGetById,
  UserAchievementGetByUserIDAndArcID,
  UserAchievementInsert,
  UserAchievementUpdate,
  UserAchievementUpdateLevel,
  ItemGet,
  ItemGetByName,
  ItemGetByUserId,
  ItemInsert,
  ItemUpdate,
  InventoryGet,
  InventoryGetById,
  InventoryInsert,
  InventoryUpdate,
  WearItemGet,
  WearItemGetById,
  WearItemInsert,
  WearItemUpdate,
  QuestStatGet,
  QuestStatGetById,
  QuestStatInsert,
  QuestStatUpdate,
  QuestGet,
  QuestGetByType,
  QuestGetById,
  QuestInsert,
  QuestUpdate,
  QuestDelete,
  QuestAcceptUpdate,
  QuestCompleteUpdate,
  ExplorationGet,
  ExplorationGetById,
  ExplorationInsert,
  ExplorationUpdate,
  DungeonStatGet,
  DungeonStatGetById,
  DungeonStatGetProgress,
  DungeonStatGetSumTotal,
  DungeonStatInsert,
  DungeonStatUpdate,
  DungeonStatReset,
  AchievementGet,
  AchievementGetById,
  AchievementInsert,
  AchievementUpdate,
};
