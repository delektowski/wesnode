exports.homePage = (req, res) => {
  console.log("req", req.name);
  res.render("index");
};

exports.addStore = (req, res) => {
  res.render("editStore", { title: "Add store" });
};
