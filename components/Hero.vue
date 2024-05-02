<template>
  <div class="hero mt-16">
    <div class="ptserifText" :style="{ width: '100%', height: '100vh', backgroundImage: `url(${'/img/logoCSF.png'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }">
      <div style="width: 100%; height: 100%; display: flex; align-items: center; background-image: url('/assets/indexbackground.png'); background-size: cover">
        <v-container>
          <div class="overlay-div" style="padding: 10px; font-weight: bold">
            <div class="content-container text-start" style="color: #ffffff">
              <h1 class="ptserifText mb-4 text-h4 text-xl-h2 text-lg-h2 text-center" style="line-height: 120%">{{ herotitle }}</h1>
              <!-- <p class="text-xl-h5 text-h5" style="line-height: 150%">
                Centrum Sacra Familia adalah pusat studi teologi katolik yang mendewasakan iman dan bersifat kontekstual bagi para rasul awam di tengah dinamika hidup Gereja dan masyarakat
              </p> -->
              <div class="buttonCta">
                <div class="d-flex justify-center">
                  <NuxtLink to="/daftar"><ButtonCTA style="width: 100%" :bgcolorcta="'var(--cta)'" :ctaTitle="'Gabung sekarang'" /></NuxtLink>
                </div>

                <div class="text-center d-flex justify-center">
                  <v-btn color="primary" class="d-none">
                    Open Dialog

                    <!-- <v-dialog v-model="dialog" style="overflow: hidden" activator="parent" width="auto">
                      <v-card style="overflow: hidden">
                        <div class="d-flex justify-end">
                          <v-card-actions>
                            <v-btn color="primary" block @click="tutupDialog()"><i style="border-radius: 50%; padding: 8px; background-color: var(--variable-collection-CIM)" class="text-white fa fa-close"></i></v-btn>
                          </v-card-actions>
                        </div>

                        <v-card-text style="display: flex; justify-content: center; align-items: center">
                          <v-row class="d-flex justify-center">
                            <v-col :cols="12" :sm="5" :md="6" :lg="5" class="d-flex justify-center">
                              <div style="height: 300px">
                                <img src="/img/poster1.jpeg" style="height: 100%" alt="" />
                              </div>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-dialog> -->
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
        </v-container>
      </div>
    </div>
    <!-- <div style="background-color: black; width: 100%"></div> -->
  </div>
</template>

<script>
// import { Button, ButtonCTA } from '#build/components';
import { ref, onMounted } from 'vue';
// import { useDialog } from 'vuetify';
export default {
  props: {
    herotitle: String,
  },
  data() {
    dialog: true;
    return {
      dialog: false,
    };
  },
  methods: {
    openDialog() {
      this.dialog = true;
      // console.log(this.dialog);
    },
    tutupDialog() {
      this.dialog = false;
      // console.log('masuk');
    },
  },
  mounted() {
    this.dialog = true;
  },
  // setup() {
  //   let dialog = true;
  //   onMounted(() => {
  //     dialog = true;
  //     // console.log(dialog);
  //   });
  //   const tutupDialog = () => {
  //     // console.log(dialog);
  //     dialog = false;
  //     return dialog;
  //   };
  //   return {
  //     dialog,
  //     tutupDialog,
  //   };
  // },
};
</script>

<style>
@media screen and (min-width: 1280px) {
  .hero .overlay-div {
    width: 100%;
  }
}
.ptserifText {
  font-family: 'PTSerif' !important;
}
</style>
