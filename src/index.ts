import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

const app = express();
app.use(express.json());

AppDataSource.initialize().then(async () => {
    app.post("/users", async (req, res) => {
        const user = new User();
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.age = req.body.age;

        try {
            await AppDataSource.manager.save(user);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: "Error saving user", error });
        }
    });

    app.get("/users", async (req, res) => {
        try {
            const users = await AppDataSource.manager.find(User);
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: "Error loading users", error });
        }
    });

    app.listen(3000, () => {
        console.log("Server started on port 3000");
    });

}).catch(error => console.log(error));
