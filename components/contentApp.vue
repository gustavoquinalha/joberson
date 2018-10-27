<template>
  <div>

    <div class="size-container">

        <div class="content-app--menu container align-center">
          <ul class="list-style-none container align-center wrap">
            <li class="icon-menu active">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
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
            <li class="icon-menu" @click="job.dark = !job.dark">
              <svg v-show="job.dark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              <svg v-show="!job.dark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            </li>
            <li class="icon-menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
            </li>
          </ul>
        </div>

        <div class="content-app--container" :class="{dark : job.dark}">

          <div class="container-logo" style="top: 60px; left: 60px;">
            <img :src="job.logo" :width="job.logoWidth">
          </div>

          <div class="container-company" style="top: 150px; left: 60px;">
            <span class="title">Vaga de</span class="title">
            <br>
            <span class="role">{{job.role}}</span>
          </div>

          <div class="container-contact" style="top: 280px; left: 60px;">
            <span class="title">Contato</span class="title">
            <ul class="list-style-none contact">
              <li>{{job.url}}</li>
              <li>{{job.contact}}</li>
            </ul>
          </div>

          <div class="container-contact" style="top: 150px; left: 320px; width: 430px;">
            <editableMarkdown></editableMarkdown>
          </div>

        </div>

    </div>

  </div>
</template>

<script>
import editableMarkdown from '~/components/editableMarkdown'

export default {
  components: {
    editableMarkdown
  },
  data() {
    return {
      job: {
        company: 'Netflix',
        url: 'https://jobs.netflix.com/',
        logo: 'https://cdn.svgporn.com/logos/netflix.svg',
        logoWidth: '180',
        role: 'User Interface Designer',
        contact: 'jobs@netflix.com.br',
        content: '# lorem lorem',
        dark: false
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
  padding: 8px;
  box-sizing: border-box;
}

.content-app--menu {
  border-radius: 4px;
  margin-bottom: 8px;
  text-align: center;
  color: #fff;
}

.content-app--container {
  min-height: 550px;
  position: relative;
  border: 1px solid #000;
  color: #000;
  background: #fff;
  transition: 0.3s;
  overflow: auto;

  > div {
    position: absolute;
    top: 0;
    left: 0;
  }

  &.edit {
    border: 1px dashed red;
    padding: 5px;
  }

  &.dark {
    color: #fff;
    background: #000;
  }
}

.icon-menu {
  user-select: none;
  margin: 4px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  svg {
    transition: 0.3s;
    stroke: #000;
  }
  &:hover,
  &.active {
    background: #000;
    svg {
      stroke: #fff;
      width: 20px;
      height: 20px;
    }
  }
}

.role {
  font-size: 2rem;
  font-weight: bold;
}

.contact {
}

.container-company {
  max-width: 290px;
}
</style>
