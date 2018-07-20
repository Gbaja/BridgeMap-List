const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImage = image => {
  console.log(image);
  cloudinary.v2.uploader.upload(`/${image}`, (err, result) => {
    if (err) {
      throw new Error("Clouindary error: ", err);
    } else {
      return result.secure_url;
    }
  });
};

module.exports = { uploadImage };
