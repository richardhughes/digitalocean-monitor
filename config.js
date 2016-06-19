module.exports.windowConfig = function (theme) {
    return {
        width: theme.properties.width,
        height: theme.properties.height,
        title: 'APP TITLE',
        useContentSize: true,
        alwaysOnTop: true,
        frame: theme.properties.useFrame,
        maximizable: false
    }
};

module.exports.themes = {
    default: {
        properties: {
            width: 500,
            height: 500,

        },
        css: [
            "../styles/default.css"
        ]
    },
    slim: {
        properties: {
            width: 900,
            height: 900
        }
    }
};

module.exports.menuBarTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: 'CmdOrCtrl+Q',
                role: 'close'
            }
        ]
    }
];