import express from "express";

const app = express();
app.use(express.json());

app.post("/mpesa/callback", (req, res) => {
  const { Body } = req.body;
  const { stkCallback } = Body;

  if (stkCallback.ResultCode === 0) {
    const items = stkCallback.CallbackMetadata.Item;
    const get = (name) => items.find((i) => i.Name === name)?.Value;

    console.log("Payment success:", {
      receipt: get("MpesaReceiptNumber"),
      amount: get("Amount"),
      phone: get("PhoneNumber"),
      date: get("TransactionDate"),
    });
  } else {
    console.log("Payment failed:", stkCallback.ResultDesc);
  }

  res.json({ ResultCode: 0, ResultDesc: "Accepted" });
});

app.listen(3000);