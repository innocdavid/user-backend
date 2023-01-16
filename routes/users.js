const express = require("express");
const router = express.Router();
const { 
    findAllUsers, 
    findUsersById, 
    createUsers, 
    updateUsers, 
    removeUsers 
} = require("../controllers/users");

router.get("/". findAllUsers);
router.get("/:id", findUsersById);
router.post("/", createUsers);
router.patch("/:id", updateUsers);
router.delete("/:id", removeUsers);

module.exports = router;