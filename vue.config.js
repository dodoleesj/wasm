module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'kr.codebee.ve_youtube',
        nsis: {
          shortcutName: 'first_app'
        },
        win: {
          target: [
            {
              target: "nsis",
              arch: [
                'x64',
                'ia32'
              ]
            }
          ]
        }
      }
    }
  }
}
