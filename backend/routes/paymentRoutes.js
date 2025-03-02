const express = require('express');
const { flutterwavePayment } = require('../config/flutterwave');
const router = express.Router();

router.post('/pay', async (req, res) => {
    try {
        const { amount, currency, email } = req.body;
        const payment = await flutterwavePayment(amount, currency, email);
        res.json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;