const cloudinary = require("cloudinary");

const fileUploadMiddleware = (req, res, next) => {
  try {
    console.log("BBODY: ", req.body);
    cloudinary.uploader
      .upload_stream((result, error) => {
        if (error) {
          console.log("ERROR:", error);
        } else {
          console.log("RESULT: ", result);
          if (result.error) {
            return res.status(422).send({
              type: "upload-error",
              message: "Logo must be 10MB or less in size."
            });
          }
          res.send({ imageUrl: result.secure_url });
        }
      })
      .end(req.file.buffer);
  } catch (err) {
    next(err);
  }
};

module.exports = fileUploadMiddleware;
