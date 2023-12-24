const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const renamedFiles = [];
  const nameCount = {};
  for (const name of names) {
    if (renamedFiles.includes(name)) {
      let suffix = `(${nameCount[name] || 1})`;
      let newName = `${name}${suffix}`;
      
      while (renamedFiles.includes(newName)) {
        suffix = `(${nameCount[name] || 1})`;
        newName = `${name}${suffix}`;
        nameCount[name] = (nameCount[name] || 1) + 1;
      }
      renamedFiles.push(newName);
      nameCount[name] = (nameCount[name] || 1) + 1;
    } else {
      renamedFiles.push(name);
    }
  }

  return renamedFiles;
}

module.exports = {
  renameFiles,
};
