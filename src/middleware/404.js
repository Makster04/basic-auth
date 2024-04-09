function notFound(req, res, next) {
    res.status(404).send("Invalid route");
  }
  
  module.exports = notFound;