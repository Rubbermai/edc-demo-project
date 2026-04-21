// Lab validation (EDC edit check)
server.post("/validate/lab", (req, res) => {
  const { hba1c } = req.body;

  if (hba1c < 7 || hba1c > 10) {
    return res.json({
      status: "QUERY",
      message: "HbA1c out of range (7–10)"
    });
  }

  res.json({ status: "OK" });
});
