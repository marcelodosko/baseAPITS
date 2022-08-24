import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import UsersServices from './src/services/usersServices';

dotenv.config()

async function main() {
  const url = process.env.MONGO_DB_URL as string;
  const db = await mongoose.connect(url);
  console.log("Conectado a: ", db.connection.name)
}

const app = express();
app.use(express.json());
app.use(helmet());
app.get("/", async (req, res) => {
  const usersServices = new UsersServices();
  const result = await usersServices.saveUser();
  res.send(result);
})

const port = process.env.PORT || 3001;
main();

app.listen(port, () => console.log(`App listening on port: ${port}`))