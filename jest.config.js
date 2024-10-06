/** @type {import('jest').Config} */
const config = {
    collectCoverageFrom: [
        'utils/*.{js,jsx}',
        '!utils/errorHandler.js'
    ],
    "reporters": [ "default", "jest-junit" ]
};
  
module.exports = config;