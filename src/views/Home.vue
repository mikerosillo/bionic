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
            @closeMenu="setCloseState()"
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
    <div class="jumbotron " style="text-align:right; font-size: 14px; letter-spacing: 2.38px;
      color: #FFFFFF;opacity: 1; background-color:transparent; margin-top:190px; padding: 4rem 6.5rem">
      <div class="row" style="backgroun-color:red;min-height:50px">
        <div class="col-4">
          <!-- <div style="color:#FFF">WEAPON CATALOG</div>
          <div style="color:#FFF">WEAPON CATALOG</div> -->
        </div>
        <div class="col-4">
          <!-- <div style="color:#FFF">WEAPON CATALOG</div>
          <div style="color:#FFF">WEAPON CATALOG</div> -->
        </div>
        <div class="col-4">
          <transition name="slide-fade">
            <div style="color:#FFF" v-if="open1 == false">HOME</div>
          </transition>
          
          <transition name="slide-fade">
            <router-link to="/about" style="color:#FFF" v-if="open1 == false">
              WEAPON CATALOG
            </router-link>
          </transition>
        </div>
      </div>

    </div>
    <div class="jumbotron " style="text-align:right; letter-spacing: 2.38px;
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
              
          <a @click="isShow = !isShow" style="font-size: 12px; cursor:pointer;"><span v-if="isShow == false"><font-awesome-icon style="margin-right:10px" icon="chevron-down"/></span><span v-else ><font-awesome-icon style="margin-right:10px" icon="chevron-up"/></span>MORE INFO
          </a>
           <!-- <div id="root" style="margin-top:-20px" @click="isShow = !isShow">
             href="#footer" v-smooth-scroll="{ duration: 300 }"
            <li>Root</li>

            <transition name="slide">
                <ul class="child" v-if="isShow">
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                  <li>item 4</li>
                </ul>
            </transition>
          </div> -->
        </div>
      </div>
      

    </div>
    <div id="footer" class="row">
        <transition name="slide">
          <div style="color:#FFF" class="col-12" v-if="isShow">
            <div class="jumbotron" style="margin-bottom: 0px; background-color:#000000">
            FOOTER
            </div>
          </div>
        </transition>
      </div>
    <!-- </main> -->
      </video-bg>
      
      <!-- <ul id="root" style="margin-top:-20px" @click="isShow = !isShow">
            <li>Root</li>

            <transition name="slide">
                <ul class="child" v-if="isShow">
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                  <li>item 4</li>
                </ul>
            </transition>
          </ul> -->
      <!-- Footer -->
      <!-- <mdb-footer color="indigo" class="font-small pt-0">
        <mdb-container>
          <mdb-row>
            <mdb-col md="12">
              <div class="mb-5 flex-center">
                <a class="fb-ic"><i class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                <a class="tw-ic"><i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                <a class="gplus-ic"><i class="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                <a class="li-ic"><i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                <a class="ins-ic"><i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                <a class="pin-ic"><i class="fab fa-pinterest fa-lg white-text fa-2x"> </i></a>
              </div>
            </mdb-col>
          </mdb-row>
        </mdb-container>
        <div class="footer-copyright text-center py-3">
          <mdb-container fluid>
            &copy; 2020 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </mdb-container>
        </div>
      </mdb-footer> -->
      <!-- Footer -->
  
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
      isShow:false,
      show:true
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
      this.open1 = true;
    },
    setCloseState() {
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


.slide-enter-active {
   -moz-transition-duration: 0.6s;
   -webkit-transition-duration: 0.6s;
   -o-transition-duration: 0.6s;
   transition-duration: 0.6s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.6s;
   -webkit-transition-duration: 0.6s;
   -o-transition-duration: 0.6s;
   transition-duration: 0.6s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
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
    height: auto;
    // max-height: 648px;
}

.VideoBg__content {
  width:100%;
  height: auto;
  // max-height: 648px;
  overflow: scroll;
  overflow-x: hidden
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
.VideoBg {
  position: relative;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.VideoBg video {
  position: absolute;
  top: 50%;
  left: 50%;
  visibility: hidden;
  transform: translate(-50%, -50%);
}
.VideoBg__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
}
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


</style>
