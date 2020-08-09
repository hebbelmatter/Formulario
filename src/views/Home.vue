<template>
  <div class="home">
    <NavigationBar />
    <vue-page-transition name="fade">
      <router-view></router-view>
    </vue-page-transition>
  </div>
</template>

<script>

import NavigationBar from '@/components/NavigationBar.vue'
import HomeContentNurse from '@/components/Nurse/HomeContentNurse.vue'

export default {
  name: 'Home',
  components: {
    NavigationBar,
    HomeContentNurse
  },
  data () {
    return {
      name: '',
      lastName: '',
      rol: ''
    }
  },
  mounted () {
    if (this.$storage.get('currentUser') != '') {
      let savedUser = this.$storage.get('currentUser');

      this.name = savedUser.name;
      this.lastName = savedUser.lastName;
      this.rol = savedUser.rol;
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
