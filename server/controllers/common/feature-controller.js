// const Feature = require("../../models/Feature");

// const addFeatureImage = async (req, res) => {
//   try {
//     const { image } = req.body;

//     console.log(image, "image");

//     const featureImages = new Feature({
//       image,
//     });

//     await featureImages.save();

//     res.status(201).json({
//       success: true,
//       data: featureImages,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured!",
//     });
//   }
// };

// const getFeatureImages = async (req, res) => {
//   try {
//     const images = await Feature.find({});

//     res.status(200).json({
//       success: true,
//       data: images,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured!",
//     });
//   }
// };

// module.exports = { addFeatureImage, getFeatureImages };

const Feature = require("../../models/Feature");

const addFeatureImage = async (req, res) => {
  try {
    const { image } = req.body;

    // validation
    if (!image) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    console.log(image, "image");

    const featureImages = new Feature({
      image,
    });

    await featureImages.save();

    res.status(201).json({
      success: true,
      data: featureImages,
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getFeatureImages = async (req, res) => {
  try {
    const images = await Feature.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: images,
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

module.exports = { addFeatureImage, getFeatureImages };