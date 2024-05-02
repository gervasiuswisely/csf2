<template>
  <v-container style="height: 100%">
    <div style="margin-top: 100px" class="ptserrifText">WHY CIM?</div>
    <div>
      <v-container>
        <ol>
          <NuxtLink>
            <li><button @click="viewSejarah()">SEJARAH BERDIRINYA</button></li>
          </NuxtLink>
          <div v-if="isClick1">
            <div  class="mt-5 sejarah">
              <h1 style="text-align: center;">SEJARAH SINGKAT CENTRUM IVAN MERZ KEUSKUPAN SURABAYA</h1>
              <p class="mt-3">
               <p> Kehidupan awam di Keuskupan Surabaya yang penuh semangat untuk belajar dan memperdalam iman Katolik menggerakkan pribadi Eddy Gunawan untuk belajar Teologi. Dia memulai studinya di sebuah Kursus Teologi yang diadakan di
                Universitas Katolik Dharma Cendika (UKDC) sebagai wujud gerak hatinya untuk mengenal lebih baik ajaran Gereja Katolik. Setelah melewati 6 (enam) semester, tepatnya pada tahun 2016, mulai tumbuhlah suatu keinginan dalam
                dirinya yang digerakkan oleh kegelisahan jiwanya bahwa orang awam perlu mengenal ajaran Katolik dengan benar – sedangkan memang jarak itu bisa menjadi hambatan bagi umat awam yang tinggal di Surabaya Barat untuk mengikuti
                kelas yang dia ikuti yang letaknya di Surabaya Timur. Maka dari itu, Bapak Eddy memberanikan diri menghadap Pastor Paroki tempat beliau berdomisili - Paroki St Yakobus Citraland, yang saat itu dijabat oleh RD. Prima Novianto
                supaya kesempatan belajar yang sama dapat dinikmati juga oleh umat awam lainnya di Kevikepan Surabaya Barat.</p> <br>
                 <p>RD. Prima Novianto menyambut baik usulan itu dan memberikan kesempatan kepada Bapak Eddy untuk memulainya di Paroki
                St. Yakobus, Citraland. Namun, Bapak Eddy, yang sejak awal memiliki cita-cita bahwa Kursus Teologi Katolik yang baru itu bukan hanya untuk Paroki St. Yakobus saja, selanjutnya memutuskan untuk bersama-sama dengan Ibu Anita
                Lie, Bapak Soegiharto Widodo, Bapak Irwan Sentosa, dan Ibu M. Elizabeth Elly Setiowati menghadap RD. Agustinus Tri Budi Utomo dan RD. Yosef Eko Budi Susilo untuk menyampaikan aspirasi itu.</p> <p>Sebagai buah dari pertemuan
                tersebut, Keuskupan Surabaya memberikan ijin untuk menyelenggarakan Kursus Teologi Katolik bagi seluruh umat awam di Kevikepan Surabaya Barat. Sambutan ini kemudian berlanjut dengan RD. Laurensius Rony sebagai Ketua Komisi
                Kateketik Keuskupan Surabaya, meminta Bapak Eddy untuk berkoordinasi lebih lanjut dengan RD. Edi Laksito di Seminari Tinggi Providentia Dei (STPD) yang selama ini sudah menjalankan Program Teologi bagi para calon imam.</p>
                <br>

                <p>Setelah itu, Bapak Eddy dan RD. Edi Laksito bersama-sama menyusun program Kursus Teologi Awam ini dengan menentukan Visi-Misi dan kurikulum Kursus Teologi yang baru ini, dan kemudian ditetapkan pada 18 Juni 2017.</p>
                <br>
                    <p> Rumusan
                Visi-Misi dan Kurikulum tersebut mendapatkan persetujuan dari Bapak Uskup pada tanggal 22 Juli 2017. Maka, Kursus Teologi Katolik dibuka pertama kali dengan Misa Pembukaan oleh RD. Edi Laksito di Gereja St. Yakobus Citraland
                pada tanggal 3 Agustus 2017. </p>

                <br>

                <p>Dua tahun setelah Kursus Teologi Katolik berjalan, dengan didirikannya IMAVI, yaitu Institutum Theologicum Ioannis Mariae Vianney Keuskupan Surabaya, RD. Benny Suwito selaku praeses (pimpinan),
                memberikan arahan baru bagi Kursus Teologi ini untuk juga memberikan kontribusi bagi Pembinaan Asisten Katekis di Paroki. Kemudian pada tahun 2019 dimulailah Program Pastoral Katekese yang bertujuan membina para umat awam di
                Paroki agar bisa secara aktif terlibat dalam karya katekese di Paroki masing-masing. Pada tahun yang sama, Kursus Teologi di Universitas Katolik Dharma Cendika dilebur menjadi satu di bawah satu payung Kursus Teologi Katolik
                Keuskupan Surabaya ini.</p>

                <br>
                <p> Pada 6 Juni 2021, Kursus Teologi Katolik Keuskupan Surabaya yang sudah berjalan selama 4 tahun itu, mendapat pembaharuan misi untuk lebih baik mengembangkan upaya ini, agar bukan hanya bergerak
                sebagai sebuah lembaga Kursus Teologi Katolik saja, melainkan bertransformasi menjadi sebuah pusat studi teologi khusus, untuk umat awam terutama di Keuskupan Surabaya. Penyegaran ini juga ditandai dengan perubahan nama dari
                Kursus Teologi Katolik menjadi Centrum Ivan Merz. Nama Ivan Merz diambil dari Beato Ivan Merz, seorang akademisi awam muda Kroasia yang mencintai iman Katolik secara luar biasa dan membawa perubahan besar dalam gerakan
                liturgi Katolik dan gerakan untuk kaum muda di negaranya di tengah masa-masa pelik pasca perang dunia. Diharapkan dengan perubahan nama tersebut, semakin banyak umat awam akan mencintai dan mendalami iman Katolik yang begitu
                kaya dan indah seperti Beato Ivan Merz.</p>
                <br>
              </p>
            </div>
          </div>
          <div v-else>
            
          </div>
          <NuxtLink> <li><button @click="viewVisi()">VISI DAN MISI</button>
          </li>
            <div v-if="isClick2">
              <div class="text-h6"> 
                Visi
              </div>
              <p>   Menjadi Pusat Studi   
       Teologi Katolik yang 
        mendewasakan iman 
        dan bersifat 
        kontekstual bagi 
        rasul awam di 
        tengah dinamika 
        hidup Gereja dan 
        masyarakat.</p>
              <div class="mt-3 text-h6">Misi</div>
            <ol>
              <v-container>
                <li>Mengembangkan Ivan Merz sebagai pusat studi, penelitian, pengembangan dan informasi Filsafat/Teologi untuk awam Keuskupan Surabaya.</li>
                <li>Mengembangkan iman umat awam Keuskupan Surabaya yang semakin dewasa dan misioner</li>
                <li>Menggerakkan awam Keusukupan Surabaya agar semakin terpanggil untuk dapat ambil bagian dalam panca tugas gereja</li>
              </v-container>
            </ol>
            </div>
            <div v-else> 

            </div>
          </NuxtLink>

          <NuxtLink> <li><button @click="viewNilai()">NILAI-NILAI</button></li> </NuxtLink>
          <div v-if="isClick3">
             
            <ol>
              <v-container>
                <li>Memiliki program kerja yang terencana dan terarah di semua divisi secara sistematis dan terukur demi tercapainya Misi CIM </li>
                <li>Fundamental organisasi CIM berada di bawah IMAVI sehingga sebagai organisasi, CIM dapat menyediakan informasi, penelitian dan pendidikan teologi untuk awam, khususnya di Keuskupan Surabaya, yang dilakukan secara profesional, transparan, dapat dipercaya, independen dan dapat dipertanggungjawabkan.</li>
                <li>Lembaga penelitian dan pendidikan Katolik yang modern dan kekinian dengan memanfaatkan teknologi digital yang berkembang saat ini. </li>
              </v-container>
            </ol>
            </div>
            <div v-else> 
              
            </div>
            <NuxtLink> <li><button @click="viewStruktur()">STRUKTUR ORGANISASI</button></li> </NuxtLink>

          <div style="display: flex;" v-if="isClick4" class="mt-3">
                <v-row>
              
                  <v-col :cols="12" :lg="12" > 
                    <div style="height: 200px;">
                      <img   @click="showFullScreenImage()" style="height: 200px;cursor: pointer;" src="/img/strukturorganisasi.png" alt="">
                    </div>
           
                  </v-col>
                </v-row>
                
                <v-dialog v-model="fullscreenDialog" max-width="800">
                  <v-card-actions>
                            <v-btn color="primary" block @click="tutupDialog()"><i style="border-radius: 50%; padding: 8px; background-color: var(--variable-collection-CIM)" class="text-white fa fa-close"></i></v-btn>
                          </v-card-actions>
                    <v-img  src="/img/strukturorganisasi.png" contain></v-img>
      
                    </v-dialog>
            </div>
            <div v-else> 
              
            </div>
            <NuxtLink> <li><button @click="viewKarya()">PERWUJUDAN KARYA</button></li> </NuxtLink>
          <div style="display: flex;" v-if="isClick5" class="mt-3">
                <v-row>
                  <v-col :cols="12" :lg="12" >

                    <P>Dengan berpegang pada Ajaran Gereja Katolik, CIM menyelenggarakan berbagai program pendidikan dan pengembangan iman untuk awam.</P>

                    <ol type="A" class="mt-5">

                      <li>BERBAGAI STUDI, KURSUS DAN PENDALAMAN </li>

                      <ol class="mt-3">
                        <li>	Kursus atau Studi Kitab Suci</li>
                        <p>Kursus atau studi yang berusaha menghadirkan pemahaman yang benar tentang isi Kitab Suci. Pengajaran diberikan oleh para Romo dan awam yang memang sudah menyelesaikan studi di bidang Kitab Suci di berbagai lembaga pendidikan Kitab Suci kepausan di seluruh dunia.</p>
                        <li>	   Kursus Ajaran Iman</li>
                        <p>Diadakan untuk menjawab kebutuhan umat awam untuk mengerti ajaran iman Gereja Katolik. Pengajar dalam kursus ini adalah para imam dan awam yang sudah menyelesaikan pendidikan bidang teologi di berbagai lembaga pendidikan teologi Kepausan di seluruh dunia..</p>
                        <li>   Pendidikan Etika dan Moral</li>
                        <p>Dapat diadakan dalam 2 bentuk yaitu kursus atau weekend camp. Pengajar pendalaman adalah para imam dan awam yang memang memiliki kualifikasi untuk mengajar di bidang tersebut. Artinya, mereka adalah para imam, religius dan awam yang sudah menyelesaikan studinya di bidang Teologi Moral.
Berbagai pendalaman yang diadakan bisa dari berbagai bidang etika atau moral: Etika Bisnis, Moral Seksualitas, Moral tentang Hidup terkait dengan aborsi, keluarga berencana, kloning, bayi tabung, ibu inang dan sebagainya.
.</p>
                        <li>	 Kursus Spiritualitas </li>
                        <p>Spiritualitas dengan berbagai warnanya juga merupakan bidang yang penting dalam kehidupan beriman. Para pengajar di kursus Spiritualitas adalah para imam, kaum religius dan awam yang memang memiliki keahlian di bidang yang menjadi tema kursus pada saat itu. Misalnya: Kursus Spiritualitas Ignasian akan diajarkan oleh seorang imam Jesuit atau religius atau awam yang memang sudah mempelajari spiritualitas ini.</p>
                      </ol>
                      <li class="mt-3">PEMBINAAN IMAN KELOMPOK PROFESIONAL</li>
                      <p>Tergerak akan kebutuhan umat Katolik awam berdasarkan bidang profesional, Centrum Ivan Merz juga terpanggil untuk bekerja sama dengan kelompok-kelompok profesional, untuk membantu menjawab kebutuhan-kebutuhan mereka di bidang pendalaman iman, misalnya: para katekis Paroki, kelompok asisten imam, kelompok guru Katolik, kelompok yang terdiri dari sie-sie yang melayani di Paroki (Sie Kerasulan Kitab Suci, Sie Kerawam dan sebagainya), kelompok-kelompok kategorial dan sebagainya. Tentunya, kurikulum pembinaan akan disesuaikan dengan kebutuhan tiap kelompok tersebut.</p>
                      <li  class="mt-3">LEMBAGA PENELITIAN TEOLOGI</li>
                      <p>Penelitian merupakan satu cara yang dapat digunakan untuk mengetahui bagaimana kebutuhan umat menurut perkembangan jaman itu. Menyadari pentingnya peran penelitian ini, maka Centrum Ivan Merz juga terlibat dengan melakukannya, bekerja sama dengan Komisi-Komisi terkait di Keuskupan Surabaya.</p>
                      <li  class="mt-3">SEMINAR</li>
                      <p>Karya lain yang dilakukan oleh Centrum Ivan Merz adalah mengadakan seminar-seminar dengan tema-tema aktual pada waktu itu. Misalnya, tahun 2023 adalah tahun menjelang tahun politik 2024, di mana pada tahun 2024 ini, akan diselenggarakan Pemilihan Umum Presiden dan para wakil rakyat baik pusat maupun daerah. Dalam kesempatan ini, Centrum Ivan Merz mengadakan seminar politik untuk menunjukkan kepada umat bahwa sebagai manusia Indonesia, mereka bukan hanya warga Gereja Katolik, tapi mereka juga adalah warga negara Indonesia. Sebagai warga negara Indonesia, mereka juga memiliki tanggungjawab untuk terlibat di bidang politik yang sesuai dengan iman Katolik.</p>
                    </ol>
                  </v-col>
        
                </v-row>
         
            </div>
            <div v-else> 
              
            </div>
        </ol>
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isClick1: false,
    isClick2: false,
    isClick3: false,
    isClick4: false,
    isClick5: false,

      fullscreenDialog:false,
      fullscreenImage:"/img/strukturorganisasi.png",
  }),
  methods: {
    showFullScreenImage(){
      this.fullscreenDialog=!this.fullscreenDialog;
      console.log(this.fullscreenDialog)
    },
    viewSejarah() {
      // console.log(this.isClick1);
      this.isClick1 = !this.isClick1;
    },
    viewVisi() {
      this.isClick2 = !this.isClick2;
    },
    viewNilai() {
      this.isClick3 = !this.isClick3;
    },
    viewStruktur() {
      this.isClick4 = !this.isClick4;
    },
    viewKarya() {
      this.isClick5 = !this.isClick5;
    },
    tutupDialog(){
      this.fullscreenDialog=false
    }
  },
};
</script>

<style scoped>
.sejarah p{
  text-indent: 20px;
}
</style>