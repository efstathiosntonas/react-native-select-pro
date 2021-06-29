const path = require('path');
const pak = require('../../react-native-select-pro/package.json');

module.exports = function (api) {
    api.cache(true);

    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    extensions: ['.tsx', '.ts', '.js', '.json'],
                    alias: {
                        // For development, we want to alias the library to the source
                        [pak.name]: path.join(__dirname, '..', pak.source),
                    },
                },
            ],
        ],
    };
};
