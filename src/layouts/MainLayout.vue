<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer elevated class="bg-white text-primary">
    <q-tabs
      v-model="tab"
      class="bg-secondary text-white shadow-2"

    >
      <q-route-tab
        icon="home"
        to="/"
        exact
      />
      <q-route-tab
        icon="mail"
        to="/alarms"
        exact
      />
    </q-tabs>
    </q-footer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>
