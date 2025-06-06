<template>
  <div v-if="loading">loading...</div>

  <!-- must wait for data to be loaded by the async function getItem() -->
  <article v-if="people.properties && !loading">
    <h1>{{ people.properties.name }}</h1>

    <section style="min-height: 540px">
      <div v-if="loading" class="loading my-3">loading...</div>
      <ul v-else class="list-group mb-0">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          v-for="(value, key) in people.properties"
          :key="key"
        >
          <span>{{ key }}</span>
          <span>{{ value }}</span>
        </li>
      </ul>
    </section>
    
  </article>

  <p>
    
  </p>
  <router-link class="btn btn-outline-primary" to="/">Retour à la liste</router-link>
</template>

<script>
export default {
  props: {
    uid: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      loading: false,
      people: {
        properties: {},
        description: 'Default description',
        uid: '-1'
      }
    };
  },
  async mounted() {
    await this.getItem(this.uid);
  },
  methods: {
    async getItem(uid) {
      this.loading = true;
      console.log(this.uid);
      const response = await this.$http.get(`https://www.swapi.tech/api/people/${uid}`);
      console.log(response.data);
      this.people = { ...response.data.result };
      this.loading = false;
    }
  },
  watch: {
    $route() {
      this.getItem(this.uid);
    }
  }
};
</script>
