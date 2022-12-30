const path = require('path');
const fs = require('fs');

const projectDirectory = fs.realpathSync(process.cwd());
const resolveProject = (relativePath) => path.resolve(projectDirectory, relativePath);

module.exports = {
    appIndex: resolveProject('src/client/Index.tsx'),
    appIndexTemplate: resolveProject('src/client/index.html'),
    tsconfig: resolveProject('tsconfig.json'),

    appBuildDev: resolveProject('build'),
    appBuildProd: resolveProject('dist'),

    webpackConfigDev: resolveProject('config/webpack.dev.js'),
    webpackConfigProd: resolveProject('config/webpack.prod.js'),

    publicPathDev: '/',
    // publicPathProd must match reactSnap/publicPath in package.json
    publicPathProd: '/courses/cse440/23wi/',
};
