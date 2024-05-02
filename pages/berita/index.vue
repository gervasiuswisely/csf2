<template>
  <div style="margin-top: 100px" class="ptserrifText">
    <v-container>
      <div class="mb-3">
        <Subheading2 :subtext="'Berita Terbaru'" />
      </div>
      <v-text-field variant="outlined" style="margin-top: 12px; box-shadow: 0px 0px 4px #e2efff; padding: 28px 20px 0px 20px" v-model="searchQuery" placeholder="cari berita disini" prepend-icon="fa fa-search"> </v-text-field>
      <v-row style="display: flex; justify-content: center">
        <v-col :cols="12" :lg="6" v-for="(article, index) in currentResults" :key="index">
          <v-card style="height: 220px; border-radius: 20px" v-if="beritaData">
            <v-row>
              <v-col :cols="6">
                <div style="height: 400px; display: flex">
                  <v-img :src="article.imageLink" height="200" style="border-radius: 10px"></v-img>
                </div>
              </v-col>
              <v-col :cols="6">
                <div style="padding: 2px">
                  <div>
                    <p class="text-lg-h6 loraText" style="color: #0d0e0c; font-weight: 500; white-space: nowrap; text-overflow: ellipsis; overflow: hidden">{{ article.title }}</p>
                  </div>
                  <div>
                    <p class="text-lg-caption cairoText" style="margin-bottom: 8px; font-weight: 600; color: #2b6956">By {{ article.author }}|| on {{ formatDate(article.publishDate) }}</p>
                    <p class="text-content3 text-wrap cairoText" v-dompurify-html="article.content" style="color: #5a524c; line-height: 150%"></p>
                  </div>
                  <div style="margin-top: 16px">
                    <NuxtLink :to="`/berita/${article.slug}`" class="cairoText" style="font-size: 18px; color: #2b6956">Baca Selengkapnya</NuxtLink>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <Pagination class="mt-6" :currentPage="currentPage" :totalPages="totalPages" @page-change="changePage" v-if="searchResults.length > 0" />
    </v-container>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const beritaData = ref([]);
const searchQuery = ref('');
const runTimeConfig = useRuntimeConfig();
const beritaPerPage = 12;
let result;
let totalPages = ref([]);
let currentPage = ref(1);
const fetchData = async () => {
  try {
    const response = await fetch('https://api.imavi.org/imavi/news/get-all', {
      headers: {
        Id: runTimeConfig.public.Id,
        Secret: runTimeConfig.public.Secret,
        partner: runTimeConfig.public.Partner,
      },
    });
    // console.log(response);
    const hasil = await response.json();
    beritaData.value = hasil;
    // console.log(result);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
await fetchData();
totalPages = ref(Math.ceil(beritaData.value.length / beritaPerPage));
let initialTotalPages = ref(totalPages.value);
const changePage = (pageNumber) => {
  currentPage.value = pageNumber;
  // console.log(pageNumber);
};
const displayedNews = computed(() => {
  const startIndex = (currentPage.value - 1) * beritaPerPage;
  const endIndex = startIndex + beritaPerPage;
  return beritaData.value.slice(startIndex, endIndex);
});
const initialResults = computed(() => {
  if (Array.isArray(displayedNews.value)) {
    // console.log(totalPages.value);
    return displayedNews.value;
  } else {
    return [];
  }
});

const searchResults = computed(() => {
  if (Array.isArray(beritaData.value)) {
    return beritaData.value.filter((image) => image.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
  } else {
    return [];
  }
});

const currentResults = computed(() => {
  // console.log(searchQuery.value);
  if (searchQuery.value === '') {
    // console.log('Kepanggil initial results');
    result = initialResults.value;
    totalPages.value = initialTotalPages.value;
    // console.log(currentPage.value);
  } else {
    // console.log('kepanggil search results  ');
    result = searchResults.value;
    totalPages.value = Math.ceil(result.length / beritaPerPage);
    if (totalPages.value < currentPage.value) {
      currentPage.value = 1;
    }
  }

  return result;
});

watchEffect(() => {
  if (searchQuery.value !== '') {
    currentPage.value = 1;
  }
});
const formatDate = (dateString) => {
  const dateObject = new Date(dateString);
  const day = dateObject.getDate();
  const month = formatMonthName(dateObject.getMonth() + 1);
  const year = dateObject.getFullYear();

  return `${day < 10 ? '0' : ''}${day} ${month < 10 ? '0' : ''}${month} ${year}`;
};

const formatMonthName = (monthNumber) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return monthNames[monthNumber - 1] || '';
};

onMounted(() => {
  fetchData();
});
</script>
<!-- <script>
export default {
  date: new Date(),
  day: dateObject.getDate(),
  month: dateObject.getMonth() + 1, // Ingat bahwa bulan dimulai dari 0, sehingga perlu ditambah 1
  year: dateObject.getFullYear(),
  formattedDate: `${day}-${month < 10 ? '0' : ''}${month}-${year}`,
  data: () => ({
    artikel: [
      {
        title: 'uji coba artikel',
        originalUrl: 'https://my.imavi.org/articles/uji-coba-artikel',
        excerpt: 'ini uji coba artikel',
        author: 'nicholas andry',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Sem nulla pharetra diam sit amet. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Dui vivamus arcu felis bibendum ut tristique et egestas. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Volutpat blandit aliquam etiam erat. Tincidunt augue interdum velit euismod in pellentesque massa. Mauris vitae ultricies leo integer. Tellus molestie nunc non blandit massa enim nec. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Nisl pretium fusce id velit ut tortor pretium viverra. Condimentum mattis pellentesque id nibh. Lacus sed turpis tincidunt id. Risus feugiat in ante metus dictum at tempor. Proin nibh nisl condimentum id venenatis. Sit amet consectetur adipiscing elit pellentesque. Urna id volutpat lacus laoreet non curabitur gravida. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique.</p><p>Ultricies integer quis auctor elit sed vulputate. Amet mauris commodo quis imperdiet massa tincidunt nunc. Diam phasellus vestibulum lorem sed. Varius vel pharetra vel turpis nunc eget lorem. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Eros donec ac odio tempor. Egestas dui id ornare arcu odio ut sem. Velit scelerisque in dictum non consectetur a. Viverra accumsan in nisl nisi scelerisque eu ultrices. Habitant morbi tristique senectus et netus et. Viverra aliquet eget sit amet tellus cras adipiscing. Sed pulvinar proin gravida hendrerit lectus a. Rhoncus mattis rhoncus urna neque viverra justo. Tellus pellentesque eu tincidunt tortor aliquam nulla. In est ante in nibh mauris cursus mattis molestie a. Sed euismod nisi porta lorem mollis aliquam. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Lacus sed viverra tellus in hac habitasse platea. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Urna id volutpat lacus laoreet non curabitur.</p><p>Commodo quis imperdiet massa tincidunt. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Dignissim convallis aenean et tortor. Augue ut lectus arcu bibendum at. Morbi leo urna molestie at. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. In massa tempor nec feugiat nisl pretium fusce id velit. Semper eget duis at tellus. Quisque non tellus orci ac. Facilisis gravida neque convallis a cras semper auctor. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Faucibus ornare suspendisse sed nisi lacus. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.</p><p>Morbi leo urna molestie at elementum eu. Quam viverra orci sagittis eu volutpat. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Pellentesque nec nam aliquam sem et. Sagittis vitae et leo duis ut diam. A scelerisque purus semper eget. Morbi non arcu risus quis varius. Dictum sit amet justo donec enim diam vulputate ut pharetra. Id donec ultrices tincidunt arcu non sodales neque. Et malesuada fames ac turpis egestas sed tempus. Pretium lectus quam id leo in vitae. Aenean et tortor at risus viverra adipiscing at in tellus. Dictum sit amet justo donec enim diam.</p><p>A cras semper auctor neque vitae tempus. Dolor morbi non arcu risus quis varius. Eros donec ac odio tempor orci dapibus ultrices. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Urna condimentum mattis pellentesque id. Risus nullam eget felis eget nunc. Sapien pellentesque habitant morbi tristique senectus. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis.ss</p>',
        publishDate: '2023-11-09T00:00:00.000Z',
        slug: 'uji-coba-artikel',
        imageLink: 'https://cdn.imavi.org/articles~5wXNm6M~articles~epATKgn~logo.png',
      },
      {
        title: 'Hanya Jubah Orang Farisi (Luk 11:42-46)',
        originalUrl: 'https://my.imavi.org/articles/hanya-jubah-orang-farisi',
        excerpt: 'Refleksi tentang makna jubah berdasarkan Lukas 11:42-46',
        author: 'Tuan Kopong MSF',
        content:
          '<p>Hanya jubah orang Farisi yang pandai berkotbah tentang kasih dan keadilan namun pada menit yang sama meneriakan iuran ini dan itu. Hanya jubah orang Farisi yang berkotbah tentang pelayanan tanpa keluh dan pamrih namun pada saat bersamaan berorasi hormatilah jubahku, hargailah pelayananku.</p><p>Hanya jubah orang Farisi yang lantang bersuara menyuarakan keadilan, namun di balik suara lantang itu ia sedang menjadikan jubahnya bersekutu dengan para penambang membungkam suara kenabian. Hanya jubah orang Farisi yang pandai merangkai kata tentang kepedulian pada gereja dan paroki, namun pada menit yang sama ia sedang menumpahkan air mata mereka yang karena belum membayar iuran tak bisa menerima komuni pertama dan menerima sakramen krisma. Alasan dibungkus dalam jubah sucinya; “bisa pesta, tapi membayar iuran bilang tak ada uang.”</p><p>Hanya jubah orang Farisi yang berucap, melayani dengan tulus dan rendah hati. Namun pada saat bersamaan menjadi marah dan kecewa ketika pelayanannya tak mendapatkan sepenggal kata terima kasih diiringi tepukan tangan meriah.</p><p>Hanya jubah orang Farisi yang bersabda; “tak peduli berapapun yang kalian berikan pada gereja atau paroki asal tulus”, namun pada waktu bersamaan ia tak mau tahu dan peduli biaya sekolah anak-anak, mereka bisa makan hari ini atau tidak. Bukan urusanku! Hanya jubah orang Farisi yang selalu menjadikan Tuhan sebagai senjata memanjakan diri, namun pada waktu bersamaan mengatakan nanti saja atau besok saja, ketika ada suara ratap penuh harap meminta pelayanannya.</p><p>Hanya jubah orang Farisi yang terus melantunkan sabda-sabda bijak nan saleh; “menolong sesama adalah bagian dari iman”, namun pada menit yang sama ia berujar; “jangan mengganggu saya, saya lagi beristirahat.” Hanya jubah orang Farisi yang selalu menjadikan pelayanan sebagai alasan untuk memiliki mobil yang bagus, handphone terupdate, iphone mewah namun pada menit yang sama ia masih melihat dan memilih siapa yang meminta pelayanan untuk dilayani.</p><p>Hanya jubah orang Farisi yang selalu menggunakan ayat-ayat suci dalam pengajarannya tentang solidaritas dan persatuan namun pada menit yang sama pintu pastoran tertutup untuk orang muda, tertutup bagi mereka yang bukan menjadi kawannya dan bahkan langkah untuk menjumpai keluarga-keluarga yang sederhana dianggap membuang-buang waktu.</p><p>Hanya jubah orang Farisi yang pintar berbicara tentang ketaatan, namun pada menit yang sama ia sendiri yang merusak ketaatannya sekedar demi pujian dan sorak-sorai. Hanya jubah orang Farisi yang pandai mengatakan tentang doa dan ekaristi, namun pada waktu bersamaan ia sendiri tak mau merayakan ekaristi.</p><p>“Jubah itu adalah pelayanan. Jubah itu adalah ketaatan. Jubah itu adalah hamba. Jubah itu adalah solidaritas. Harga dari sehelai jubahmu bukan pada apa yang engkau terima tapi ada pada pelayanan tanpa keluh dan pamrih. Martabat jubahmu bukan karena engkau seorang imam tapi karena engkau seorang hamba yang taat. Ketaatan, ketekunan dan ketulusanmu sebagai seorang hamba itulah yang menjadikanmu sebagai seorang imam.”</p>',
        publishDate: '2022-10-17T00:00:00.000Z',
        slug: 'hanya-jubah-orang-farisi',
        imageLink: 'https://imavistatic.sgp1.digitaloceanspaces.com/articles-3e7aa6c13e90b122eaa83e7f.56',
      },
    ],
  }),
};
</script> -->
