<template>
  <div>
    <p>
      /users/{{ userId }}.vue
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.userId
    }
  }
}
</script>
