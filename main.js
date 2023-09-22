const { app, BrowserWindow} = require('electron')
let win;
const remoteMain = require('@electron/remote/main');
remoteMain.initialize();



const createWindow = () => {


   win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
  },
    width: 1000,
    height: 700
  })

  win.loadFile('ui/index2.html')
}

app.whenReady().then(() => {
  createWindow()
  
  remoteMain.enable(win.webContents)
})



