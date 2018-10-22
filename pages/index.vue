<template>
  <div>
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
