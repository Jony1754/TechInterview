<template>
  <v-app>
    <v-app-bar app color="#247d89" dark>
      <div class="d-flex align-center">
        <v-avatar size="50">
          <img
            alt="Profile Picture"
            src="https://media.licdn.com/dms/image/D4E03AQH6_u9FBd2Ywg/profile-displayphoto-shrink_200_200/0/1689998080321?e=1721260800&v=beta&t=8i3o9rC8oIne-xGvMxkvRZNdywdejgVEFdHnmHsw4H8"
          />
        </v-avatar>
        <v-toolbar-title class="white--text">Table solution</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
        class="white--text"
        href="https://github.com/Jony1754"
        target="_blank"
      >
        <v-icon left>mdi-github</v-icon>GitHub
      </v-btn>
      <v-btn
        text
        class="white--text"
        href="https://linkedin.com/in/ariasej"
        target="_blank"
      >
        <v-icon left>mdi-linkedin</v-icon>LinkedIn
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.v-avatar img {
  border-radius: 100%;
  object-fit: contain;
  width: 100%;
}
.v-avatar {
  margin-right: 10px;
  margin-left: 10px;
}
</style>
