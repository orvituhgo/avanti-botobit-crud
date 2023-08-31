import express, { json } from "express";

import { routes } from "./routes/routes";

const app = express()
const port = 4003

app.use(json()) // ou express.json()
app.use(routes)


app.listen(port, () => console.log(`Server is running on PORT ${port}`));