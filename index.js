const {
    app,
    BrowserWindow,
    Menu
} = require("electron");
const path = require("path");
const url = require("url");

// Set Environment
process.eventNames.NODE_ENV = 'production';

// Init window
let win;

function createWindow() {
    // Create Browser window and turn the nodeIntegration ON
    win = new BrowserWindow({
        // width: window.screen.width,
        // height: window.screen.height,
        minWidth: 500,
        // maxWidth: 500,
        minHeight: 638,
        // maxHeight: 638,
        webPreferences: {
            nodeIntegration: true
        },
        // icon: __dirname + "./img/calculator.png"
    });

    win.maximize();

    // Load index.html file
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, "index.html"),
            protocol: "file:",
            slashes: true
        })
    );

    // Open devtools
    // win.webContents.openDevTools();

    // Close when higher application close button is clicked
    win.on("closed", () => {
        win = null;
        app.quit();
    });

    // Build Menu from Template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert Menu
    Menu.setApplicationMenu(mainMenu);
}

// Run the createWindow function
app.on("ready", createWindow);

// Quit when all windows are closed
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

// Create menu template
const mainMenuTemplate = [{
    label: "Menu",
    submenu: [{
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
            app.quit();
        }
    }],
}, ];

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";