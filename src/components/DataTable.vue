<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Data Table</v-card-title>
          <v-card-subtitle>
            <p class="description">
              Using the data at
              <a href="https://random-data-api.com/"
                >https://random-data-api.com/</a
              >, populate the table below with headers and make it searchable.
              Also, expand the table to full width of the container. Let Bob
              know when complete.
            </p>
          </v-card-subtitle>
          <v-data-table
            :headers="headers"
            :items="allItems"
            :search="search"
            class="elevation-1"
            :items-per-page="5"
            full-width
          >
            <template v-slot:top>
              <v-text-field
                v-model="search"
                label="Search"
                class="mx-4"
              ></v-text-field>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
      ],
    };
  },
  computed: {
    ...mapGetters(['allItems']),
  },
  mounted() {
    axios
      .get('https://random-data-api.com/api/users/random_user?size=10')
      .then((response) => {
        const items = response.data.map((user) => ({
          id: user.id,
          name: `${user.first_name} ${user.last_name}`,
          email: user.email,
        }));
        this.$store.commit('setItems', items);
      });
  },
};
</script>

<style scoped>
.v-container {
  width: 100%;
  max-width: 100%;
}
.v-card {
  width: 100%;
}
.description {
  white-space: normal;
  word-wrap: break-word;
}
</style>
