const User = require("../models/user")

// get all users
const getAllUsers = async (req, res) => {
  const users = await User.find()
  res.json(users)
}

// get single user by id
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id)
  res.json(user)
}

// get user by name
const getUserByName = async (req, res) => {
  try {
    const { name } = req.params
    const user = await User.find({ name: name })
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found! Get the search dogs." })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// create user
const createUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({
      user,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getUserByName,
  getAllUsers,
  getUserById,
  createUser,
}
