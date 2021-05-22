module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  var router = require("express").Router();

  // Create a new customers
  router.post("/", customers.create);

  // Retrieve all customers
  router.get("/", customers.findAll);

  // Retrieve all published customers
  router.get("/published", customers.findAllPublished);

  // Retrieve a single customers with id
  router.get("/:id", customers.findOne);

  // Update a customers with id
  router.put("/:id", customers.update);

  // Delete a customers with id
  router.delete("/:id", customers.delete);

  // Delete all customers
  router.delete("/", customers.deleteAll);

  app.use('/api/customers', router);
};
