const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust this path according to your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Adjust this path according to your output directory
  },
  mode: 'development', // Change to 'production' for production builds
};
