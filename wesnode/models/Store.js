const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const slug = require("slugs");

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter store name",
  },
  slug: "string",
  description: {
    type: String,
    trim: true,
  },
  tags: [String],
});

storeSchema.pre("save", (next) => {
  if(!this.isModified('name'))  {
    next();
    return;
  }
  this.slug = slug(this.name);
  next();
  // TODO zmień coś tam
});

module.exports = mongoose.model("Store", storeSchema);
