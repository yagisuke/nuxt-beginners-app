<template>
  <div>
    <h2>index page</h2>
    <ul>
      <li>
        <nuxt-link to="/login">ログインページへ</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/authed-route">認証が必要なページへ</nuxt-link>
      </li>
    </ul>
    <h2>Qiita list</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        <b>
          {{ item.title }}
          <nuxt-link :to="`/users/${item.user.id}`">{{ item.user.id }}</nuxt-link>
        </b>
        <div>
          <a :href="item.url" target="_blank">
            {{ item.body.slice(0, 100) }}
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store }) {
    if (store.getters['items'].length) return
    await store.dispatch('fetchItems')
  },
  computed: mapGetters(['items'])
}
</script>
