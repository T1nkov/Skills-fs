const fs = require('fs');

function getArr() {
  return JSON.parse(fs.readFileSync('./src/storage.json'));
}

function writeFile(arr) {
  fs.writeFileSync('./src/storage.json', JSON.stringify(arr));
}

function getAllSkills() {
  const arr = getArr();
  if (arr.length == 0) throw new Error('json empty');
  return arr;
}

function getSkillById(id) {
  const arr = getArr();
  const filter = arr.filter(el => el.id == id);
  if (!filter[0]) throw new Error('Error in Id');
  return filter[0];
}

function addNewSkill(title) {
  const arr = getArr();
  if (!title) throw new Error('Request body empty');
  const newObj = {
    id: Math.max(...arr.map(el => el.id)) + 1,
    title,
  };
  arr.push(newObj);
  writeFile(arr);
  return arr;
}

function updateSkill(id, title) {
  const arr = getArr();
  const index = arr.findIndex(el => el.id == id);
  arr[index] = {
    id,
    title,
  };
  writeFile(arr);
  return arr;
}

function deleteSkill(id) {
  const arr = getArr();
  const filter = arr.filter(el => el.id != id);
  writeFile(filter);
  return filter;
}
module.exports = { getAllSkills, getSkillById, updateSkill, addNewSkill, deleteSkill };
