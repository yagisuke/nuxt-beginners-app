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
export default {
  async asyncData({ app }) {
    const items = await app.$axios.$get('https://qiita.com/api/v2/items?query=tag:webgl')
    return {
      items
    }
  }
}
</script>

<style>
</style>
