const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});
