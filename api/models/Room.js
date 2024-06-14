import mongoose from 'mongoose'

const { Schema } = mongoose

const RoomSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true, 
    },
    roomNumbers: [
      {
        number: Number,
        unavaliableDates: { type: [Date] },
      },
    ],
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Room', RoomSchema)
