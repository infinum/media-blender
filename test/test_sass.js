const path = require('path');
const sassTrue = require('sass-true');

const sassFiles = [
  'media-breakpoints.scss'
];

sassFiles.forEach((file) => {
  const filePath = path.join(__dirname, file);
  sassTrue.runSass({file: filePath}, describe, it);
});
