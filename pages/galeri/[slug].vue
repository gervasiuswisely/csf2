<template>
  <v-container class="mt-16">
    <v-row>
      <v-col :cols="12" :sm="6" :md="6" :lg="4" :xl="3" v-for="(images, index) in images.galleryItems" :key="index">
        <v-card class="mx-auto" max-width="344">
          <div v-if="isPhoto(images.imageLink)">
            <v-img @click="showFullScreenImage(index)" :src="images.imageLink" :height="200"> </v-img>
            <v-card-title class="text-center"> {{ images.title }} </v-card-title>
          </div>

          <div v-else>
            <video @click="showFullScreenImage(index)" id="videoPlayer" style="height: 200px; width: 100%">
              <source :src="images.imageLink" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <v-card-title> {{ images.title }} </v-card-title>
            <button class="w-100" @click="togglePlayPause">
              <p class="text-center" style="width: 100%">{{ isPlaying ? 'Pause' : 'Play' }}</p>
            </button>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="fullscreenDialog" fullscreen hide-overlay>
      <v-img v-if="isPhoto(fullscreenImage)" :src="fullscreenImage" contain @click="closeFullScreenImage"></v-img>
      <video v-else :ref="`fullscreenVideo`" autoplay loop style="height: 100%; width: 100%" @click="closeFullScreenImage">
        <source :src="fullscreenImage" type="video/mp4" />
      </video>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isPlaying: false,
    fullscreenDialog: false,
    fullscreenImage: '',
  }),
  methods: {
    togglePlayPause() {
      const videoPlayer = document.getElementById('videoPlayer');

      if (videoPlayer.paused || videoPlayer.ended) {
        videoPlayer.play();
        this.isPlaying = true;
      } else {
        videoPlayer.pause();
        this.isPlaying = false;
      }
    },
    showFullScreenImage(index) {
      this.fullscreenDialog = true;
      this.fullscreenImage = this.images.galleryItems[index].imageLink;
    },
    closeFullScreenImage() {
      this.fullscreenDialog = false;
      this.fullscreenImage = '';
    },
  },
  setup() {
    let images = ref({});
    const runTimeConfig = useRuntimeConfig();
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.imavi.org/imavi/galleries/view/' + useRoute().params.slug, {
          headers: {
            Id: runTimeConfig.public.Id,
            Secret: runTimeConfig.public.Secret,
            partner: runTimeConfig.public.Partner,
          },
        });
        console.log(response);
        const hasil = await response.json();
        images.value = hasil;
        console.log(images.value);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const isPhoto = (fileName) => {
      const videoExtensions = ['jpeg', 'jpg', 'png', 'gif'];
      const fileExtension = fileName.split('.').pop().toLowerCase();
      return videoExtensions.includes(fileExtension);
    };

    onMounted(async () => {
      await fetchData();
    });
    return {
      images,
      isPhoto,
    };
  },
};
</script>
