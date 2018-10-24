<template>
  <div>
    <h2>login</h2>
    <p>
      <button type="button" @click="login">ログイン</button>
      <br>
      <nuxt-link to="/">トップページへ戻る</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      const cookies = new Cookies()
      cookies.set('credential', 'true', { maxAge: 90 })
      this.$router.push('/')
    }
  }
}
</script>
