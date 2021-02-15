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
          <div v-if="project.sheets && project.sheets.length > 0">
            <h2>{{ project.sheets[0].title }}</h2>
            <hr />
            <p>{{ project.sheets[0].content }}</p>
          </div>
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