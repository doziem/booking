import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
  //   roomImages: {
  //     type: [String],
  // },
    desc: {
      type: String,
      required: true,
    },
    // roomNumber: {
    //   type: Number,
    //   required: true,
    // },
    // beds: {
    //   type: Number,
    //   required: true,
    // },
    // bathroom: {
    //   type: String,
    //   required: true,
    // },
    roomNumbers: [
      { number: Number,  unavailableDates: { type: [Date] } },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
