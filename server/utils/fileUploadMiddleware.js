const axios = require("axios");
const cloudinary = require("cloudinary");

const fileUploadMiddleware = (req, res) => {
  console.log("BBODY: ", req.body);
  cloudinary.uploader
    .upload_stream((result, error) => {
      if (error) {
        console.log("ERROR:", error);
      } else {
        console.log("RESULT: ", result);
        res.send({ imageUrl: result.secure_url });
      }
    })
    .end(req.file.buffer);
};

module.exports = fileUploadMiddleware;
