const {remote} = require('electron');
const {Tray, Menu} = remote;

const path = require('path');

let trayIcon = new Tray(path.join(__dirname, '/resources/icon.jpg'));

const trayMenuTemplate = [
    {
        label: 'Empty Application',
        enabled: false
    },
    {
        label: 'Settings',
        click: () => {
            console.log('Clicked on settings')
        }
    },
    {
        label: 'Help',
        click: () => {
            console.log('Clicked for help!')
        }
    }
];

let trayMenu = Menu.buildFromTemplate(trayMenuTemplate);
trayIcon.setContextMenu(trayMenu);