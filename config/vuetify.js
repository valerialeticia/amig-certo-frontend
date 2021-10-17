
import pt from 'vuetify/es5/locale/pt'
export default {
  treeShake: true,
  customVariables: ['~/assets/variables.scss'],
  theme: {
    themes: {
      dark: {
        primary: '#0c53bb',
        secondary: '#2c7dcc',
        text: '#32354e',
        warning: '#ff9900',
        success: '#8ebe2f',
        error: '#c82e2d'
      },
      light: {
        primary: '#0c53bb',
        secondary: '#2c7dcc',
        text: '#32354e',
        warning: '#ff9900',
        success: '#8ebe2f',
        error: '#c82e2d'
      }
    }
  },
  lang: {
    locales: { pt },
    current: 'pt'
  }
}
