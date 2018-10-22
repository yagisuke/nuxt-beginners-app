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
import { mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: this.user.id
    }
  },
  async asyncData({ route, store, redirect }) {
    // ユーザ情報を取得していたら再取得はしない
    if (store.getters['users'][route.params.userId]) return

    try {
      await store.dispatch('fetchUserInfo', { id: route.params.userId })
    } catch (e) {
      redirect('/')
    }
  },
  computed: {
    ...mapGetters(['users', 'userItems']),
    user() {
      return this.users[this.$route.params.userId]
    },
    items() {
      return this.userItems[this.$route.params.userId] || []
    }
  }
}
</script>
