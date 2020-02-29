<template>
<main id="page-wrap">
  <div id="app">
    <!-- <Menu/> -->
    <!-- <main id="page-wrap"> -->
      <!-- <transition name="page" mode="out-in"> -->
      <transition name="fade"
        mode="out-in">
        <router-view/>
      </transition>
    <!-- </main> -->
  </div>
   </main> 
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3f3f41;
  // height: 100%;
  // min-height: 800px;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.page-enter-active, .page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}



</style>
