<template>

  <div>

    <Sidebar
      :visible.sync="coverVisible"
      :modal="false"
      :showCloseIcon="true"
      position="left"
      class="p-col-11 p-lg-8 p-md-8"
    >
      <h2>{{ project.title }}</h2>
      <hr />
      <p>{{ project.coverContent }}</p>
      <h2>Team</h2>
      <hr />
      <p>{{ project.teamCredits }}</p>
    </Sidebar>

    <Sidebar
      :visible.sync="sheetsVisible"
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
      @click="coverVisible = !coverVisible"
      :icon="coverVisible ? 'pi pi-times' : 'pi pi-info'"
      class="p-button-rounded p-button-secondary"
      style="position: fixed; right: 90px; bottom: 70px; z-index: 9999;"
    />

    <Button
      @click="sheetsVisible = !sheetsVisible"
      :icon="sheetsVisible ? 'pi pi-times' : 'pi pi-list'"
      class="p-button-rounded p-button-secondary"
      style="position: fixed; right: 40px; bottom: 70px; z-index: 9999;"
    />

    <div class="p-grid">
      <div class="p-col-12 p-lg-8 p-md-8">
        <SheetView
          :project="project"
        />
      </div>
    </div>

  </div>

</template>

<script>
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import SheetView from '@/components/SheetView.vue';


export default {
  components: {
    Button,
    Sidebar,
    SheetView
  },
  data() {
    return {
      sheetsVisible: true,
      coverVisible: false,
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