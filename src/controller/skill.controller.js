const express = require('express');

const route = express.Router();
const { getAllSkills, getSkillById, updateSkill, addNewSkill, deleteSkill } = require('../service/skill.service');

const { isValidId, isValidSkill } = require('../helper/validation');

const { buildResponse } = require('../helper/buildResponse');

route.get('/', (_req, res) => {
  try {
    buildResponse(res, 200, getAllSkills());
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', isValidId, (req, res) => {
  try {
    const { id } = req.params;
    buildResponse(res, 200, getSkillById(id));
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/', isValidSkill, (req, res) => {
  try {
    const { title } = req.body;
    buildResponse(res, 200, addNewSkill(title));
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', isValidId, isValidSkill, (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    buildResponse(res, 200, updateSkill(id, title));
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', isValidId, (req, res) => {
  try {
    const { id } = req.params;
    buildResponse(res, 200, deleteSkill(id));
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

// route.patch("/:id", isValidId, (req, res) => {
//   try {
//     const { id } = req.params;
//     const dataId = getSkillrById(id);
//     res.status(200).send(dataId);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

module.exports = { route };
