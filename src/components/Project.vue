<template>

  <div>

    <!-- cover -->
    <Sidebar
      :visible.sync="coverVisible"
      :modal="false"
      :showCloseIcon="true"
      position="left"
      style="top: 56px; bottom: 42px; overflow-y: auto;"
      class="p-col-11 p-lg-8 p-md-8"
    >
      <h2>{{ project.title }}</h2>
      <hr />
      <p>{{ project.coverContent }}</p>
      <h2>Team</h2>
      <hr />
      <p>{{ project.teamCredits }}</p>
    </Sidebar>

    <!-- sheet-list -->
    <Sidebar
      :visible.sync="sheetsVisible"
      :modal="false"
      :showCloseIcon="false"
      position="right"
      class="p-col-11 p-lg-4 p-md-4"
    >
      <DataTable
        :value="project.sheets"
        :scrollable="true"
        scrollHeight="80vh"
        style="width: 92%;"
        class="p-datatable-gridlines"
      >
        <Column
          field="title"
          header="Sheets"
        >
          <template #body="slotProps">
            <div
              @click="onSheetClick(slotProps.data)"
              style="cursor: pointer;"
              :class="(selectedSheet._id === slotProps.data._id) ? 'p-text-bold': ''"
            >
              {{ slotProps.data.title }}
            </div>
          </template>
        </Column>
      </DataTable>
    </Sidebar>

    <!-- cover-button -->
    <Button
      @click="coverVisible = !coverVisible"
      :icon="coverVisible ? 'pi pi-times' : 'pi pi-info'"
      class="p-button-rounded p-button-secondary"
      style="position: fixed; right: 90px; bottom: 70px; z-index: 9999;"
    />

    <!-- sheet-list-button -->
    <Button
      @click="sheetsVisible = !sheetsVisible"
      :icon="sheetsVisible ? 'pi pi-times' : 'pi pi-list'"
      class="p-button-rounded p-button-secondary"
      style="position: fixed; right: 40px; bottom: 70px; z-index: 9999;"
    />

    <div class="p-grid">
      <div class="p-col-12 p-lg-8 p-md-8">
        <SheetView
          v-if="selectedSheet !== {}"
          :sheet="selectedSheet"
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
    }
  },
  computed: {
    project() { return this.$store.getters.getProject },
    selectedSheet() { return this.$store.getters.getSelectedSheet },
  },
  async mounted() {
    this.projectId = this.$route.params.projectId
    let res = await this.$api.get(`/api/projects/id/${this.projectId}`);
    this.$store.commit('setProject', res.data);

    // quick-fix: load first page by default
    if (res.data && res.data.sheets && res.data.sheets.length > 0) {
      this.onSheetClick(res.data.sheets[0])
    }
  },
  methods: {
    async onSheetClick(sheet) {
      this.$store.commit('setSelectedSheet', sheet);
    }
  }
}
</script>

<style scoped>
</style>