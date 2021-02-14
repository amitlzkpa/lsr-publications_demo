<template>
  <div class="footer">

    <div class="p-d-flex p-mr-4">

      <div class="p-mr-2">
      </div>

      <div class="p-ml-auto">
        <p>
          LSR © {{ new Date().getFullYear() }}
        </p>
      </div>

    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style>
.footer {
  bottom: 0px;
  left: 0px;
  right: 0px;
  position: fixed;
  background-color: #EEEEEE;
  z-index: 9999;
}
</style>