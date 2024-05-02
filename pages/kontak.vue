
import { NuxtLink } from '#build/components';
<template>
  <v-container class="mt-16 ptserrifText h-100">
    <h1 class="mt-4 font-weight-bold text-h4">Hubungi</h1>
    <p  style="margin-bottom: 20px; margin-top: 24px;">Kantor Pusat Studi Teologi Awam Centrum Ivan Merz Keuskupan Surabaya</p>
    <p style="margin-bottom: 20px;">Jl. Kalisari No.9 Surabaya, Jawa Timur 6112</p>
    <p style="margin-bottom: 20px;display: flex;">Email : <ul class="ms-5"><li > <p style="color: #0b9948;">susananggaraini.cim.2023@gmail.com</p></li> <li> <p style="color: #0b9948;">susananggaraini.cim.2023@gmail.com</p></li></ul> </p>
    <h4>Hubungi :</h4>
    <br>
    <p style="margin-bottom: 20px;"> <NuxtLink to="https://api.whatsapp.com/send/?phone=6281269905502&text=Mengenai+Pendaftaran+Kursus+Teologi+Katolik+Centrum+Ivan+Merz+...&type=phone_number&app_absent=0" target="_blank"><v-icon  style="background-color: #0b9948; color:#ffffff;border-radius: 50%" class="fa-brands fa-whatsapp"></v-icon></NuxtLink> 081269905502 - Galan Suswardana </p>

    <p style="margin-bottom: 20px;"> <NuxtLink   to="https://api.whatsapp.com/send/?phone=628121091953&text=Mengenai+Pendaftaran+Kursus+Teologi+Katolik+Centrum+Ivan+Merz+...&type=phone_number&app_absent=0" target="_blank"><v-icon  style="background-color: #0b9948; color:#ffffff;border-radius: 50%" class="fa-brands fa-whatsapp"></v-icon> </NuxtLink> 08121091953 - Susan Anggraini</p>

    <p style="margin-bottom: 20px;"> <NuxtLink  to="https://api.whatsapp.com/send/?phone=628113113182&text=Mengenai+Pendaftaran+Kursus+Teologi+Katolik+Centrum+Ivan+Merz+...&type=phone_number&app_absent=0" target="_blank"><v-icon  style="background-color: #0b9948; color:#ffffff;border-radius: 50%"  class="fa-brands fa-whatsapp"></v-icon></NuxtLink>  08113113182- Sekretariat CIM</p>
  </v-container>
</template>
