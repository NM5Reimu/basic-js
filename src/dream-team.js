const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(Array.isArray(members))) return false;
  let team = [];
  members.map(name => {
    if(typeof name === 'string' && name !== '') team.push(name.trim()[0].toUpperCase());    
  })
  return team.sort().join("");
};
