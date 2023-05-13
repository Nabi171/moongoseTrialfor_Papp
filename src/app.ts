import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
// import { stringify } from "qs";

const app: Application = express();

// using cors
app.use(cors());

//parse data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {

    //inserting a test data into mongodb

    /*
    step1:interface
    step2:Schema
    s3:Model
    s4:database query
    
    */

    // res.send('welcome to next level');
    // next();

    //creating an interface

    interface IUser {
        id: string;
        role: string;
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contactNo: string;
        presentAddress: string;
        permanentAddress: string;
        emergencyContactNo: string;
    }

    //creating schema using interface

    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            required: true,

        },
        password: {
            type: String,
            required: true,

        },

        name: {
            firstName: {
                type: String,
                required: true,
            },
            middleName: {
                type: String,

            },
            lastName: {
                type: String,
                required: true,
            },
        },
        dateOfBirth: {
            type: String,
        },
        gender: {
            type: String,
            enum: ['male', 'female']

        },
        email: {
            type: String,

        },
        contactNo: {
            type: String,
            required: true,
        },
        presentAddress: {
            type: String,
            required: true,
        },
        permanentAddress: {
            type: String,
            required: true,
        },
        emergencyContactNo: {
            type: String,
            required: true,
        },

    })

    //  Create a Model.
    const User = model<IUser>('User', userSchema);


    const createUserToDb = async () => {
        const user = new User({
            id: '441',
            role: "student",
            password: 'jhakana',
            name: {
                firstName: "Mexbaul",
                middleName: 'Abedin',
                lastName: 'Persian'
            },
            gender: "male",
            email: 'abc@gmail.com',
            contactNo: '0234545',
            presentAddress: 'Ugans',
            permanentAddress: 'Usa',
            emergencyContactNo: '0123434'
        });
        await user.save();
        console.log(user)
    };

    createUserToDb();





})





export default app;