export default {
  locales: ['pt'],
  defaultLocale: 'pt',
  vueI18n: {
    fallbackLocale: 'pt',
    messages: {
      pt: {
        login: {
          welcomeMessage: 'Seja bem-vindo(a) ao Amigo Certo!',
          loginButon: 'entrar',
          registerButton: 'registrar-se'
        },
        userMenu: {
          accountIcon: 'mdi-account-circle',
          arrowIcon: 'mdi-chevron-down',
          items: [
            {
              title: 'Sair',
              icon: 'mdi-arrow-left-bottom'
            }
          ]
        },
        drawer: {
          menuItems : [
            {
              icon: 'mdi-account-group',
              title: 'Serviços',
              to: '/services',
              divider: true
            },
            {
              icon: 'mdi-phone',
              title: 'Atendimento',
              to: '/attendance',
              divider: true
            },
            {
              icon: 'mdi-help-circle',
              title: 'Sobre nós',
              to: '/about-us',
              divider: true
            }
          ],
          hideMenuButton: 'Ocultar menu'
        },
        services: {
          items: [
            {
              title: 'Companhia',
              icon: 'mdi-forum',
              link: '/services/accompany'
            },
            {
              title: 'Acompanhamento Médico',
              icon: 'mdi-hospital-box',
              link: '/services/medical-accompany'
            },
            {
              title: 'Uber Amigo Certo',
              icon: 'mdi-car-hatchback',
              link: '/services/friendly-uber'
            },
            {
              title: 'Outros Serviços',
              icon: 'mdi-cogs',
              link: '/services/others'
            }
          ]
        }
      }
    }
  }
}
