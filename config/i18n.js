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
        },
        aboutUs: {
          tabItems: ['Quem Somos', 'Voluntariado'],
          title: 'Quem Somos',
          descripAboutUs: `O Amigo Certo é um grupo de Jovens Universitários dedicados à causa do voluntariado que
          nascemos da vontade de unir idosos que precisão de apoio com outros jovens quem quer ajudar.
          Nosso trabalho aqui não possui vínculo com nenhuma organização nem motivação comercial. Estamos empenhados
          em contribuir para um mundo melhor, conectando pessoas que desejam trabalhar voluntariamente com idoso que precisam de apoio.`,
          subtitle: 'Amigo Certo e os ODS',
          descripAmigoCerto: `Os Objetivos de Desenvolvimento Sustentável (ODS) foram criados pela ONU para acelerar
          as transformações e alcançar a Agenda 2030. Essa agenda é um plano de ação global para mudar o mundo até 2030
          e fornece todas as informações que precisamos para atingir um desenvolvimento sustentável. Parece confuso, mas
          nada mais é que um passo a passo que liga o momento em que vivemos ao que sonhamos viver.`,
          volunteeringTitle: 'O que é voluntariado',
          firstTextVolunteering: `Segundo definição das Nações Unidas, "voluntário é o jovem ou o adulto que,
          devido a seu interesse pessoal e ao seu espírito cívico, dedica parte do seu tempo, sem remuneração
           alguma, a diversas formas de atividades, organizadas ou não, de bem estar social, ou outros campos..."`,
          secondTextVolunteering: `Em estudo realizado na Fundação Abrinq pelos Direitos da Criança, definiu-se o voluntário
          como ator social e agente de transformação, que presta serviços não remunerados em benefício da comunidade; doando
          seu tempo e conhecimentos, realiza um trabalho gerado pela energia de seu impulso solidário, atendendo tanto às
          necessidades do próximo ou aos imperativos de uma causa, como às suas próprias motivações pessoais, sejam estas de
          caráter religioso, cultural, filosófico, político, emocional.`,
          thirdTextVolunteering: `Quando nos referimos ao voluntário contemporâneo, engajado, participante e consciente,
          diferenciamos também o seu grau de comprometimento: ações mais permanentes, que implicam em maiores compromissos,
          requerem um determinado tipo de voluntário, e podem levá-lo inclusive a uma "profissionalização voluntária"; existem
          também ações pontuais, esporádicas, que mobilizam outro perfil de indivíduos.`
        },
        sucessModal: {
          closeButton: 'mdi-close',
          checkIcon: 'mdi-checkbox-marked-circle'
        },
        attendance: {
          channelsTitle: 'Canais disponíveis:',
          phoneIcon: 'mdi-phone',
          phoneText: 'Telefone: 81 9999-9999',
          whatsappIcon: 'mdi-whatsapp',
          whatsappText: 'Whatsapp: 81 99999-9999',
          questionsTitle: 'Perguntas frequentes'
        }
      }
    }
  }
}
