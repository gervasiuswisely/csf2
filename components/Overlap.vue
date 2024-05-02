<template>
  <div class="text-lg-center" style="margin-top: 16px; display: flex; flex-direction: column; justify-content: center">
    <v-container>
      <!-- <Heading1 :text="'Program'" /> -->
      <SubHeading :subtext="'Karya dan kegiatan kami'" />
      <p class="text-lg-center" style="line-height: 200%; margin-top: 20px; color: #0e0e0e; opacity: 60%">
        Dengan berpegang pada Ajaran Gereja Katolik, CIM menyelenggarakan berbagai <br />
        program pendidikan dan pengembangan iman untuk umat awam.
      </p>
    </v-container>
  </div>

  <v-container>
    <Program />
  </v-container>
</template>
