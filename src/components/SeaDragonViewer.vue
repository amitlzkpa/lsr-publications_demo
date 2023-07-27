<template>
  <div ref="sheetContainer" oncontextmenu="return false;">
    <div
      id="openseadragon"
      oncontextmenu="return false;"
      :style="'width:' + sheetWidth + 'px;' + 'height:' + sheetHeight + 'px;'"
    ></div>
  </div>
</template>

<script>
import OpenSeadragon from 'openseadragon';

let unsubscribeStoreHook;

export default {
  data() {
    return {
      sheetWidth: 1200,
      sheetHeight: 400
    }
  },
  async mounted() {
    window.addEventListener('resize', (e) => {
      this.sheetWidth = this.$refs.sheetContainer.clientWidth;
      this.sheetHeight = this.$refs.sheetContainer.clientHeight;
    });
    this.sheetWidth = this.$refs.sheetContainer.clientWidth;
    this.sheetHeight = this.$refs.sheetContainer.clientHeight;

    unsubscribeStoreHook = this.$store.subscribe((mutation) => {
      if (mutation.type !== 'setSelectedSheet') return;
      this.updateSheetContent(mutation.payload);
    });
  },
  beforeDestroy() {
    unsubscribeStoreHook();
  },
  methods: {
    updateSheetContent(sheet) {
      let osd = document.getElementById("openseadragon");
      osd.innerHTML = '';
      let viewer = OpenSeadragon({
          id: "openseadragon",
          prefixUrl: "/openseadragon/images/",
          tileSources: `/imgs/out/output.dzi`,
          showNavigator: false,
          showNavigationControl: false
      });
    }
  }
}
</script>