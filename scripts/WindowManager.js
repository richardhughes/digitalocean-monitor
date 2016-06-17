const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var WindowManager = function () {
    this.mainWindow = null;
    this.init();
};

WindowManager.prototype.init = function () {
    app.on('ready', this.createWindow);
};

WindowManager.prototype.createWindow = function () {
    this.mainWindow = new BrowserWindow({
        width: 500,
        height: 500,
        title: 'Digital Ocean - Monitor',
        useContentSize: true,
        alwaysOnTop: true,
        frame: false,
        maximizable: false
    });
};

WindowManager.prototype.setCloseListener = function () {
    WindowManager.prototype.mainWindow.on('closed', () => {
        WindowManager.prototype.mainWindow = null;
    });
};

module.exports = WindowManager;