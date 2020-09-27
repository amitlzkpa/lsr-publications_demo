<template>
  <div ref="sheetContainer" oncontextmenu="return false;">
    <div id="openseadragon" :style="'width:' + sheetWidth + 'px;' + 'height:' + sheetHeight + 'px;'"></div>
  </div>
</template>

<script>
import OpenSeadragon from 'openseadragon';


export default {
  data() {
    return {
      sheetWidth: 400,
      sheetHeight: 200
    }
  },
  async mounted() {
    let viewer = OpenSeadragon({
        id: "openseadragon",
        prefixUrl: "/openseadragon/images/",
        tileSources: "/imgs/out/output.dzi",
        showNavigator: false,
        showNavigationControl: false
    });
    window.addEventListener('resize', (e) => {
      this.sheetWidth = this.$refs.sheetContainer.clientWidth;
      this.sheetHeight = this.$refs.sheetContainer.clientHeight;
    });
    this.sheetWidth = this.$refs.sheetContainer.clientWidth;
    this.sheetHeight = this.$refs.sheetContainer.clientHeight;
  }
}
</script>