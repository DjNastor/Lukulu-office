const {app, BrowserWindow, Tray, Menu, shell} = require('electron');
const path = require('path');
let win; let tray;
function createWindow(){
  win = new BrowserWindow({
    width: 1400, height: 900,
    minWidth: 1200, minHeight: 700,
    icon: path.join(__dirname, 'lukulu-real-icon-512.png'),
    backgroundColor: '#050507',
    titleBarStyle: 'hiddenInset',
    webPreferences: { nodeIntegration: false, contextIsolation: true }
  });
  win.loadFile('index.html');
  win.webContents.setWindowOpenHandler(({url})=>{ shell.openExternal(url); return {action:'deny'} });
  const menu = Menu.buildFromTemplate([
    {label:'Lukulu HQ', submenu:[{role:'about'},{type:'separator'},{role:'quit'}]},
    {label:'Edit', submenu:[{role:'undo'},{role:'redo'},{type:'separator'},{role:'cut'},{role:'copy'},{role:'paste'}]},
    {label:'View', submenu:[{role:'reload'},{role:'toggleDevTools'},{type:'separator'},{role:'togglefullscreen'}]}
  ]);
  Menu.setApplicationMenu(menu);
}
app.whenReady().then(()=>{ createWindow();
  tray = new Tray(path.join(__dirname, 'lukulu-real-icon-192.png'));
  tray.setToolTip('Lukulu HQ v32 Global Install');
  tray.setContextMenu(Menu.buildFromTemplate([{label:'Open Lukulu HQ', click:()=>win.show()}, {label:'Quit', click:()=>app.quit()}]));
});
app.on('window-all-closed', ()=>{ if(process.platform!=='darwin') app.quit(); });
app.on('activate', ()=>{ if(BrowserWindow.getAllWindows().length===0) createWindow(); });
