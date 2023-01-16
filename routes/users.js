const express = require("express");
const router = express.Router();
const { 
    findAllUsers, 
    findUsersById, 
    createUsers, 
    updateUsers, 
    removeUsers 
} = require("../controllers/users");

/**
 * @swagger
 * components:
 *  schemas:
 *      Users:
 *          type: object
 *          properties:
 *              username:
 *                  type: string
 *                  description: enter your username
 *                  example: admin001
 *              email:
 *                  type: string
 *                  description: enter your username
 *                  example: admin001@test.com
 *              password:
 *                  type: string
 *                  description: enter your password
 *                  example: admin001password1234
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *      tags:
 *          - Users
 *      summary: Retrieve a list of users
 *      description: An API to fetch a list of all the users from a user table
 *      responses:
 *          200:
 *              description: A list of users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              description:
 *                                  type: string
 *                                  example: Successfully fetched list of all users
 *                              data:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#components/schemas/Users'
 */

router.get("/", findAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      tags:
 *          - Users
 *      summary: Retrieve users by id
 *      description: An API to fetch a user by id from users table
 *      parameters:
 *          -   name: id
 *              in: path
 *              required: true
 *              description: user id
 *              schema:
 *                  type: integer
 *                  format: int64
 *      responses:
 *          200:
 *              description: Single user data
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              description:
 *                                  type: string
 *                                  example: Successfully fetched user by id
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      username:
 *                                          type: string
 *                                          description: enter your username
 *                                          example: admin001
 *                                      email:
 *                                          type: string
 *                                          description: enter your username
 *                                          example: admin001@test.com
 *                                      password:
 *                                          type: string
 *                                          description: enter your password
 *                                          example: admin001password1234
 */
router.get("/:id", findUsersById);

/**
 * @swagger
 * /api/users/:
 *  post:
 *      tags:
 *          - Users
 *      summary: Create new user
 *      description: An API to create new user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          username:
 *                              type: string
 *                              description: enter your username
 *                              example: admin001
 *                          email:
 *                              type: string
 *                              description: enter your username
 *                              example: admin001@test.com
 *                          password:
 *                              type: string
 *                              description: enter your password
 *                              example: admin001password1234
 *      responses:
 *          200:
 *              description: Successfully created a new user!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              description:
 *                                  type: string
 *                                  example: Successfully create a new user!
 *                          
 * 
 */
router.post("/", createUsers);

/**
 * @swagger
 * /api/users/{id}
 *  patch:
 *      tags:
 *          - Users
 *      summary: Update user data
 *      description: An API to update user's data
 */
router.patch("/:id", updateUsers);
router.delete("/:id", removeUsers);

module.exports = router;