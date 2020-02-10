export default (req, res) => {
  

  res.json({ batman: process.env.BATMAN });
};
