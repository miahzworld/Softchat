const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/softchat', { useNewUrlParser: true, useUnifiedTopology: true });

const userRoutes = require('./routes/userRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoutes);

app.listen(5000, () => console.log('Softchat Server running on port 5000'));