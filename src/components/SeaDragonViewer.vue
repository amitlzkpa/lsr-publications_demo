<template>
  <div>
    <div id="openseadragon1" style="width: 800px; height: 600px;"></div>
  </div>
</template>

<script>
import OpenSeadragon from 'openseadragon';


export default {
  async mounted() {
    let viewer = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "/openseadragon/images/",
        tileSources: "/imgs/out/output.dzi"
    });
  }
}
</script>