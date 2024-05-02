<template>
  <v-footer style="background-color: #45312c">
    <v-container>
      <v-row style="display: flex; justify-content: center; align-items: center" class="ptserrifText">
        <v-col :cols="12" :lg="12" class="d-flex justify-lg-center">
          <ul class="footer-list d-flex flex-lg-row flex-column" style="padding: 32px; list-style: none !important">
            <li class="me-6"><NuxtLink to="/artikel"> Artikel</NuxtLink></li>
            <li class="me-6"><NuxtLink to="/berita"> Berita</NuxtLink></li>
            <li class="me-6"><NuxtLink to="/kursus"> Kursus</NuxtLink></li>
            <li class="me-6"><NuxtLink to="/about"> Tentang</NuxtLink></li>
            <li class="me-6"><NuxtLink to="/donate"> Donasi</NuxtLink></li>
            <li class="me-6"><NuxtLink to="/kontak"> Hubungi</NuxtLink></li>
            <li class="me-6"><NuxtLink to="/donate"> Imavi</NuxtLink></li>
          </ul>
        </v-col>

        <!-- <v-col :cols="12" :lg="4">
          <ul class="footer-list" style="padding: 32px; list-style: none">
            <li><NuxtLink to="/privacy"> Kebijaksanaan Kerahasiaan</NuxtLink></li>
            <li><NuxtLink to="/tou"> Syarat Penggunaan</NuxtLink></li>
            <li><NuxtLink to="/kontak"> Hubungi</NuxtLink></li>
            <li><NuxtLink to="/volunteer"> Berkontribusi</NuxtLink></li>
            <li><NuxtLink to="https://www.imavi.org/"> IMAVI</NuxtLink></li>
          </ul>
        </v-col> -->
        <v-col :cols="12" :lg="8" style="display: flex; justify-content: end">
          <div>
            <NuxtLink to="/kontak" target="_blank"
              ><v-icon style="border-radius: 50%; background-color: #25d366" class="pa-lg-8 pa-8 whatsapp-icon text-h5 text-lg-h4"><i style="color: #ffffff" class="fa-brands fa-whatsapp"></i></v-icon
            ></NuxtLink>
            <NuxtLink to="/donate" target="_blank">
              <div class="whatsapp-icon2 text-h5 text-lg-h5 donate-icon">Donasi</div>
            </NuxtLink>
          </div>
        </v-col>
      </v-row>
      <div class="text-center text-white">
        <p>
          @2019-2023 Institutum Theologicum Ioannis Mariae Vianney Surabayanum<br />
          all rights reserved
        </p>
      </div>
    </v-container>
  </v-footer>
</template>

<style>
@media screen and (max-width: 600px) {
  .whatsapp-icon2 {
    width: 30% !important;
    right: 17% !important;
  }
  .whatsapp-icon {
    bottom: 20px !important;
    right: 1% !important;
  }

  .donate-icon {
    width: 8rem !important;
  }
}

.donate-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50px;
  background-color: #25d366;
  color: #ffffff;
}
.whatsapp-icon {
  position: fixed;
  bottom: 20px;
  right: 50px; /* Sesuaikan dengan posisi horizontal yang diinginkan */
  z-index: 999;
}
.whatsapp-icon2 {
  position: fixed;
  bottom: 30px;
  right: 120px; /* Sesuaikan dengan posisi horizontal yang diinginkan */
  z-index: 999;
}
.footer-list a {
  color: #ffffff;
}
.footer-list li {
  margin-bottom: 20px;
}
</style>
