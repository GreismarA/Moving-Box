import mongoose from "mongoose"; // Mongoose for interacting with MongoDB.

// Define the Schema for boxes.
const boxSchema = new mongoose.Schema({

  // Define the properties of the Schema with their validations.
  name: {
    type: String,
    required: true,
    maxlength: 32,
    unique: false,
    trim: true,
    match: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9 ]{1,32}$/
  },

  owner: {
    type: String,
    required: true,
    maxlength: 25,
    unique: false,
    trim: true,
    match: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9 ]{1,32}$/
  },

  destination: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
    match: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9-/(),\. ]{1,50}$/
  },

  note: {
    type: String,
    required: false,
    trim: true
  },

  content: {
    type: [String],
    required: true,
    min: [1, 'The content list must contain at least one content.']
  },

  contentType: {
    type: String,
    required: true
  },

  itemsAmount: {
    type: String,
    required: true,
    match: /^[0-9]+(\.[0-9]+)?$/
  },

  weight: {
    type: String,
    required: false,
    match: /^[0-9]+(\.[0-9]+)?$/
  },

  photos: {
    type: [string],
    required: false,
    min: [1, 'The list of photos is empty.'],
    max: [16, 'The photo list cannot contain more than 16 photos.']
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: false
  },

  authorizedUsers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'user',
    required: false
  },

  relocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'relocation',
    required: false
  }, 

  ubication: {
    type: {
      type: String,
      enum: ['Point'], 
      required: true
    },
    coordinates: {
      type: [Number], 
      required: true,
      min: [2, 'A coordinate value is missing.']
    },
    required: false
  }

}, { 
  versionKey: false,
  timestamps: true
});

// Create a Mongoose model from the defined Schema and export it.
export default mongoose.model("Box", boxSchema);