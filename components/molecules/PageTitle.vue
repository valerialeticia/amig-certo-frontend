<template>
  <div>
    <article class="d-flex align-center">
      <v-icon class="mr-2" :size="PageSubtitle ? '20': '30'" :color="PageSubtitle ? 'grey' : 'primary'">{{ icon }}</v-icon>
      <h2 :class="PageSubtitle ? 'text-h6 grey--text': 'primary--text'">{{ title }}</h2>
    </article>
    <p class="mt-5">{{ subtitle }}</p>
  </div>

</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    PageSubtitle: {
      type: Boolean,
      default: false
    }
  }
}
</script>
