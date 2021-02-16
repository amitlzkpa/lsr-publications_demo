<template>
  <div>

    <SeaDragonViewer />
    <div>
      <div>
        <h2>{{ sheet.title }}</h2>
        <hr />
        <p>{{ sheet.content }}</p>
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
  props: [ 'sheet' ],
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>