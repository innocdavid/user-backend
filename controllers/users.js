const asyncHandler = require("express-async-handler");
const Users = require("../models/users");

// fetch all users from db
const findAllUsers = asyncHandler(async(req, res) => {
    const fetchAllUsers = await Users.findAll();
    res.status(200).json({
        description: "Successfully fetched all users",
        data: fetchAllUsers
    });
});

// create new users 
const createUsers = asyncHandler(async(req, res) => {
    if (!req.body.username) {
        res.status(400).json({
            description: "Bad request!, username must be filled."
        });
    }

    if (!req.body.email) {
        res.status(400).json({
            description: "Bad request!, email must be filled."
        });
    }

    if (!req.body.password) {
        res.status(400).json({
            description: "Bad request!, password must be filled."
        });
    }

    const usersMap = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    const newUser = await Users.create(usersMap);
    res.status(200).json({
        description: "User successfully created."
    });
});

// fetch user by id
const findUsersById = asyncHandler(async(req, res) => {
    const user = await Users.findByPk(req.params.id);
    res.status(200).json({
        description: `Successfully fetched id: ${req.params.id} user data`,
        data: user
    });
});

// update user
const updateUsers = asyncHandler(async(req, res) => {
    const user = await Users.update(req.params, { where: { id: req.params.id }});
    res.status(200).json({
        description: `Successfully updated user of id: ${req.params.id}`
    });
});

// delete user
const removeUsers = asyncHandler(async(req, res) => {
    const user = await Users.destroy({ where: { id: req.params.id }});
    res.status(200).json({
        description: `Successfully removed user of id: ${req.params.id}`
    })
});

module.exports = { findAllUsers, createUsers, findUsersById, updateUsers, removeUsers };