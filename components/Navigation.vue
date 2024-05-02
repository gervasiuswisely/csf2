<template>
  <div class="navbar monserrat-text bg-blue">
    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
    <v-app-bar style="padding-bottom: 0px; width: 100vw">
      <v-app-bar-nav-icon class="d-lg-none d-flex d-md-none d-xl-none" variant="text" @click.stop="drawer = !drawer"> <i class="fa fa-list" style="color: #27674e"></i></v-app-bar-nav-icon>
      <v-container style="margin-top: 0">
        <v-row class="monserratText" style="display: flex; align-items: center; justify-content: center">
          <v-col :cols="8" :xl="8" :md="2" :lg="8" :sm="6" class="d-flex align-center">
            <div style="height: 50px"><img src="/img/logoCSF.png" style="height: 100%" alt="" /></div>
            <h4 class="primaryColor">Centrum Sacra Familia</h4>
          </v-col>

          <!-- <v-col :cols="4" :xl="7" :lg="6" :md="8" :sm="6" class="d-none d-md-flex d-sm-none d-lg-flex justify-center">
            <div class="app-bar-link text-right d-flex">
              <div class="nuxtlink">
                <NuxtLink to="/" exact :class="{ 'active-link': isCurrentPage('/') }">Beranda</NuxtLink>
              </div>
              <div class="nuxtlink">
                <NuxtLink to="/about" exact :class="{ 'active-link': isCurrentPage('/about') }"><p class="text-center">Tentang CSF</p></NuxtLink>
              </div>
              <div class="nuxtlink">
                <NuxtLink to="/program/" exact :class="{ 'active-link': isCurrentPage('/program/') }">Program</NuxtLink>
              </div>
              <div class="nuxtlink">
                <NuxtLink to="/artikel" :class="{ 'active-link': isCurrentPage('/artikel') }"> Artikel</NuxtLink>
              </div>
              <div class="nuxtlink">
                <NuxtLink to="/berita" :class="{ 'active-link': isCurrentPage('/berita') }"> Berita</NuxtLink>
              </div>
              <div class="nuxtlink">
                <NuxtLink to="/kontak" exact :class="{ 'active-link': isCurrentPage('/kontak') }"><p style="text-align: center">Kontak kami</p></NuxtLink>
              </div>
              <div class="nuxtlink">
                <NuxtLink to="/galeri" exact :class="{ 'active-link': isCurrentPage('/galeri') }">Galeri</NuxtLink>
              </div>
            </div>
          </v-col> -->

          <v-col :cols="4" :xl="2" :lg="2" :md="2" :sm="4" :xs="2" class="d-flex justify-end">
            <NuxtLink to="/daftar"> <Button class="daftarbtn font-weight-medium pa-1 pa-lg-4" :btnTitle="'Daftar Kursus'"> </Button> </NuxtLink>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary style="background-color: #27674e">
      <v-list>
        <v-list-item>
          <v-menu>
            <template v-slot:activator="{ props }">
              <NuxtLink class="text-grey navstyle" v-bind="props" to="/"> Beranda</NuxtLink>
            </template>
          </v-menu>
        </v-list-item>
        <v-list-item>
          <v-menu>
            <template v-slot:activator="{ props }">
              <NuxtLink class="text-grey navstyle" to="/about" v-bind="props"> Tentang</NuxtLink>
            </template>
          </v-menu>
        </v-list-item>
        <v-list-item>
          <v-menu>
            <template v-slot:activator="{ props }">
              <NuxtLink class="text-grey navstyle" v-bind="props" to="/program"> Program</NuxtLink>
            </template>
          </v-menu>
        </v-list-item>

        <v-list-item>
          <v-menu>
            <template v-slot:activator="{ props }">
              <NuxtLink class="text-grey navstyle" v-bind="props" to="/artikel"> Artikel</NuxtLink>
            </template>
          </v-menu>
        </v-list-item>
        <v-list-item>
          <v-menu>
            <template v-slot:activator="{ props }">
              <NuxtLink class="text-grey navstyle" v-bind="props" to="/kontak"> Kontak Kami</NuxtLink>
            </template>
          </v-menu>
        </v-list-item>
        <v-list-item>
          <v-menu>
            <template v-slot:activator="{ props }">
              <NuxtLink class="text-grey navstyle" v-bind="props" to="/galeri"> Galeri</NuxtLink>
            </template>
          </v-menu>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    group: false,
    drawer: false,
    navbar: [
      {
        title: 'HOME',
        value: 'home',
      },
      // {
      //   title: 'ABOUT',
      //   value: 'about',
      // },
      // {
      //   title: 'JOIN US',
      //   value: 'join',
      // },
      // {
      //   title: "GARUM'S LIFE",
      //   value: 'garum',
      // },
      // {
      //   title: 'ARTICLE & PUBLICATION',
      //   value: 'article',
      // },
      {
        title: 'CONTACT',
        value: 'contact',
      },
    ],
    dropdown: [
      {
        title: 'ABOUT',
        link1: 'Our Profile',
        link2: 'Our Persons',
        link3: 'Vision & Mission',
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    isCurrentPage(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style>
.montserrat-text {
  font-family: 'Monserrat';
}
.app-bar-link a.active-link {
  /* Ganti dengan gaya khusus untuk tautan aktif */
  color: var(--primary);
  font-weight: bold;
}

.app-bar-link a {
  font-size: 16px;
  text-decoration: none;
  color: #85868c;
}
.app-bar-link .nuxtlink {
  margin-right: 14px;
}
.app-bar-link a:hover {
  color: var(--primary);
}
@media screen and (max-width: 600px) {
  .app-bar-link a {
    display: none;
  }
  .navbar .row .col :nth-child(1) {
    margin-right: 12px;
  }
}
.dropdownlink a {
  text-decoration: none;
  color: #85868c;
}
.dropdownlink a:hover {
  color: #00509a;
}
.montserrat-text {
  font-family: 'Montserrat', sans-serif;
}
.daftarbtn {
  font-size: 12px;
  color: #f0f0f0;
}
</style>

<!-- <template>
  <div class="navigation">
    <div class="frame">
      <div class="group-2">
        <div class="frame-wrapper">
          <div class="frame-2">
            <div class="text-wrapper">Beranda</div>
            <div class="text-wrapper-2">Why CIM?</div>
            <div class="text-wrapper-2">Kursus</div>
            <div class="text-wrapper-2">Artikel</div>
            <div class="text-wrapper-2">Kontak Kami</div>
          </div>
        </div>
      </div>
    </div>
    <div class="group-3">
      <div class="overlap-group-2">
        <div class="text-wrapper-3">Daftar Kursus</div>
      </div>
    </div>
    <img class="img" alt="Frame" src="/img/frame-3640.png" />
  </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style>
.navigation {
  background-color: #ffffff;
  height: 82px;
  left: -1px;
  position: absolute;
  top: 0;
  width: 1440px;
}

.navigation .frame {
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  left: 409px;
  position: absolute;
  top: 28px;
}

.navigation .group-2 {
  height: 22px;
  position: relative;
  width: 621px;
}

.navigation .frame-wrapper {
  height: 22px;
}

.navigation .frame-2 {
  align-items: flex-start;
  display: inline-flex;
  gap: 46px;
  position: relative;
}

.navigation .text-wrapper {
  color: var(--variable-collection-CIM);
  font-family: 'Montserrat', Helvetica;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.navigation .text-wrapper-2 {
  color: #8a948c;
  font-family: 'Montserrat', Helvetica;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.navigation .group-3 {
  height: 54px;
  left: 1222px;
  position: absolute;
  top: 14px;
  width: 181px;
}

.navigation .overlap-group-2 {
  background-color: var(--variable-collection-CIM);
  border-radius: 8px;
  height: 54px;
  position: relative;
  width: 179px;
}

.navigation .text-wrapper-3 {
  color: #ffffff;
  font-family: 'Montserrat', Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: 25px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 17px;
  width: 128px;
}

.navigation .img {
  height: 45px;
  left: 51px;
  position: absolute;
  top: 18px;
  width: 259px;
}
</style> -->
