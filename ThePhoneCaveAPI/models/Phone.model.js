const { Schema, model } = require("mongoose");

const phoneSchema = new Schema(
  {
    id: {
      type: Number,
      required: [true, "id is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },

    name: {
      type: String,
      equired: [true, "Name is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },

    manufacturer: {
      type: String,
      required: [true, "Manufacter is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },

    description: {
      type: String,
      lowercase: true,
    },

    color: {
      type: String,
      lowercase: true,
    },

    price: {
      type: Number,
    },

    imageUrl: {
      type: String,
    },

    screen: {
      type: String,
    },

    processor: {
      type: String,
    },

    ram: {
      type: Number,
    },
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;
