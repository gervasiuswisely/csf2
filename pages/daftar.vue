<template>
  <!-- <v-container>
    <div class="mt-16">
      <h1>Under Construction</h1>

      untuk pendaftaran kursus bisa menghubungi contact person :
      <p style="margin-bottom: 20px; margin-top: 24px">
        <NuxtLink to="https://api.whatsapp.com/send/?phone=6281269905502&text=" target="_blank"><v-icon style="background-color: #0b9948; color: #ffffff; border-radius: 50%" class="fa-brands fa-whatsapp"></v-icon></NuxtLink>
        081269905502 - Galan Suswardana
      </p>

      <p style="margin-bottom: 20px">
        <NuxtLink to="https://api.whatsapp.com/send/?phone=628121091953&text=" target="_blank"><v-icon style="background-color: #0b9948; color: #ffffff; border-radius: 50%" class="fa-brands fa-whatsapp"></v-icon> </NuxtLink>
        08121091953 - Susan Anggraini
      </p>

      <p style="margin-bottom: 20px">
        <NuxtLink to="https://api.whatsapp.com/send/?phone=628113113182&text=" target="_blank"><v-icon style="background-color: #0b9948; color: #ffffff; border-radius: 50%" class="fa-brands fa-whatsapp"></v-icon></NuxtLink>
        08113113182- Sekretariat CIM
      </p>
      <p style="margin-bottom: 200px">
        <NuxtLink to="https://api.whatsapp.com/send/?phone=62818375580&text=" target="_blank"><v-icon style="background-color: #0b9948; color: #ffffff; border-radius: 50%" class="fa-brands fa-whatsapp"></v-icon></NuxtLink>
        0818375580- Pak Kiong
      </p>
    </div>
  </v-container> -->

  <v-stepper next-text="Selanjutnya" prev-text="Sebelumnya" color="green" style="position: relative" :items="['Info Seminar', 'Pendaftaran']" class="mt-16">
    <template v-slot:item.1>
      <v-card title="Detail Seminar" flat>
        <v-container>
          <div class="kelastersedia">
            <div class="kelastitle text-lg-center">
              <h1 class="text-h4" style="font-weight: bold">Info Seminar</h1>
              <p class="mt-4">Seminar CSF</p>
              <div style="height: 600px" class="mt-3">
                <img style="height: 100%" src="/img/poster1.jpeg" alt="" />
              </div>
            </div>
            <!-- <div class="listkelas">
              <h1 style="font-style: italic; margin-top: 8px">Pilih kelas</h1>
              <div class="kelaslist">
                <swiper
                  style="margin-top: 20px"
                  :slidesPerView="4"
                  :spaceBetween="10"
                  :navigation="true"
                  :breakpoints="{
                    100: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    600: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    960: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1280: {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
                    1920: {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
                  }"
                  :modules="modules"
                  class="mySwiper"
                >
                  <swiper-slide v-for="(images, index) in data.value" :key="index" style="border-radius: 15px" :class="{ kelasaktif: images.isclicked === true, kelasinaktif: images.isclicked === false }">
                    <div @click="handlekelasclick(index)" style="border-radius: 15px; padding: 16px; width: 90%">
                      <div class="d-flex">
                        <div style="width: 100%">
                          <div style="height: 200px; width: 100%; display: flex; justify-content: center">
                            <img src="/img/alumni.png" style="object-fit: contain" alt="" />
                          </div>
                        </div>
                        <div style="margin-left: auto">
                          <button>
                            <i :class="{ 'fa-regular fa-circle-check': images.isclicked === true, 'fa-regular fa-circle': images.isclicked === false }" style="color: #27674e"></i>
                          </button>
                        </div>
                      </div>

                      <div class="d-flex">
                        <div style="width: 100%">
                          <h1 class="text-h5" style="font-weight: bold">{{ images.cpName }}</h1>
                          <p style="font-size: 18px; margin-top: 8px">{{ images.name }}</p>
                        </div>
                      </div>
                      <div class="d-flex justify-center align-center mt-2">
                        <p class="me-1">Registrasi :</p>
                        <i class="fa fa-clock me-1" style="color: #27674e; font-size: 16px"></i>

                        <p class="">
                          {{ formatDate(images.registrationStartDate) }} -
                          {{ formatDate(images.registrationEndDate) }}
                        </p>
                      </div>
                      <div class="d-flex justify-center" style="margin-top: 16px">
                        <div class="d-flex me-2 align-center">
                          <i class="fa fa-calendar-days me-1" style="color: #27674e; font-size: 16px"></i>
                          <p class="">Setiap Hari {{ ' ' }} {{ ',' }} {{ ' ' }}{{ images.courseDay }}</p>
                        </div>
                        <div class="d-flex align-center">
                          <i class="fa fa-clock me-1" style="color: #27674e; font-size: 16px"></i>
                          <p class="">pk. {{ images.courseHour }}</p>
                        </div>
                      </div>

                      <hr style="margin-top: 16px" />
                      <p class="text-h5" style="color: #8a0d0d; font-weight: 600; text-align: center; margin-top: 16px">Biaya: {{ formatRupiah(images.price) }}</p>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div> -->
          </div>
        </v-container>
      </v-card>
      <div style="display: flex; justify-content: center">
        <i style="">Detail Seminar</i>
      </div>
    </template>

    <template v-slot:item.2>
      <v-card flat>
        <!-- <p>Kelas yang dipilih</p>
        <ol class="ms-5">
          <li class="text-h6" style="color: var(--variable-collection-CIM)" v-for="kelas in kelasStore">{{ kelas }}</li>
        </ol> -->
        <p>Harga yang harus dibayar : {{ kelasStore.price }}</p>
        <v-container>
          <div class="text-center">
            <h1 class="text-lg-h4 primaryColor" style="margin-top: 4px">Pendaftaran Seminar CSF</h1>
          </div>
          <div class="d-flex flex-column" style="justify-content: center; align-items: center">
            <!-- <v-btn
              :class="{
                active: activeNow.baru === true,
                notActive: !activeNow.baru,
              }"
              @click="
                handleSetActiveBaru();
                tampilkanKonten('baru');
              "
              style="margin-top: 20px; width: 40%; border-radius: 8px"
              >Peserta Baru</v-btn
            >
            <v-btn
              :class="{
                activedaftar: activeNow.daftar === true,
                notActivedaftar: !activeNow.daftar,
              }"
              @click="
                handleSetActiveDaftar();
                tampilkanKonten('daftar');
              "
              style="margin-top: 20px; width: 40%; margin-top: 12px; border-radius: 8px"
              >Peserta Lama</v-btn
            > -->

            <div>
              <v-form v-model="valid">
                <v-container class="mt-5">
                  <v-row>
                    <v-col :cols="12" :lg="7" style="border: 1px solid var(--variable-collection-CIM); border-radius: 50px">
                      <v-row style="padding: 20px">
                        <v-col cols="12" md="12">
                          <p>Email</p>
                          <v-text-field :rules="emailRules" v-model="selectedEmail" placeholder="Masukkan email anda" class="custom-text-field" required @input="validateEmail"> </v-text-field>
                          <p class="text-red">{{ emailError }}</p>
                        </v-col>

                        <v-col cols="12" md="12">
                          <p>Nama Lengkap</p>
                          <v-text-field v-model="selectedFullname" placeholder="Masukkan Nama Lengkap Anda" hide-details required @input="validateFullName"></v-text-field>
                          <p class="text-red">{{ fullNameError }}</p>
                        </v-col>

                        <v-col cols="12" md="12">
                          <p>Nama Panggilan</p>
                          <v-text-field v-model="selectedCallName" placeholder="Masukkan Nama Lengkap Anda" hide-details required @input="validateName"></v-text-field>
                        </v-col>

                        <!-- <v-col cols="12" md="12">
                          <p>Nama Baptis</p>
                          <v-text-field v-model="selectedBaptistName" placeholder="Masukkan Nama Lengkap Anda" hide-details required @input="validateBaptisname"></v-text-field>
                          <p class="text-red">{{ baptistNameError }}</p>
                        </v-col> -->

                        <!-- <v-col cols="12" md="12">
                          <p>Tanggal lahir</p>

                          <v-row>
                            <v-col cols="12" lg="4">
                              <v-select v-model="selectedDate" :items="tanggalOptions" placeholder="Pilih Tanggal" @input="validateDate"></v-select>
                              <p class="text-red">{{ dateError }}</p>
                            </v-col>
                            <v-col cols="12" lg="4">
                              <v-select v-model="selectedMonth" :items="bulanOptions" label="Pilih Bulan" @input="validateMonth"></v-select>
                              <p class="text-red">{{ monthError }}</p>
                            </v-col>
                            <v-col cols="12" lg="4">
                              <v-select v-model="selectedYear" :items="yearOptions" label="Pilih Tahun" searchable @input="validateYear"></v-select>
                              <p class="text-red">{{ yearError }}</p>
                            </v-col>
                          </v-row>
                        </v-col> -->

                        <v-col cols="12" md="12">
                          <p>Alamat</p>
                          <v-text-field v-model="selectedAlamat" :counter="150" label="Masukkan Alamat Tinggal Anda" hide-details required @input="validateAlamat"></v-text-field>
                          <p class="text-red">{{ alamatError }}</p>
                        </v-col>
                        <!-- <v-col cols="12" md="12">
                          <p>Keuskupan</p>

                          <v-select v-model="selectedKeuskupan" item-title="name" item-value="dioceseId" :items="listKeuskupan.value" label="Pilih Keuskupan" searchable return-object="" @input="validateKeuskupan"></v-select>
                          <p class="text-red">{{ keuskupanError }}</p>
                        </v-col>
                        <v-col cols="12" md="12" v-if="selectedKeuskupan !== null">
                          <p>Paroki</p>

                          <v-select v-model="selectedParoki" item-title="churchName" item-value="ParokiID" :items="selectedKeuskupan.parokis" label="Pilih Paroki" searchable return-object @input="validateParoki"></v-select>
                          <div>
                            <p>Paroki kamu tidak ditemukan? <NuxtLink style="color: #27674e; font-weight: bold; cursor: pointer" @click="showNewParoki()" to=""> isi disini</NuxtLink></p>

                            <v-text-field v-if="parokiClck" v-model="selectedNewParoki" :counter="150" label="Masukkan Paroki Anda" hide-details required @input="validateParoki"></v-text-field>
                            <p class="text-red">{{ parokiError }}</p>
                          </div>
                        </v-col> -->
                        <v-col cols="12" md="12">
                          <p>No Handphone/Whatsapp</p>
                          <v-text-field type="number" hide-spin-buttons="" model="selectedWhatsapp" :counter="10" label="Masukkan No Whatsapp Anda" hide-details required @input="validateWhatsapp"></v-text-field>
                          <p class="text-red">{{ whatsappError }}</p>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col :cols="12" :lg="4" class="ms-1 d-flex align-center">
                      <v-col :cols="12" :md="12" class="d-flex justify-center align-center flex-column">
                        <p style="margin-top: 16px; font-weight: 600">Unggah Bukti Pembayaran</p>
                        <p>No rekening : BCA 862-025-2230 a/n Lie Elly Setiowati</p>
                        <p style="color: #aeaeae; font-size: 12px; margin-top: 12px">Silahkan Upload Disini</p>
                        <h5>Upload Pembayaran Kelas 1</h5>
                        <v-file-input
                          v-model="paymentfile1"
                          style="margin-top: 12px; width: 50%"
                          :rules="rules"
                          accept="image/jpg, image/jpeg, image/png"
                          placeholder="Pick an avatar"
                          prepend-icon="fa fa-upload"
                          label="Unggah Bukti pembayaran"
                          @input="validatepaymentFile"
                        ></v-file-input>
                        <!-- <h5>Upload Pembayaran Kelas 2</h5>
                        <v-file-input
                          v-model="paymentfile2"
                          style="margin-top: 12px; width: 50%"
                          :rules="rules"
                          accept="image/jpg, image/jpeg, image/png"
                          placeholder="Pick an avatar"
                          prepend-icon="fa fa-upload"
                          label="Unggah Bukti pembayaran"
                          @input="validatepaymentFile"
                        ></v-file-input> -->
                        <p class="text-red">{{ paymentFileError }}</p>
                        <p style="background-color: #e4e4e4; color: #3a3f4d; font-size: 14px; padding: 4px; line-height: 150%">( Format JPG,PNG,JPEG max 2 MB<br />Bisa upload file lebih dari 1)</p>
                        <button @click.prevent="submitData" style="margin-top: 12px; padding: 16px; border-radius: 8px; width: 35%; background-color: var(--variable-collection-CIM); color: #ffffff">Kirim</button>
                        <button @click.prevent="clearRegisterInput" style="margin-top: 12px; padding: 16px; border-radius: 8px; width: 35%; background-color: var(--variable-collection-CIM); color: #ffffff">Hapus</button>
                      </v-col>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
          </div>
          <!-- <div v-if="tampilkan === 'daftar'">
            <v-row class="justify-center justify-center">
              <v-col :cols="12" :md="12">
                <div style="margin-top: 28px">
                  <p>No Handphone/Whatsapp</p>
                  <v-text-field style="width: 100%" v-model="selectedWhatsapp" :counter="10" label="Masukkan No Whatsapp Anda" hide-details required></v-text-field>
                </div>
              </v-col>
              <v-col :cols="12" :md="12" class="d-flex justify-center align-center flex-column">
                <p style="margin-top: 16px; font-weight: 600">Unggah Bukti Pembayaran</p>
                <p>No rekening : BCA 862-025-2230 a/n Lie Elly Setiowati</p>
                <p style="color: #aeaeae; font-size: 12px; margin-top: 12px">Silahkan Upload Disini</p>
                <h5>Upload Pembayaran Kelas 1</h5>
                <v-file-input
                  v-model="paymentfile1"
                  style="margin-top: 12px; width: 50%"
                  :rules="rules"
                  accept="image/jpg, image/jpeg, image/png"
                  placeholder="Pick an avatar"
                  prepend-icon="fa fa-upload"
                  label="Unggah Bukti pembayaran"
                  @input="validatepaymentFile(this)"
                ></v-file-input>
                <h5>Upload Pembayaran Kelas 2</h5>
                <v-file-input
                  v-model="paymentfile2"
                  style="margin-top: 12px; width: 50%"
                  :rules="rules"
                  accept="image/jpg, image/jpeg, image/png"
                  placeholder="Pick an avatar"
                  prepend-icon="fa fa-upload"
                  label="Unggah Bukti pembayaran"
                  @input="validatepaymentFile(this)"
                ></v-file-input>

                <p class="text-red">{{ paymentFileError }}</p>
                <p style="background-color: #e4e4e4; color: #3a3f4d; font-size: 14px; padding: 4px; line-height: 150%">( Format JPG,PNG,JPEG max 2 MB<br />Bisa upload file lebih dari 1)</p>
                <button @click.prevent="kirimdatabaru()" style="margin-top: 12px; padding: 16px; border-radius: 8px; width: 35%; background-color: var(--variable-collection-CIM); color: #ffffff">Kirim</button>
              </v-col>
            </v-row>
          </div> -->
        </v-container>
        <FormMessage :is-loading="isLoading" :form-message="formMessage" @checkLoading="checkLoading" />
      </v-card>
    </template>
  </v-stepper>
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Swiper, SwiperSlide } from 'swiper/vue';
// import VueUploadMultipleImage from 'vue-upload-multiple-image'

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { reactive } from 'vue';
import { useKelasStore } from '../stores/kelas';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
export default {
  data: () => ({
    rules: [
      (value) => {
        return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!';
      },
    ],
    emailRules: [
      (value) => {
        if (value) return true;

        return !value || 'You must enter a valid email';
      },
    ],
    allInput: [
      'selectedAlamat',
      'selectedEmail',
      'selectedCallName',
      'selectedFullname',
      'selectedWhatsapp',
      'selectedKeuskupan',
      'selectedMonth',
      'selectedDate',
      'selectedYear',
      'paymentfile1',
      'paymentfile2',
      'selectedParoki',
      'selectedBaptistName',
      'selectedNewParoki',
    ],
    parokiName: '',
    parokiId: null,
    parokiClck: false,
    paymentfile1: '',
    paymentfile2: '',
    emailError: '',
    fullNameError: '',
    callNameError: '',
    baptistNameError: '',
    dateError: '',
    monthError: '',
    yearError: '',
    alamatError: '',
    keuskupanError: '',
    parokiError: '',
    whatsappError: '',
    paymentFileError: '',

    valid: false,
    formMessage: '',
    isLoading: false,
    isActive: false,
    activeNow: {
      baru: true,
      daftar: false,
    },
    paymentFile: [],
    selectedNewParoki: null,
    selectedBaptistName: null,
    selectedCallName: null,
    selectedEmail: null,
    selectedFullname: null,
    selectedDate: null,
    selectedMonth: null,
    selectedYear: null,
    selectedAlamat: null,
    selectedKeuskupan: null,
    selectedParoki: null,
    selectedWhatsapp: null,
    currentYear: new Date().getFullYear(), // Tahun saat ini
    yearOptions: [],
    keuskupanOptions: [],
    bulanOptions: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    tanggalOptions: Array.from({ length: 31 }, (_, i) => (i + 1).toString()), // Membuat opsi tanggal dari 1 hingga 31
    tampilkan: 'baru',
    listkelas: [
      {
        certificateNumber: '69/12-21/CIM-KS/IMAVI/SBY',
        registrationStartDate: '2023-10-30',
        courseDay: 'Rabu',
        courseHour: '18.30',
        registrationEndDate: '2024-01-25',
        curriculaId: 'FwuK8JDMHLNPrbHww',
        curriculaName: 'Pastoral Kitab Suci',
        cpName: 'Studi Kitab Suci',
        psName: 'Semester Genap 2023/2024',
        name: 'Studi Kitab Suci “PERJALANAN MISI DI KOTA ROMA”',
        description:
          '<p>Studi Kitab Suci merupakan program belajar mengenai teologi Kitab Suci dari Kitab Kejadian hingga Kitab Wahyu. Pada program studi Kitab Suci 2023/2024 semester genap berfokus pada tema <span style="background-color:transparent;color:#000000;"><strong>“PERJALANAN MISI DI KOTA ROMA” (Surat Rasul Paulus Kepada Jemaat di Roma)</strong></span>. <span style="background-color:transparent;color:#000000;">Surat Paulus Kepada Jemaat di Roma berisikan sebuah pengajaran teologis yang penting bagi umat. Ada beberapa pembahasan yang menjadi point-point pengajaran kepada jemaat di Roma antara lain yakni mengenai kehidupan oleh iman, dosa dan akibatnya, kehidupan dalam Roh, penggenapan janji Allah dalam Kristus, dan rencana Allah bagi Israel. Surat Rasul Paulus kepada jemaat di Roma merupakan salah satu surat terpanjang yang ditulis oleh Rasul Paulus dan menjadi dasar sumber teologi Kristen dalam banyak hal dan juga studi Alkitab.</span> &nbsp;Dengan mengikuti program studi Kitab Suci, harapannya peserta kursus mengetahui konteks yang terkandung dalam Kitab Suci (sejarah, sosial, budaya, ekonomi, dan politik), mengetahui teologi yang terkandung dalam setiap ayat di Alkitab, mampu menafsirkan ayat sesuai dengan konteks yang benar, dan merenungkan Sabda Tuhan yang berbicara kepada pribadi lewat Kitab Suci dan mewartakan kabar suka cita dan kebenaran Injil di tengah kehidupan zaman ini.&nbsp;</p><p>&nbsp;</p>',
        schedule:
          '<figure class="table" style="float:left;"><table><tbody><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;"><strong>Tanggal</strong>&nbsp;</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;"><strong>Pertemuan</strong></span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;"><strong>Materi</strong></span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">29 Januari 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;">&nbsp;</td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Kelas Perkenalan "PERJALANAN MISI DI KOTA ROMA"</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">3 Februari 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;">&nbsp;</td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Seminar</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">7 Februari 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 1</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pengantar : Surat-Surat Rasul Paulus</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">21 Februari 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 2</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Tindakan Dosa dan Akibatnya (Rm. 1)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">28 Februari 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 3</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Hukum Allah Terhadap Tindakan Menghakimi Orang Lain (Rm. 2:1-16)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">6 Maret 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 4</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Hukum Taurat dan Tradisi Sunat bagi Orang Kristen (Rm. 2:17-29 - 3:1-20)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">13 Maret 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 5</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Iman sebagai Jalan Keselamatan Manusia (Rm. 3:21-31- 5:1-11)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">20 Maret 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 6</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Adam Lama dan Adam Baru (Rm. 5: 12-21- 6:1-14)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">3 April 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 7</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Dua Macam Perhambaan (Rm. 6: 15-23)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">17 April 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 8</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Taurat dan Dosa (Rm. 7: 1-12; 7:13-26)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">24 April 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 9</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Makna Hidup oleh Roh (Rm. 8:1-17)</span></td></tr><tr><td style="background-color:#ffffff;border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">1 Mei 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 10</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Siapa anak-anak Allah? (Rm. 8: 18-30 - 9:30-10:3)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">8 Mei 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 11</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Iman yang Benar (Rm. 10:4-15)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">15 Mei 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 12</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Hubungan Orang Kristen dan Bangsa Israel (Rm. 10: 16-21 - 11: 25-36)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">22 Mei 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 13</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Hidup Kristen yang tangguh (Rm. 12-15)</span></td></tr><tr><td style="background-color:#ffffff;border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">29 Mei 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 14</span></td><td style="background-color:#ffffff;border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Harapan Paulus Kepada Jemaat di Roma (Rm.15:22-33)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">1-2 Juni</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 15</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Rekoleksi "Menjadi Rasul di Zaman ini, Siapa Takut!"</span></td></tr></tbody></table></figure>',
        finalDate: '2024-06-02',
        lecturers: [],
        psId: 'a3otbatqXQsPj3ujw',
        slug: 'studi-kitab-suci',
        price: '350.000',
      },
    ],
  }),
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let kelasStore = useKelasStore();
    // console.log(kelasStore.data);
    let selectedKelas = ref([]);
    const data = reactive([]);
    let runTimeConfig = useRuntimeConfig();
    let totalHarga = ref(0);
    const listKeuskupan = reactive([]);
    const registerbaru = ref([]);
    const isclicked = ref(false);
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('https://api.imavi.org/cim/courses/active/get-all', {
    //       headers: {
    //         Id: runTimeConfig.public.Id,
    //         Secret: runTimeConfig.public.Secret,
    //         partner: runTimeConfig.public.Partner,
    //       },
    //     });

    //     const result = await response.json();
    //     // console.log(result);
    //     data.value = result.map((item) => {
    //       if (item.cpName == 'Studi Kitab Suci') {
    //         return { ...item, isclicked: ref(false) };
    //       } else {
    //         return { ...item, isclicked: ref(false) };
    //       }
    //     });
    //     // console.log(data.value.isclicked.value);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    const formatMonthName = (monthNumber) => {
      const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'December'];
      return monthNames[monthNumber - 1] || '';
    };

    const formatDate = (dateString) => {
      const dateObject = new Date(dateString);
      const day = dateObject.getDate();
      const month = formatMonthName(dateObject.getMonth() + 1);
      const year = dateObject.getFullYear();
      return `${day < 10 ? '0' : ''}${day} ${month < 10 ? '0' : ''}${month}, ${year}`;
    };
    // const fetchDatakeuskupan = async () => {
    //   try {
    //     const response = await fetch('https://api.imavi.org/cim/users/dioceses/list', {
    //       headers: {
    //         Id: runTimeConfig.public.Id,
    //         Secret: runTimeConfig.public.Secret,
    //         partner: runTimeConfig.public.Partner,
    //       },
    //     });
    //     const result = await response.json();
    //     listKeuskupan.value = result;
    //     console.log(listKeuskupan.value);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };
    onMounted(async () => {
      // await fetchData();
      // await fetchDatakeuskupan();
      // await fetchDatapost();
    });
    return {
      selectedKelas,
      formatMonthName,
      formatDate,
      data,
      listKeuskupan,
      registerbaru,
      modules: [Pagination, Navigation],
      isclicked,
      useKelasStore,
      kelasStore,
      totalHarga,
      runTimeConfig,
    };
  },

  methods: {
    showNewParoki() {
      this.parokiClck = !this.parokiClck;
      this.selectedParoki = 'tidakada';
    },
    formatRupiah(angka) {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
    },
    validateEmail() {
      // console.log(this.emailError);
      if (!this.selectedEmail) {
        this.emailError = 'Email Harus Diisi';
      } else if (!/\S+@\S+\.\S+/.test(this.selectedEmail)) {
        this.emailError = 'Format email salah';
      } else {
        this.emailError = '';
      }
    },
    validateFullName() {
      // console.log(this.emailError);
      if (!this.selectedFullname) {
        this.fullNameError = 'Nama lengkap harus diisi';
      } else {
        this.fullNameError = '';
      }
    },
    validateName() {
      // console.log(this.emailError);
      if (!this.selectedCallName) {
        this.callNameError = 'Nama panggilan harus diisi';
      } else {
        this.callNameError = '';
      }
    },
    validateBaptisname() {
      // console.log(this.emailError);
      if (!this.selectedBaptistName) {
        this.baptistNameError = 'Nama baptis harus diisi';
      } else {
        this.baptistNameError = '';
      }
    },
    validateDate() {
      // console.log(this.emailError);
      if (!this.selectedDate) {
        this.dateError = 'Tanggal harus diisi';
      } else {
        this.dateError = '';
      }
    },
    validateMonth() {
      // console.log(this.emailError);
      if (!this.selectedMonth) {
        this.monthError = 'Bulan harus diisi';
      } else {
        this.monthError = '';
      }
    },
    validateYear() {
      // console.log(this.emailError);
      if (!this.selectedYear) {
        this.yearError = 'tahun harus diisi';
      } else {
        this.yearError = '';
      }
    },
    asd(event) {
      console.log(event);
    },
    validateAlamat() {
      // console.log(this.emailError);
      if (!this.selectedAlamat) {
        this.alamatError = 'Alamat Harus diisi';
      } else {
        this.alamatError = '';
      }
    },
    validateKeuskupan() {
      // console.log(this.emailError);
      if (!this.selectedKeuskupan) {
        this.keuskupanError = 'Keuskupan harus diisi ';
      } else {
        this.keuskupanError = '';
      }
    },
    validateParoki() {
      // console.log(this.emailError);
      if (!this.selectedParoki) {
        this.parokiError = 'Paroki harus diisi';
      } else {
        this.parokiError = '';
      }
    },
    validatePhoneNumber(phoneNumber) {
      const indonesianPhoneRegex = /^62[2-9][0-9]{6,13}$/;
      return indonesianPhoneRegex.test(phoneNumber);
    },

    validateWhatsapp() {
      // console.log(this.emailError);
      if (!this.selectedWhatsapp) {
        this.whatsappError = 'no telp harus diisi';
      } else if (this.validatePhoneNumber(this.selectedWhatsapp)) {
        this.whatsappError = '';
      } else {
        this.whatsappError = 'Nomor Harus diawali dengan 62';
      }
    },
    validatepaymentFile(elem) {
      console.log(elem.target.file);
      if (!this.paymentFile) {
        this.paymentFileError = 'Bukti pembayaran harus diisi';
      } else if (elem.target.files[0].size > 2000000) {
        this.paymentFileError = 'Ukuran Gambar Maksimal 2 MB';
      } else {
        this.paymentFileError = '';
      }
    },
    checkLoading(formMessage) {
      this.formMessage = formMessage;
    },
    clearRegisterInput() {
      const allInput = this.allInput;
      for (const i of allInput) {
        this[i] = '';
      }
    },
    async submitData() {
      try {
        // Proses pengiriman data ke API dan validasi
        if (this.paymentFileError) {
          alert('gambar error');
          return;
        }
        await this.kirimDataKeAPI();
        this.clearRegisterInput();
      } catch (error) {
        console.error('Error:', error);
        // Handle error disini
      }
    },
    async kirimDataKeAPI() {
      // const data = {
      //   selectedParoki: this.selected
      // }

      const randomString = this.generateRandomAlphanumeric(17);

      if ((this.selectedFullname, this.selectedEmail, this.selectedWhatsapp, this.selectedAlamat)) {
        // if (this.selectedNewParoki == null) {
        //   console.log(this.selectedParoki);
        //   this.parokiName = this.selectedParoki.name;
        //   this.parokiId = this.selectedParoki.ParokiID;
        // } else {
        //   this.parokiName = this.selectedParoki.name;
        //   this.parokiName = this.selectedNewParoki;
        //   this.parokiId = this.selectedParoki.ParokiID;
        //   this.parokiId = '';
        // }
        try {
          this.isLoading = true;
          const acp = [];
          // for (const iterator of this.data.value) {
          //   if (iterator.isclicked) {
          //     this.selectedKelas.value = iterator.cpName;
          //     acp.push(iterator._id);
          //   }
          // }
          const dataToSend = {
            fullName: this.selectedFullname,
            email: this.selectedEmail,
            callName: this.selectedCallName,
            phoneNumber: this.selectedWhatsapp,
            // dob: new Date(`${this.selectedYear}-${this.selectedMonth}-${this.selectedDate}`),
            // baptistName: this.selectedBaptistName,
            // parokiId: this.parokiId,
            // keuskupanId: this.selectedKeuskupan.dioceseId,
            // parokiName: this.parokiName,
            // keuskupanName: this.selectedKeuskupan.name,
            address: this.selectedAlamat,
            // acp,
            paymentFile: [],
            profileId: '',
            outlets: ['cim'],
            status: 10,
            // psId: this.data.value[0].psId,
            // psName: this.data.value[0].psName,
            createdAt: new Date(),
            createdBy: 'cim website',
          };

          if (this.paymentfile1) {
            this.paymentfile1 = await this.uploadImageFile(randomString, this.paymentfile1[0], 'payments1');
            this.paymentFile.push(this.paymentfile1);
          }
          if (this.paymentfile2) {
            this.paymentfile2 = await this.uploadImageFile(randomString, this.paymentfile2[0], 'payments2');
            this.paymentFile.push(this.paymentfile2);
          }
          console.log(this.paymentFile);
          if (this.paymentFile.length > 0) {
            dataToSend.paymentFile = this.paymentFile;
          }
          if (dataToSend != null) {
            console.log(dataToSend);

            const response = await fetch('/api/pendaftaran', {
              method: 'POST',
              timeout: 500,

              body: JSON.stringify(dataToSend),
            });
            console.log(response);
            const result = await response.json();
            console.log(result);
            if (result.data.code == 200) {
              this.formMessage = 'Berhasil';
              this.valid2 = true;
              window.location.href = '/berhasil';
              this.isLoading = false;
              // this.clearRegisterInput();
            } else if (result.data.statusCode !== 200) {
              this.valid2 = false;
              this.formMessage = result.data.message;
              this.isLoading = false;
            }
          } else if (dataToSend.value === '') {
            this.formMessage = result.message;
          }
        } catch (error) {
          console.log(error);
          console.error('ada data yang belum terisi:', error);
          this.formMessage = error;
          this.isLoading = false;
        }
      } else {
        alert('ada data yang belum terisi');
      }
    },
    async uploadImageFile(_id, image, identifier) {
      console.log(_id, image, identifier);
      if (image === undefined) {
        return;
      }
      const file = image;
      if (!file.type.match('image.*')) {
        alert('Please upload an image.');
        return;
      }
      const metadata = {
        contentType: file.type,
      };
      this.isUploadingImage = true;
      const storage = getStorage();
      const imageRef = ref(storage, `${identifier}/${_id}`);
      const snapshot = await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    },
    handlekelasclick(index) {
      this.kelasStore = [];
      this.data.value[index].isclicked = !this.data.value[index].isclicked;
      let total = 0;
      // console.log(this.data.value[index].isclicked);
      for (const iterator of this.data.value) {
        if (iterator.isclicked) {
          // If isclicked is true, push the cpName to kelasStore
          this.kelasStore.push(iterator.name);
          total = total + iterator.price;
        }
      }
      this.kelasStore.price = total;
      console.log(this.kelasStore.price);
    },
    handleSetActiveBaru(status) {
      console.log(this.totalHarga);
      status = this.activeNow.baru = true;
      status = this.activeNow.daftar = false;
    },
    handleSetActiveDaftar(status) {
      status = this.activeNow.daftar = true;
      status = this.activeNow.baru = false;
    },
    tampilkanKonten(jenis) {
      this.tampilkan = jenis;
    },
    generateRandomAlphanumeric(length) {
      const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
      }
      return result;
    },
    async kirimdatabaru() {
      if (this.selectedWhatsapp) {
        try {
          this.isLoading = true;
          const acp = [];
          for (const iterator of this.data.value) {
            if (iterator.isclicked) {
              acp.push(iterator._id);
            }
          }
          const randomString = this.generateRandomAlphanumeric(17);
          const dataToSend = {
            phoneNumber: this.selectedWhatsapp,
            acp,
            paymentFile: 0,
            profileId: 'check',
            outlets: ['cim'],
            status: 10,
            psId: this.data.value[0].psId,
            psName: this.data.value[0].psName,
            createdAt: new Date(),
            createdBy: 'cim website',
          };
          if (this.paymentfile1) {
            this.paymentfile1 = await this.uploadImageFile(randomString, this.paymentfile1[0], 'payments1');
            this.paymentFile.push(this.paymentfile1);
          }
          if (this.paymentfile2) {
            this.paymentfile2 = await this.uploadImageFile(randomString, this.paymentfile2[0], 'payments2');
            this.paymentFile.push(this.paymentfile2);
          }
          if (this.paymentFile.length > 0) {
            dataToSend.paymentFile = this.paymentFile;
          }
          console.log(dataToSend);
          const response = await fetch('https://api.imavi.org/cim/users/registration', {
            method: 'POST',

            headers: {
              Id: this.runTimeConfig.public.Id,
              Secret: this.runTimeConfig.public.Secret,
              partner: this.runTimeConfig.public.Partner,
              'Content-Type': 'application/json',
            },

            body: JSON.stringify(dataToSend),
          });
          console.log('ini response', response);
          const result = await response.json();
          if (response.ok && result.code == 200) {
            console.log('ini result', result);
            this.formMessage = 'Berhasil';
            this.isLoading = false;
            this.clearRegisterInput();
          } else {
            this.formMessage = result.message;
            this.isLoading = false;
            throw new Error('Gagal mengirim data');
          }
        } catch (error) {
          console.error('Error saat mengirim data:', error);
        }
      } else {
        alert('ada data yang belum  terisi');
      }
    },
    toggleButton() {
      this.isActive = !this.isActive;
    },
  },
  created() {
    // Mengisi opsi tahun kelahiran dari tahun saat ini hingga 100 tahun ke belakang
    for (let year = this.currentYear; year >= this.currentYear - 100; year--) {
      this.yearOptions.push(year.toString());
    }
  },
};
</script>
<style scoped>
.v-stepper-actions button {
  background-color: var(--variable-collection-CIM) !important;
}
.kelasaktif {
  border: 2px solid #27674e;
}

.kelasinaktif {
  border: 2px solid #d9d9d9;
}

.activedaftar {
  background-color: #543527;
  color: #ffffff;
}

.active {
  background-color: #27674e;
  color: #ffffff;
}

.notActive {
  color: #27674e;
  border: 2px solid #27674e;
}

.notActivedaftar {
  color: #543527;
  border: 2px solid #543527;
}

/* .buttondaftar {
  background-color: red;
} */
.v-text-field {
  margin-top: 8px;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;

  height: 100%;

  /* Center slide text vertically */
}

.swiper-slide img {
  display: block;
  width: 80%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 599px) {
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.swiper-pagination {
  position: static;
  margin-top: 16px;
}
</style>
