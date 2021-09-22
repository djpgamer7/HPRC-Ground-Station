const electron = require('electron');
const path = require('path');
const url = require('url');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, "/resources/icon.png"),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('main.html')
    mainWindow.setFullScreen(true)

    //mainWindow.webContents.openDevTools();

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
};

const menuTemplate = [
    {
        label: "Windows",
        submenu: [
            {
                label: 'Main',
                click() {
                    mainWindow.loadURL(url.format({
                        pathname: path.join(__dirname, 'main.html'),
                        protocol: 'file',
                        slashes: true
                    }));
                }
            },
            {
                label: 'Rocket',
                click() {
                    mainWindow.loadURL(url.format({
                        pathname: path.join(__dirname, '/RocketView/RocketView.html'),
                        protocol: 'file',
                        slashes: true
                    }));
                }
            },
            {
                label: 'Payload',
                click() {
                    
                }
            },
            {
                label: 'Exit',
                click() {
                    mainWindow.close();
                }
            }
        ]
    }
];

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.exit();
    };
});

app.on('activate', () => {
    createWindow();
});