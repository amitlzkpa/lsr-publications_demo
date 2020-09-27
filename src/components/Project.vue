<template>
  
  <div>

    <div class="p-grid">

      <div class="p-col-fixed" style="width:400px">
        <DataTable :value="pages" class="p-datatable-gridlines">
          <Column field="title" header="Pages"></Column>
        </DataTable>
      </div>
      
      <div class="p-col">
        <SeaDragonViewer />
        <div>
          <p class="p-text-light">Phuktal Gonpa</p>
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
import SeaDragonViewer from '@/components/SeaDragonViewer.vue';


export default {
  components: {
    SeaDragonViewer
  },
  data() {
    return {
      pages: [
        { title: "Site Introduction"},
        { title: "Site Evolution"},
        { title: "Site Layout"},
        { title: "Site Analysis"},
        { title: "Stages of Construction"},
        { title: "Phase 1 Evolution I"},
        { title: "Phase 1 Evolution II"},
        { title: "Phase 1 Tumbalukhang"},
        { title: "Phase 1 Isometric View"},
        { title: "Phase 2&3 Evolution"},
        { title: "Phase 2&3 Structural Analysis"},
        { title: "Phase 2&3 Isometric View"},
        { title: "Phase 2&3 Structural Analysis"}
      ]
    }
  }
}
</script>

<style scoped>

</style>