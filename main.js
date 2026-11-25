const {app,BrowserWindow,Menu,shell}=require('electron');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const {isAllowedExternalUrl}=require('./windows/link-policy.cjs');
const localPages=['index.html','operations.html','review.html'].map(name=>pathToFileURL(path.join(__dirname,name)).href);
function external(url){if(isAllowedExternalUrl(url))shell.openExternal(url).catch(()=>{});}
function createWindow(){
 const win=new BrowserWindow({width:1400,height:900,minWidth:480,minHeight:620,title:'Lukulu HQ',icon:path.join(__dirname,'assets/lukulu-512.png'),backgroundColor:'#10110f',webPreferences:{nodeIntegration:false,contextIsolation:true,sandbox:true}});
 win.loadFile(path.join(__dirname,'index.html'));
 win.webContents.setWindowOpenHandler(({url})=>{external(url);return {action:'deny'};});
 win.webContents.on('will-navigate',(event,url)=>{if(!localPages.includes(url.split('#')[0])){event.preventDefault();external(url);}});
 Menu.setApplicationMenu(Menu.buildFromTemplate([{label:'Lukulu HQ',submenu:[{role:'about'},{type:'separator'},{role:'quit'}]},{label:'Edit',submenu:[{role:'undo'},{role:'redo'},{type:'separator'},{role:'cut'},{role:'copy'},{role:'paste'},{role:'selectAll'}]},{label:'View',submenu:[{role:'reload'},{role:'resetZoom'},{role:'zoomIn'},{role:'zoomOut'},{type:'separator'},{role:'togglefullscreen'}]}]));
}
app.whenReady().then(createWindow);
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit();});
app.on('activate',()=>{if(!BrowserWindow.getAllWindows().length)createWindow();});
