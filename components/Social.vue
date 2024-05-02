<template>
  <div>
    <button v-for="(ikon, index) in socialIcon" :key="index">
      <i
        :class="{
          'fa-brands fa-facebook': ikon.icon === 'fa-brands fa-facebook',
          'fa-brands fa-twitter': ikon.icon === 'fa-brands fa-twitter',
          'fa-brands fa-linkedin': ikon.icon === 'fa-brands fa-linkedin',
          'fa-brands fa-instagram': ikon.icon === 'fa-brands fa-instagram',
          socialactive: ikon.isStatus === true,
          socialinactive: ikon.isStatus === false,
        }"
        style="margin-left: 20px"
        @click="changecolor(ikon.isStatus, index)"
      ></i>
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    socialIcon: [
      {
        icon: 'fa-brands fa-facebook',
        isStatus: false,
      },
      {
        icon: 'fa-brands fa-twitter',
        isStatus: false,
      },
      {
        icon: 'fa-brands fa-linkedin',
        isStatus: false,
      },
      {
        icon: 'fa-brands fa-instagram',
        isStatus: false,
      },
    ],
  }),
  methods: {
    changecolor(status, index) {
      for (const i in this.socialIcon) {
        this.socialIcon[i].isStatus = false;
      }
      // console.log('awal status', this.socialIcon[index].isStatus);
      status = this.socialIcon[index].isStatus ? (this.socialIcon[index].isStatus = false) : (this.socialIcon[index].isStatus = true);
      // console.log('index: ', index);
      // console.log('akhir status', status);
    },
  },
};
</script>

<style>
.socialactive {
  color: rgba(255, 255, 255, 1);
}
.socialinactive {
  color: rgba(255, 255, 255, 0.3);
}
</style>
