function serverError(err, req, res, next) {
    console.log(err);
    res.status(500).send("Server Error");
  }
  
  module.exports = serverError;