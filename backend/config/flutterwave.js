const axios = require('axios');

const FLW_SECRET_KEY = "YOUR_FLUTTERWAVE_SECRET_KEY";

const flutterwavePayment = async (amount, currency, email) => {
    const response = await axios.post(
        "https://api.flutterwave.com/v3/payments",
        {
            tx_ref: "softchat_" + new Date().getTime(),
            amount,
            currency,
            redirect_url: "https://softchat.com/payment-success",
            customer: { email },
        },
        { headers: { Authorization: `Bearer ${FLW_SECRET_KEY}` } }
    );
    return response.data;
};

module.exports = { flutterwavePayment };