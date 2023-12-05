
import express from 'express';
import documentRoutes from "./routes/documentRoutes.js";

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });
app.use("/document",documentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
