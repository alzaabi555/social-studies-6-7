const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

// التعامل مع إنشاء/إزالة الاختصارات عند التثبيت/إلغاء التثبيت في ويندوز
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // إنشاء نافذة المتصفح
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    // أيقونة النافذة (تظهر في شريط العنوان وشريط المهام)
    icon: path.join(__dirname, '../public/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true
    },
    autoHideMenuBar: true, // إخفاء شريط القوائم العلوي (File, Edit...) لمظهر أكثر حداثة
    title: "الكتاب التفاعلي",
    backgroundColor: '#F8FAFC' // لون خلفية يطابق تصميم التطبيق لتجنب الوميض الأبيض عند التحميل
  });

  // التحقق مما إذا كان التطبيق في وضع التطوير أم الإنتاج
  const isDev = !app.isPackaged;

  if (isDev) {
    // في وضع التطوير: تحميل الرابط من خادم Vite
    mainWindow.loadURL('http://localhost:5173');
    // فتح أدوات المطور (اختياري)
    // mainWindow.webContents.openDevTools();
    console.log('Running in development mode');
  } else {
    // في وضع الإنتاج (بعد البناء): تحميل ملف index.html من مجلد dist
    // المسار: نخرج من مجلد electron (../) ثم ندخل dist
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // فتح الروابط الخارجية في المتصفح الافتراضي للجهاز بدلاً من نافذة التطبيق
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:') || url.startsWith('http:')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });
};

// تهيئة التطبيق
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // في macOS، إعادة إنشاء النافذة عند الضغط على أيقونة الشريط إذا لم تكن هناك نوافذ مفتوحة
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// إغلاق التطبيق عند إغلاق جميع النوافذ (إلا في macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
