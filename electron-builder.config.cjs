const { ossign } = require('@ossign/electronbuilder');
/**
 * @type {import('electron-builder').Configuration}
 */
module.exports = {
  appId: "com.sevenc-nanashi.kiitecafe-desktop",
  productName: "Kiite Cafe Desktop",
  copyright: "2022 © Nanashi. <@sevenc-nanashi>",
  icon: "build/icon.png",
  directories: {
    output: "dist-electron",
  },
  files: ["dist/**/*"],
  mac: {
    category: "public.app-category.social-networking",
    target: ["dmg", "zip"],
    icon: "public/mac-icon.png",
  },
  win: {
    target: ["nsis", "portable"],
    icon: "public/icon.ico",
    sign: ossign
  },
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true,
  },
  linux: {
    target: "AppImage",
    icon: "public/icon.png",
  },
};
