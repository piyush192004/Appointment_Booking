//API for adding doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      image,
      speciality,
      degree,
      experience,
      about,
      availablity,
      fee,
      address,
    } = req.body;
    const imageFile = req.file;
    console.log(
      {
        name,
        email,
        password,
        image,
        speciality,
        degree,
        experience,
        about,
        availablity,
        fee,
        address,
      },
      imageFile
    );
  } catch (error) {}
};

export { addDoctor };
