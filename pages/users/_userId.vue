<template>
  <section>
    <div>
      <nuxt-link to="/">TOPへ戻る</nuxt-link>
    </div>
    <div>
      <h3>{{ user.id }}</h3>
      <img :src="user.profile_image_url" width="120" :alt="`${user.id}さんの画像`" />
    </div>
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
  </section>
</template>

<script>
export default {
  async asyncData({ route, app }) {
    const user = await app.$axios.$get(`https://qiita.com/api/v2/users/${route.params.userId}`)
    const items = await app.$axios.$get(`https://qiita.com/api/v2/items?query=user:${route.params.userId}`)
    return {
      user,
      items
    }
  }
}
</script>
