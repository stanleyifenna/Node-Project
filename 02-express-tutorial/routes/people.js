const express = require("express");
const router = express.Router();
const {
  getPeople,
  deletePerson,
  createPerson,
  updatePerson,
} = require("../controllers/people");

// router.get("/", getPeople);
// router.post("/", createPerson);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

// OR

router.route("/").get(getPeople).post(createPerson)
router.route("/:id").put(updatePerson).delete(deletePerson)


module.exports = router;
