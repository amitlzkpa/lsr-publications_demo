<template>
  <div>

    <Sidebar :visible.sync="visibleLeft">
      Content
    </Sidebar>

    <div>
      <Button icon="pi pi-arrow-right" @click="visibleLeft = !visibleLeft" class="p-mr-2" />
      <SeaDragonViewer />
    </div>
    
  </div>
</template>

<script>
import SeaDragonViewer from '@/components/SeaDragonViewer.vue';



export default {
  components: {
    SeaDragonViewer
  },
  data() {
    return {
      visibleLeft: false
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>