import mongoose from 'mongoose';
import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        const salt = bcrypt.genSalySync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash });
        await newUser.save();
        res.status(200).send("User has beem created");
    } catch (err) {
        next(err)
    }
}

export const signin = async (req, res) => {
    try {
        const user = await User.findOne({ name: req.body.name })
        if (!user) return next(createError(404, "User not found"))

        const isCorrect = await bcrypt.compare(req.body.password, user.password);

        if (!isCorrect) return next(createError(400, "Incorrect password!"))

        const token = jwt.sign({ id: user._id }, process.env.JWT)
        const { password, ...others } = user._doc 

        res.cookie("acess_token", token, {
            httpOnly: true
        })
            .status(200)
            .json(others);
    } catch (err) {
        next(err)
    }
}