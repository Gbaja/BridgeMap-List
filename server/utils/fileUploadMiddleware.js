const axios = require("axios");
const fetch = require("node-fetch");
const cloudinary = require("cloudinary");

const fileUploadMiddleware = (req, res) => {
  console.log("BBODY: ", req.body);
  cloudinary.uploader
    .upload_stream(function(error, result) {
      console.log(result, error);
      return;
    })
    //   fetch("/api/upload", {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     credentials: "same-origin",
    //     body: {
    //       url: result.secure_url,
    //       name: req.body.name,
    //       description: req.body.description
    //     }
    // })
    // .then(response => {
    //   console.log("RespoNSE, ", response);
    //   res.status(200).json(response.data);
    // })
    // .catch(error => {
    //   console.log("error", error);
    //   res.status(500).json(error.response.data);
    // });
    // })
    .end(req.file.buffer);
};

module.exports = fileUploadMiddleware;
