module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.lyasee.vue-electron",
        productName: "vue-electron",
        copyright: "Copyright © 2019 smlee",
        mac: {
          target: ["default"],
          icon: "./resources/installer/Icon.icns"
        },
        dmg: {
          title: "vue-electron",
          contents: [
            {
              x: 110,
              y: 150
            },
            {
              x: 240,
              y: 150,
              type: "link",
              path: "/Applications"
            }
          ]
        },
        win: {
          target: ["zip", "nsis"],
          icon: "./resources/installer/Icon.ico"
        },
        linux: {
          target: ["AppImage", "deb", "rpm", "zip", "tar.gz"],
          icon: "./resources/linuxicon"
        },
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        }
        // files: ["dis_electron/**/*", "node_modules/**/*"]
        // directories: {
        //   buildResources: "resources/installer/",
        //   output: "dist_elec/",
        //   app: "."
        // }
      }
    }
  }
};
