<template>
  <!-- <v-row style="height: 100%; display: flex; justify-content: center; width: 100%; margin-top: 12px">
    <div style="width: 30%; max-height: 50%">
      <div>
        <img src="assets/biblenotext.png" alt="" />
      </div>
    </div>
    <div style="margin-top: 4px; width: 60%">
      <div style="text-align: left">
        <h1 class="text-lg-h3 mb-2" style="color: #333333">Studi Kitab Suci</h1>
        <h3 class="text-lg-h6">
          The Big Oxmox advised her not to do so, <br />
          because there were thousands of bad Commas.
        </h3>
        <p class="mt-1" style="color: rgba(0, 0, 0, 0.5)">Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
        <div class="mt-3">
          <div style="margin-bottom: 20px; display: flex; align-items: center">
            <img style="margin-right: 16px" src="assets/time.svg" alt="" />
            <h3>08.00 am - 05.00 pm</h3>
          </div>
          <div style="display: flex; align-items: center">
            <img style="margin-right: 16px" src="assets/maps.svg" alt="" />
            <h3>444 Branch Street Adrian, MI 49221</h3>
          </div>
        </div>
      </div>
    </div>
  </v-row>

  <hr style="margin-top: 32px" />
  <v-container>
    <v-row style="margin-top: 8px">
      <div style="display: flex; margin-left: 40px">
        <div style="display: flex; flex-direction: column; margin-right: 116px; align-items: center; justify-content: center">
          <h1 class="text-lg-h3">03</h1>
          <p style="align-self: center" class="text-lg-h6">Aug</p>
        </div>
        <div style="margin-right: 116px">
          <img src="assets/biblestudy.png" style="max-height: 20vh" alt="" />
        </div>
        <div style="display: flex; align-items: center; margin-right: 116px">
          <img style="margin-right: 16px" src="assets/time.svg" alt="" />
          <h3>08.00 am - 05.00 pm</h3>
        </div>
        <div style="display: flex; align-items: center; margin-right: 116px">
          <img style="margin-right: 16px" src="assets/maps.svg" alt="" />
          <h3>444 Branch Street Adrian, MI 49221</h3>
        </div>
      </div>
    </v-row>
  </v-container>
  <hr />
  <v-container>
    <v-row>
      <div style="display: flex; margin-left: 40px">
        <div style="display: flex; flex-direction: column; margin-right: 116px; align-items: center; justify-content: center">
          <h1 class="text-lg-h3">03</h1>
          <p style="align-self: center" class="text-lg-h6">Aug</p>
        </div>
        <div style="margin-right: 116px">
          <img src="assets/biblestudy.png" style="max-height: 20vh" alt="" />
        </div>
        <div style="display: flex; align-items: center; margin-right: 116px">
          <img style="margin-right: 16px" src="assets/time.svg" alt="" />
          <h3>08.00 am - 05.00 pm</h3>
        </div>
        <div style="display: flex; align-items: center; margin-right: 116px">
          <img style="margin-right: 16px" src="assets/maps.svg" alt="" />
          <h3>444 Branch Street Adrian, MI 49221</h3>
        </div>
      </div>
    </v-row>
  </v-container>
  <hr /> -->

  <v-row class="d-flex justify-lg-center" style="margin-bottom: 20px; margin-top: 16px">
    <v-col :cols="12" :lg="4" class="ms-lg-12">
      <div>
        <v-img src="assets/biblenotext.png" />
      </div>
    </v-col>
    <v-col :cols="12" :lg="7">
      <div>
        <h1 class="text-h3 mb-2" style="color: #333333">Studi Kitab Suci</h1>
        <h3 class="text-h5 font-weight-bold">The Big Oxmox advised her not to do so, because there were thousands of bad Commas.</h3>
        <p class="mt-1" style="color: rgba(0, 0, 0, 0.5)">Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
        <div class="mt-3">
          <div style="margin-bottom: 20px; display: flex; align-items: center">
            <img style="margin-right: 16px" src="/assets/time.svg" alt="" />
            <h3>08.00 am - 05.00 pm</h3>
          </div>
          <div style="display: flex; align-items: center">
            <img style="margin-right: 16px" src="/assets/maps.svg" alt="" />
            <h3>444 Branch Street Adrian, MI 49221</h3>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
  <Eventrow />
</template>
<style></style>
