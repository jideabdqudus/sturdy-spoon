const express = require("express");
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalControler");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// router.route("/").get(getGoals).post(setGoal);

// router.route("/:id").delete(deleteGoal).put(updateGoal);

router.get("/", protect, getGoals);

router.post("/", protect, setGoal);

router.put("/:id", protect, updateGoal);

router.delete("/:id", protect, deleteGoal);

module.exports = router;
