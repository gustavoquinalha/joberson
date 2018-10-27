<template>
  <div>

    <div class="size-container">
        <div class="content-app--menu container align-center">
          <ul class="list-style-none container wrap">
            <li class="icon-menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </li>
            <li class="icon-menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-type"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
            </li>
            <li class="icon-menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
            </li>
            <li class="icon-menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </li>
            <li class="icon-menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </li>
            <li class="icon-menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </li>
            <li class="icon-menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
            </li>
          </ul>
        </div>







        <div class="content-app--container">

        <div class="container-logo" style="top: 80px; left: 80px;">
          <img :src="job.logo" :width="job.logoWidth">
        </div>

        <div class="container-company" style="top: 160px; left: 80px;">
          <span class="title">Vaga de</span class="title">
          <br>
          <span class="role">{{job.role}}</span>
        </div>

        <div class="container-contact" style="top: 240px; left: 80px;">
          <span class="title">Vaga de</span class="title">
          <ul class="list-style-none contact">
            <li>{{job.url}}</li>
            <li>{{job.contact}}</li>
          </ul>
        </div>

        </div>







    </div>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      job: {
        company: 'Netflix',
        url: 'https://jobs.netflix.com/',
        logo: 'https://cdn.svgporn.com/logos/netflix.svg',
        logoWidth: '180',
        role: 'User Interface Designer',
        contact: 'jobs@netflix.com.br',
        content: 'lorem lorem'
      }
    }
  }
}
</script>



<style lang="scss" scoped>
.size-container {
  max-width: 100%;
  width: 800px;
  margin: 0 auto;
  margin-bottom: 34px;
}

.content-app--menu {
  border-radius: 4px;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
  color: #fff;
}

.content-app--container {
  min-height: 600px;
  position: relative;
  border: 1px solid #000;
  > div {
    position: absolute;
    top: 0;
    left: 0;
  }
}

.icon-menu {
  background: #000;
  margin: 4px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.role {
  font-size: 2rem;
  font-weight: bold;
}

.contact {
  opacity: .5;
  line-height: 1.5;
}
</style>
