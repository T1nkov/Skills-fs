function buildResponse(res, number, body) {
  res.status(number).send(body);
}

module.exports = { buildResponse };
