export
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
};

export interface IUserMethods {
    fullName(): string;
}