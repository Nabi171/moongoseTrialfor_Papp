import User from "./user.model";

export const createUserToDb = async () => {
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