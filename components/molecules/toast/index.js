/* eslint-disable require-jsdoc */
import Toast from './ToastMessage.vue'

function init(Vue, globalOptions = {}) {
  let currentToast = null
  const componentKey = '$toast'

  function createComponent(options) {
    const component = new Vue(Toast)
    const componentOptions = {
      ...Vue.prototype[componentKey].globalOptions,
      ...options
    }

    Object.assign(component, componentOptions)
    document.body.appendChild(component.$mount().$el)

    return component
  }

  function show(message, options = {}) {
    if (currentToast) {
      currentToast.close()
      return
    }

    options.message = message
    currentToast = createComponent(options)
    currentToast.$on('statusChange', (isActive, wasActive) => {
      if (wasActive && !isActive) {
        currentToast.$nextTick(() => {
          currentToast.$destroy()
          currentToast = null
        })
      }
    })
  }

  function shorts(options) {
    const themes = [
      {
        color: 'success',
        icon: 'mdi-check'
      },
      {
        color: 'info',
        icon: 'mdi-alert-circle'
      },
      {
        color: 'write',
        icon: 'mdi-alert-circle'
      },
      {
        color: 'error',
        icon: 'mdi-alert-circle-outline'
      }
    ]
    const methods = {}

    themes.forEach((theme) => {
      methods[theme.color] = (message, shortOptions) =>
        show(message, {
          color: theme.color,
          icon: theme.icon,
          ...options,
          ...shortOptions
        })
    })

    return methods
  }

  Vue.prototype[componentKey] = Object.assign(show, {
    globalOptions,
    ...shorts(globalOptions)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(init)
}

export default init
