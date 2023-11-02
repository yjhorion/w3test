import express from "express"
import Users from "../schemas/users.schemas.js"
import { ObjectId } from "mongodb";

const router = express.Router();

// 유저등록 API
router.post("/users", async (req, res, next) => {
    const {name , email, pw} = req.body

    const createUser = await Users.create({
        userId: new ObjectId(),
        name,
        email,
        pw
    })


    return res.status(201).json({ user : createUser })
})

// 목록조회
router.get("/users", async (req, res, next) => {
    const users = await Users.find().select("-_id userId name email pw").exec()
    return res.status(200).json({users})
})

// 세부조회
router.get("/users/:userId", async (req, res, next) => {
    const { userId } = req.params
    const user = await Users.findOne({ userId }).select("-_id userId name email pw").exec()

    return res.status(200).json({ user : user })
})


export default router