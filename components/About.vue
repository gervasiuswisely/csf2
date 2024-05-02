<template>
  <div style="margin-top: 48px">
    <v-container>
      <v-row>
        <v-col :cols="12" :lg="6" :md="6">
          <div class="d-flex justify-lg-end" style="height: 100%">
            <img src="/assets/cimperson.png" alt="" />
            <!-- <div style="background-image: url('/assets/alkitaBg.png'); width: 100%">
              <div class="cimaboutimg">
              </div>
            </div> -->
          </div>
        </v-col>
        <v-col :cols="12" :lg="6" :md="6" style="margin-top: 20px">
          <Heading1 :text="'Tentang Kami'" />
          <SubHeading :subtext="'Seorang murid Kristus perlu mengenal iman dengan baik '" />

          <p class="opensansText mt-2" style="font-size: 18px; margin-top: 20px; color: #272727; line-height: 160%">
            Bukan hanya sekedar membaca Sabda Allah, doa dan devosi tetapi perlu pemahaman yang baik akan Sabda Allah dan ajaran gereja melalui pembinaan iman yang baik dan benar seperti yang dilakukan di Centrum Sacra Familia.
            <br />
            <i>“Fides quaerens intellectum” St. Anselmus —iman mencari pengertian (pemahaman)”</i>
          </p>
          <!-- <List /> -->
          <NuxtLink to="/about"><Button style="padding: 16px; margin-top: 16px" :btnTitle="'Tentang Kami'" /></NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
