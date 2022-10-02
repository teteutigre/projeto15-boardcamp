import ClienteSchema from "../schemas/ClienteSchema.js";

const ClienteValidation = async (req, res, next) => {
  const cliente = req.body;
  const validation = ClienteSchema.validate(cliente);

  if (validation.error) {
    return res.status(400).send(validation.error.details[0].message);
  }

  next();
};

export default ClienteValidation;
