import Hotel from "../models/Hotel.js"

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body)
  try {
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
  } catch (error) {
    next(error)
  }
}

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    //return the updated document
    res.status(200).json(updatedHotel)
  } catch (error) {
    next(error)
  }
}

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id)

    //return the updated document
    res.status(200).json('Hotel has been deleted succefully')
  } catch (error) {
    next(error)
  }
}

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id)
    //return the updated document
    res.status(200).json(hotel)
  } catch (error) {
    next(error)
  }
}

export const getAllHotel = async (req, res, next) => {
  try {
    const hotels = await Hotel.find()
    //return the updated document
    res.status(200).json(hotels)
  } catch (error) {
    next(error)
  }
}

export const countByCity = async (req, res, next) => {
  try {
    if (!req.query.city) {
      return res.status(400).json({ message: "City query parameter is required" });
    }
    const cities = req.query.city.split(',');
    const list = await Promise.all(cities.map(city => Hotel.countDocuments({ city: city })));
     
    // const result = cities.reduce((acc, city, index) => {
    //   acc[city] = list[index];
    //   return acc;
    // }, {});

    // Send the response with the status code 200 and the result object
    res.status(200).json(list);
  } catch (error) {
    // Pass any errors to the next middleware 
    next(error);
  } 
};
