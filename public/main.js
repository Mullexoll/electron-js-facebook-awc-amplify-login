const { app, BrowserWindow } = require("electron");

// const { ipcMain } = require("electron");
// const { dialog } = require("electron");

function createWindow() {
   const win = new BrowserWindow({
      width: 1200,
      height: 900,
      webPreferences: {
         nodeIntegration: true,
         contextIsolation: false,
         sandbox: true,
         enableRemoteModule: false,
      },
   });
   win.removeMenu();
   win.setMenu(null);
   win.loadURL("http://localhost:3000");
   // win.webContents.openDevTools();
}

// function createNewView() {
//    const win = new BrowserWindow({
//       width: 500,
//       height: 500,
//       webPreferences: {
//          nodeIntegration: true,
//          contextIsolation: true,
//          sandbox: true,
//          enableRemoteModule: false,
//       },
//    });

//    const view = new BrowserView();
//    win.setBrowserView(view);
//    view.setBounds({ x: 0, y: 0, width: 500, height: 500 });
//    view.webContents.loadURL(
//       "file://" + __dirname + "/BrowserViewPages/UploadFilePage.html"
//    );
//    view.webContents.openDevTools();
// }

app.whenReady().then(createWindow);
// app.whenReady().then(createNewView);

app.on("window-all-closed", () => {
   if (process.platform !== "darwin") {
      app.quit();
   }
});

app.on("activate", () => {
   if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
      // createNewView();
   }
});

// ipcMain.on("click-button", (event, arg) => {
//    const { dialog } = require("electron");
//    const parentWindow =
//       process.platform === "darwin" ? null : BrowserWindow.getFocusedWindow();
//    dialog
//       .showOpenDialog(parentWindow, {
//          properties: ["openFile", "openDirectory"],
//       })
//       .then((result) => {
//          console.log(result.canceled);
//          console.log(result.filePaths);
//       })
//       .catch((err) => {
//          console.log(err);
//       });
// });

// ipcMain.on("click-button", () => {
//    dialog.showOpenDialog({
//       properties: ["openFile", "openDirectory", "multiSelections"],
//    });
// });
