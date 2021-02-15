<template>
  <div>

    <div class="p-grid">
      <div class="p-col-fixed" style="width:100px"></div>
      <div class="p-col">
        
        <div class="p-grid">

          <div class="p-col">
            <router-link to="/project/phuktal-gonpa" style="text-decoration: none;">
              <Card>
                <template slot="header">
                    <img src="/imgs/phuktal-banner.jpg">
                </template>
                <template slot="title">
                    Phuktal Gonpa
                </template>
                <template slot="subtitle">
                    2012-13
                </template>
                <template slot="content">
                    <p>
                      This research compiles an architectural analysis of the settlement by trying to understand the different factors determining the development of the place. The report includes a set of conservation documents of the historic place undertaken by a team of students as a means to understand the place.
                    </p>
                </template>
              </Card>
            </router-link>
          </div>

          <div class="p-col">
            <Card>
              <template slot="header">
                  <img src="/imgs/dummy-2.jpg">
              </template>
              <template slot="title">
                  Project 2
              </template>
              <template slot="subtitle">
                  2018-19
              </template>
              <template slot="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue sed quam sed ornare. Nulla ipsum purus, feugiat a egestas in, luctus et nibh. Morbi eget odio pulvinar, facilisis tortor quis, molestie ante. Maecenas posuere erat a vestibulum mattis. Donec tempus orci mi, iaculis at interdum arcu.
                  </p>
              </template>
            </Card>
          </div>

          <div class="p-col">
            <Card>
              <template slot="header">
                  <img src="/imgs/dummy-3.jpg">
              </template>
              <template slot="title">
                  Project 3
              </template>
              <template slot="subtitle">
                  1989-90
              </template>
              <template slot="content">
                  <p>
                    Donec vitae imperdiet eros. Vivamus lacinia pulvinar diam sed blandit. Nulla imperdiet est lectus, ac pellentesque diam faucibus et. Morbi arcu elit, ullamcorper quis libero sit amet, tempor scelerisque massa. Etiam pellentesque suscipit facilisis. Ut eu convallis lectus. Praesent consectetur ante lorem, sed porta leo laoreet et.
                  </p>
              </template>
            </Card>
          </div>

        </div>
        
      </div>
      <div class="p-col-fixed" style="width:100px"></div>
    </div>
    
  </div>
</template>

<script>



export default {
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>