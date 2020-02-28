<template id='video'>
<div class="home-main">
    <!-- <main id="page-wrap"> -->
  <video-bg :sources="['http://thenewcode.com/assets/videos/nambia2.mp4']" img="demo/assets/bg.jpg">
  <!-- <Menu/> -->
   <!-- <main id="page-wrap"> -->
  <div id="nav">
    <div class="row">
      <div class="col-4 d-flex justify-content:center">
        <a v-b-modal.modal-center>
          <div class="row" style="margin-left:96px; cursor:pointer">
            <div class="col-6">
              <img src="../assets/play-button.svg" alt="" style="width:100%; height:auto;">
            </div>
            <div class="col-6 d-flex" style="flex-direction:column; text-align:left; padding-left:0">
              <b style="color:#FFF; letter-spacing: NaNpx; font-size:10px">VER</b> 
              <b style="color:#FFF; letter-spacing: NaNpx; font-size:10px">TRAILER</b>
            </div>
          </div>
        </a>
        <!-- <b-button @click="set()" style="color:red">play thriller</b-button>  -->
      </div>
      <div class="col-4">
        <img class="group-image" src="../assets/Group 419.svg" alt="logo">
      </div>
      <div class="col-4 d-flex justify-content: flex-end" style="text-align:right">
        <Push :isOpen="open1"
            
            @openMenu="setOpenState()"
            :right=true
            width="110"
        ><div style="color:red">menu</div>
        </Push>
      </div>
    </div>
    
      
      
    
    </div>
   
    <div class="container" style="color:red">
      <!-- <div v-if="this.play == true"> -->
        <div>
          <!-- <b-button v-b-modal.modal-center>Launch centered modal</b-button> -->

          <b-modal id="modal-center" size="xl" hide-footer centered>
            <div class="row">
              <div class="col-3" style="background-color:#000000; padding:0px">
              </div>
              <div class="col-6" style="background-color:#000000; padding:0px">
                <iframe class="thriller" src="https://www.youtube.com/embed/DyDfgMOUjCI?autoplay=1&controls=0&showinfo=0&autohide=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="col-3" style="background-color:#000000; padding:0px">
              </div>
            </div>
          </b-modal>
        </div>
      
          <!-- <iframe class="thriller" src="https://www.youtube.com/embed/DyDfgMOUjCI?autoplay=1&controls=0&showinfo=0&autohide=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
        
      <!-- </div> -->
    </div>
    <div class="jumbotron" style="color:red;text-align:right; font-size: 14px; letter-spacing: 2.38px;
      color: #FFFFFF;opacity: 1; background-color:transparent; margin-top:190px; padding: 4rem 6.5rem">
      <div class="row">
        <div class="col-4">
        </div>
        <div class="col-4">
        </div>
        <div class="col-4">
          <div>HOME</div>
          <div>WEAPON CATALOG</div>
        </div>
      </div>

    </div>
    <div class="jumbotron fixed-bottom" style="text-align:right; letter-spacing: 2.38px;
      color: #FFFFFF;opacity: 1; background-color:transparent; margin-top:0px; padding: 4rem 6.5rem">
      <div class="row">
        <div class="col-4">
          <div style="text-align:left; font-size: 14px" >BUILD BETTER WORLDS</div>
          <div style="text-align:left; font-size:9px; letter-spacing: 0.54px;color: #D9D9D9;opacity: 1;" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi, tenetur ex ea ut ipsam temporibus iure consectetur vero suscipit, quidem quod veniam quam accusamus harum quae unde explicabo quo!</div>
        </div>
        <div class="col-4">
        </div>
        <div class="col-4">
          <social-sharing url="https://vuejs.org/" inline-template>
            <div style="margin-bottom:10px">
              <network network="facebook" style="padding:30px">
                <font-awesome-icon style="cursor:pointer" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
              </network>
              <network network="twitter">
                <font-awesome-icon style="cursor:pointer" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
              </network>
            </div>
          </social-sharing>
              
          <div style="font-size: 12px; cursor:pointer"><font-awesome-icon style="margin-right:10px" icon="chevron-down"/>MORE INFO</div>
        </div>
      </div>

    </div>
    <!-- </main> -->
      </video-bg>
  
</div>
</template>


<script>
import { Push } from 'vue-burger-menu';
  export default {
    template: "#video",
    props: {
    sources: {
      type: Array,
      required: true
    },
    img: {
      type: String
    }
  },
   components:{
     Push,
  },
    data () {
    return {
      videoRatio: null,
      play:false,
      open1: false,
    }
  },
  methods: {
    set(){
      if(this.play == false){
        this.play = true
      } else {
        this.play = false
      }
    },
    setOpenState() {
      this.open1 = false;
    },
  }
  // mounted () {
  //   this.setImageUrl()
  //   this.setContainerHeight()
    
  //   if (this.videoCanPlay()) {
  //     this.$refs.video.oncanplay = () => {
  //       if (!this.$refs.video) return
        
  //       this.videoRatio = this.$refs.video.videoWidth / this.$refs.video.videoHeight
  //       this.setVideoSize()
  //       this.$refs.video.style.visibility = 'visible'
  //     }
  //   }
    
  //   window.addEventListener('resize', this.resize)
  // },
  
  // beforeDestroy () {
  //   window.removeEventListener('resize', this.resize)
  // },
  
  // methods: {
  //   resize () {
  //     this.setContainerHeight()
      
  //     if (this.videoCanPlay()) {
  //       this.setVideoSize()
  //     }
  //   },
    
  //   videoCanPlay () {
  //     return !!this.$refs.video.canPlayType
  //   },
    
  //   setImageUrl () {
  //     if (this.img) {
  //       this.$el.style.backgroundImage = `url(${this.img})`
  //     }
  //   },
    
  //   setContainerHeight () {
  //     this.$el.style.height = `${window.innerHeight}px`
  //   },
    
  //   setVideoSize () {
  //     var width, height, containerRatio = this.$el.offsetWidth / this.$el.offsetHeight
      
  //     if (containerRatio > this.videoRatio) {
  //       width = this.$el.offsetWidth
  //     } else {
  //       height = this.$el.offsetHeight
  //     }
      
  //     this.$refs.video.style.width = width ? `${width}px` : 'auto'
  //     this.$refs.video.style.height = height ? `${height}px` : 'auto'
  //   },
    
  //   getMediaType (src) {
  //     return 'video/' + src.split('.').pop()
  //   }
  // }
  }
</script>


<style lang="scss">
#nav {
  padding-top: 82px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  .VideoBg {
    width:100%;
    height: 100%;
  min-height: 640px;
}

.VideoBg__content {
  width:100%;
  height: auto;
  // text-align: center;
  // background-color: rgba(52, 72, 92, 0.7);
}

* {
  margin: 0;
}

// img {
//   width: 200px;
//   margin-top: 120px;
// }

h1, h4 {
  cursor: default;
}

a {
  text-decoration: none
}

h1 {
  margin: 40px 0;
  font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  font-size: 4em;
  color: #ebebeb;
}

h4, a {
  font-family: 'Source Sans Pro', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #7f8c8d;
}
// .VideoBg {
//   position: relative;
//   background-size: cover;
//   background-position: center;
//   overflow: hidden;
// }
// .VideoBg video {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   visibility: hidden;
//   transform: translate(-50%, -50%);
// }
.VideoBg__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
}


</style>
