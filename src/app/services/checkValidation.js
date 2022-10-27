import schemas from '../routes/validation/pokemonValidationSchemas';

const validateParams = (req, res, next) => {
  const paramSchema = schemas.paramSchema;
  const { error } = paramSchema.validate(req.params);

  if (error) {
    console.log(error);
    res.status(400).json({ error: error.details });
  } else {
    next();
  }
};

const validateQuery = (req, res, next) => {
  const querySchema = schemas.querySchema;
  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };
  const { error } = querySchema.validate(req.query, options);

  if (error) {
    console.log(error);
    res.status(400).json({ error: error.details });
  } else {
    next();
  }
};

const validateCreateBody = (req, res, next) => {
  const validationSchema = schemas.createSchema;
  generalBodyValidation(validationSchema, req, res, next);
};

const validateUpdateBody = (req, res, next) => {
  const validationSchema = schemas.updateSchema;
  generalBodyValidation(validationSchema, req, res, next);
};

const generalBodyValidation = (schema, req, res, next) => {
  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };
  const { error } = schema.validate(req.body, options);

  if (error) {
    console.log(error);
    res.status(400).json({ error: error.details });
  } else {
    next();
  }
};

export default { validateParams, validateCreateBody, validateUpdateBody, validateQuery };
