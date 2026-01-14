const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    icon: path.join(__dirname, '../icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false 
    }
  });

  // Load the built index.html (Production) or localhost (Dev)
  // For the distributed app, we load from the dist folder
  const distPath = path.join(__dirname, '../dist/index.html');
  
  // Fallback to src if dist doesn't exist (for development without build)
  const srcPath = path.join(__dirname, '../index.html');

  const fs = require('fs');
  if (fs.existsSync(distPath)) {
    mainWindow.loadFile(distPath);
  } else {
    mainWindow.loadFile(srcPath);
  }

  Menu.setApplicationMenu(null);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});