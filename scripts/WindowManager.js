const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron;
const config = require('./../config');

// Set the current theme as the default
var currentTheme = config.themes["default"];
var mainWindow = null;

var WindowManager = function () {
    this.init();
};

WindowManager.prototype.init = function () {
    app.on('ready', this.createWindow);
};

WindowManager.prototype.setTheme = function (theme) {
    currentTheme = config.themes[theme];
};

WindowManager.prototype.createWindow = function () {
    mainWindow = new BrowserWindow(
        config.windowConfig(currentTheme)
    );

    WindowManager.prototype.setCloseListener();
    WindowManager.prototype.setCustomThemeCSS();
    WindowManager.prototype.setMenuBar();
    mainWindow.webContents.openDevTools();
};

WindowManager.prototype.setMenuBar = function () {
    mainWindow.setMenu(Menu.Menu.buildFromTemplate(
        config.menuBarTemplate
    ));
}

WindowManager.prototype.setCustomThemeCSS = function () {
    let webContents = mainWindow.webContents;
    console.log(webContents);
    webContents.on("dom-ready", () => {
        if (typeof currentTheme.css === 'object') {
            currentTheme.css.forEach((styleLocation)=> {
                webContents.executeJavaScript(
                    "var style = document.createElement('link'); " +
                    "style.setAttribute(\"rel\", \"stylesheet\"); " +
                    "style.setAttribute(\"type\", \"text/css\"); " +
                    "style.setAttribute(\"href\", \"" + styleLocation + "\"); " +
                    "document.getElementsByTagName(\"body\")[0].appendChild(style);"
                );
            });
        }
    });
}

WindowManager.prototype.setCloseListener = function () {
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    app.on('window-all-closed', () => {
        if (process.platform != 'darwin') {
            app.quit();
        }
    });
};

WindowManager.prototype.loadHTMLFile = function (fileName) {
    app.on('ready', ()=> {
        mainWindow.loadURL('file://' + __dirname + '/../templates/' + fileName);
    });
};

module.exports = WindowManager;