<template>
  <div class="weapons2" @click="isShow = true">
    <div class="container" style="min-width:100%; padding:0px">
      <div>  
        <div class="row d-flex">
          <div class="col-3">
          </div>
          <div class="col-6">
          </div>
          <div class="col-3">
            <router-link to="/">
              <img class="group-image" src="../assets/Group 419.svg" alt="logo" id= "main_logo">
            </router-link> 
          </div>
        </div>
        <transition name="slide">
          <img v-if="!isShow" src="../assets/1.png" id= "myImg"/>
        </transition> 
        <transition name="slide">
          <img class="" v-if="isShow" src="../assets/2.png" id= "myImg2"/>
        </transition>
      </div>
    </div>
    <transition name="slide">
      <div class="container" v-if="!isShow" style="min-width:95%; display: flex; align-items:center; flex-direction:column; margin-top:100px  ">
        <div class="container" style="background:transparent; color:#FFF">
          <div class="row">
              <div class="col-12 col-md-3 d-flex align-items-center;" style="justify-content: flex-end;">
                <div style="height:70px;text-align:right;display:flex; border-right-style: solid;
                border-right-color: #30353d;flex-direction:column">
                <b class="largeScreen" style='color:#30353d;margin-right:20px; margin-top:10px'>HOME
                </b>
                
                <b class="largeScreen" style='margin-right:20px; '>WEAPON CATALOG
                </b>
                </div>
              </div>
              <div class="col-12 col-md-7 largeScreen" style="text-align:left">
                <h1 class="largeScreen">10x24mm Caseless</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque culpa repudiandae exercitationem? Enim alias debitis quis eius, nemo dolorem rerum odio harum laudantium eum totam sint fuga? Iusto, nisi?
              </div>
              <div class="col-2">
              </div>
            </div>
        </div>
        <div class="container" style="background:transparent; color:#FFF; padding:0px">
          <font-awesome-icon class="largeScreen" style="margin-right:0px; font-size:30px" icon="chevron-down"/>
        </div>
      </div>
    </transition>
    <transition name="zoom">
      <div class="container" v-if="isShow" style="min-width:95%; display: flex; align-items:center; flex-direction:column; margin-top:100px  ">
        <div class="container" style="background:transparent; color:#FFF">
          <div  class="row">
              <div class="col-12 col-md-3 d-flex align-items-center;" style="justify-content: flex-end;">
                <div style="height:70px;text-align:right;display:flex; border-right-style: solid;
                border-right-color: #30353d;flex-direction:column">
                <b class="largeScreen" style='color:#30353d;margin-right:20px; margin-top:10px'>HOME
                </b>
                
                <b class="largeScreen" style='margin-right:20px; '>WEAPON CATALOG
                </b>
                </div>
              </div>
              <div  class="col-12 col-md-7 largeScreen" style="text-align:left">
                <h1 class="largeScreen">M41A Pulse Rifle</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque culpa repudiandae exercitationem? Enim alias debitis quis eius, nemo dolorem rerum odio harum laudantium eum totam sint fuga? Iusto, nisi?
              </div>
              <div class="col-2">
              </div>
            </div>
        </div>
        <div class="container" style="background:transparent; color:#FFF; padding:0px">
          <font-awesome-icon class="largeScreen" style="margin-right:0px; font-size:30px" icon="chevron-down"/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import JQuery from 'jquery';
var $ = JQuery;
export default {
  data(){
    return {
      isShow:false,
    }
  },
  mounted: function() {
    $(document).ready(function() {
        setTimeout(function() {
          $("#myImg").animate({width: '100%'}, 600);
            $("#myImg").animate({'margin-top':'-25px',left: '0%',height: '300px',padding: '0px'}, 600);
            $("#main_logo").animate({'margin-bottom':'-100px'}, 600);
      },500);    
    });
  }
}
</script>
<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.6s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(4em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-4em, 0);
}
#myImg{
    margin-top: 200px;
    height:200px; 
    width:50%; 
    padding:0px; 
       
}
#myImg2{
  width: 100%;
  height: 300px;
  padding: '0px';
  margin-top:-25px
}
.weapons2 {
  cursor: pointer;
  background-color: black;
  height: 100vh;
  width: 100%;
  overflow: scroll;
}
.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  100% {
    opacity: 1;
  }
}
</style>
