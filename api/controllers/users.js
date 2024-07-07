import User from "../models/User.js"
import { createError } from "../error.js"

export const update = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },
                { new: true }
            )
            res.status(200).json(updatedUser)
        } catch (err) {
            next(err)
        }
    } else {
        return next(createError(403, "Please update your account"))
    }
}
export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            await User.findByIdAndDelete(req.params.id
            )
            res.status(200).json("User had been deleted")
        } catch (err) {
            next(err)
        }
    } else {
        return next(createError(403, "Please update your account"))
    }
}
export const getUser = async (req, res, next) => {

}
export const subscriber = async (req, res, next) => {

}
export const unsubscribe = async (req, res, next) => {

}
export const like = async (req, res, next) => {

}
export const dislike = async (req, res, next) => {

}
