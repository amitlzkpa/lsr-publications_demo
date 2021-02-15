<template>
  
  <div>

    <Sidebar
      :visible.sync="pagesVisible"
      :modal="false"
      :showCloseIcon="false"
      position="right"
      class="p-col-11 p-lg-4 p-md-4"
    >
      <h3>Sheets</h3>
      <DataTable
        :value="project.sheets"
        :scrollable="true"
        scrollHeight="80vh"
        style="width: 92%;"
        class="p-datatable-gridlines"
      >
        <Column field="title"></Column>
      </DataTable>
    </Sidebar>

    <Button
      @click="pagesVisible = !pagesVisible"
      :icon="pagesVisible ? 'pi pi-times' : 'pi pi-list'"
      class="p-button-rounded p-button-secondary"
      style="position: fixed; right: 15px; bottom: 70px; z-index: 9999;"
    />

    <div class="p-grid">
      <div class="p-col-12 p-lg-8 p-md-8">
        <SeaDragonViewer />
        <div>
          <p class="p-text-light">{{ project.title }}</p>
          <h2>Site Analysis</h2>
          <hr />
          <p>
            Landscape, extreme climate, and isolation are the key elements shaping this monastic community. These elements were not only important in determining the geometry of the structure but also played an important role in defining the use of materials.
          </p>
          <p>
            High amounts of snow and rainfall made it essential to use materials like Stone and Mud. Since pure mud is not suitable for such harsh climatic conditions, the main foundation of the complex is made of decreasing sizes of stone and the walls are then built with adobe blocks. This gradient allows for random voids which absorbs any tremors by constantly settling, in order to achieve stability. The undressed stones along with the inward gradient in the foundation helps in added stability by maintaining an angle of repose. This angle of repose in relation to the scale of the foundations allows for an added space in the lower section of the houses as a basement level. The natural feature that has helped this construction withstand even more, is the shallow reach of the hard strata. This helps in minimizing vibrations by acting as a shock absorber. This complex amalgamation of the natural terrain and construction technique,  gives a visual appearance as if they were carved out if the cliff face.
          </p>
        </div>
      </div>
    </div>

  </div>
  
</template>

<script>
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import SeaDragonViewer from '@/components/SeaDragonViewer.vue';


export default {
  components: {
    Button,
    Sidebar,
    SeaDragonViewer
  },
  data() {
    return {
      pagesVisible: true,
      project: {},
    }
  },
  async mounted() {
    this.projectId = this.$route.params.projectId
    let res = await this.$api.get(`/api/projects/id/${this.projectId}`);
    this.project = res.data;
    console.log(this.project);
  }
}
</script>

<style scoped>

</style>