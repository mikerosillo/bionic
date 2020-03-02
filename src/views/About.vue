<template>
  <router-link to="/about/more" style="text-decoration:none">
    <div class="weapons">
      <div class="container" style="min-width:95%">
        <div id="nav">
            <div class="row d-flex">
              <div class="col-3">
              </div>
              <div class="col-6">
              </div>
              <div class="col-3">
                <router-link to="/">
                  <img class="group-image" src="../assets/Group 419.svg" alt="logo">
                </router-link>
              </div>
            </div>
        </div>
      </div>
      <div class="container" style="min-width:95%; display: flex; align-items:center; flex-direction:column; margin-top:100px  ">
        <div class="jumbotron" style="background:transparent; color:#FFF">
          <div class="row ">
            <div class="col-12 col-md-3 d-flex align-items-center;" style="justify-content: flex-end;">
              <div style="height:130px;text-align:right;display:flex; border-right-style: solid;
              border-right-color: #30353d;flex-direction:column">
              <div class="largeScreen" style='color:#30353d;margin-right:20px; margin-top:30px;'>HOME
              </div>
              <div class="largeScreen" style='margin-right:20px; '>WEAPON CATALOG
              </div>
              </div>
            </div>
            <div class="col-12 col-md-7 largeScreen" style="text-align:left">
              <h1 class="largeScreen">New Arrivals</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque culpa repudiandae exercitationem? Enim alias debitis quis eius, nemo dolorem rerum odio harum laudantium eum totam sint fuga? Iusto, nisi?
            </div>
            <div class="col-2">
            </div>
          </div>
        </div>
        <div class="jumbotron" style="background:transparent; color:#FFF">
          <font-awesome-icon class="largeScreen" style="margin-right:0px; font-size:30px" icon="chevron-down"/>
        </div>
      </div>
    </div>
  </router-link>
</template>
