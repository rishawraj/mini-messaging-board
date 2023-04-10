const profanity = require("profanity-hindi");

function censorMiddleware(req, res, next) {
  const userName = req.body.name;
  const userInput = req.body.message;
  const cleanedName = profanity.maskBadWords(`${userName}`);
  const cleanedMessage = profanity.maskBadWords(`${userInput}`);
  req.body.name = cleanedName;
  req.body.message = cleanedMessage;

  next();
}

module.exports = censorMiddleware;
