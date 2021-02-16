<template>
  <div>

    <SeaDragonViewer />
    <div>
      <div v-if="project.sheets && project.sheets.length > 0">
        <h2>{{ project.sheets[0].title }}</h2>
        <hr />
        <p>{{ project.sheets[0].content }}</p>
      </div>
    </div>
    
  </div>
</template>

<script>
import SeaDragonViewer from '@/components/SeaDragonViewer.vue';



export default {
  components: {
    SeaDragonViewer
  },
  props: [ 'project' ],
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>