<template>
  <v-app>
    <v-app-bar
      app
      color="#18a381"
      dark
      elevation="0"
    >
    <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-sm-none">      
    </v-app-bar-nav-icon>
      <template>
        <v-tabs v-model="tab" align-with-table class="d-none d-sm-flex">
          <v-tabs-slider color="gray"></v-tabs-slider>
          <v-tab v-for="item in items" :key="item" :to="item.url">
            {{item.name}}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <!--Se agrega la barra de navegación-->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item, index) in items" :to="item.url">
            <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title @click="tab=index">{{item.name}}</v-list-item-title>              
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!--Se termina la barra de navegación-->    
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    tab: null,
    items:[
      {
        name: "Inicio",
        url: "/",
        btn: "",
        color: "",
        icon: "fas fa-home"
      },
      {
        name: "Registrarse",
        url: "/formulario",
        btn: "",
        color: "",
        icon: "fa-solid fa-keyboard"
      },
      {
        name: "Datos Api",
        url: "/datos",
        btn: "",
        color: "",
        icon: "fa-solid fa-database"
      },
      {
        name: "Modelado 3D",
        url: "/modelado",
        btn: "",
        color: "",
        icon: "fa-solid fa-cube"
      },
      {
        name: "Acerca De",
        url: "/about",
        btn: "",
        color: "",
        icon: "fa-solid fa-info"
      },
    ],
  }),
};
</script>