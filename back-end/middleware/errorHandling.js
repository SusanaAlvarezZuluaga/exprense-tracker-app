const handleError = (err, req, res, next) => {
  const options = {
    NO_RECORD_FOUND: {
      status: 404,
      id: 'da969facdb',
      message: 'No information meets the requirements.',
    },
    EXISTING_EMAIL: {
      status: 409,
      id: 'afb1e4f742',
      message: "There's an user with that email.",
    },
    NOT_AUTHENTICATED: {
      status: 401,
      id: 'd29e6e6b32',
      message: 'Must login.',
    },

    INVALID_CREDENTIALS: {
      status: 401,
      id: 'a1ad74be99',
      message: 'Invalid credentials.',
    },
    NO_USER: {
      status: 400,
      id: 'f9234595e4',
      message: "There's no user with the email provided.",
    },
    FAILURE: {
      status: 400,
      id: 'f9234595e4',
      message: 'Cant perfom this action. Try checking if the id is valid',
    },
  };
  if (err) {
    console.log(err);
    const treatedError = err.toString().slice(7);
    //if they are validation errors send them
    if (treatedError === 'INVALID_DATA')
      res.status(422).json(req.validationErrors);
    //if the error is defined on top send it
    else if (options.hasOwnProperty(treatedError)) {
      const { status, message, id } = options[treatedError];
      res.status(status).json({ id, message });
    }
    //if the error is not defined send this by default
    else res.status(500).send({ id: '6882d71320', message: 'Internal issues' });
  } else {
    next();
    return;
  }
};

module.exports = { handleError };
