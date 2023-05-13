import mongoose from "mongoose";
import app from './app';
const port: number = 5000;


//database connection

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-moongose');
        console.log('Database concetion successful')

        app.listen(port, () => {
            console.log(`Server listening on port ${port}`)
        })

    } catch (err) {
        console.log(`Faliled to connect database`, err)
    }


}

bootstrap()


