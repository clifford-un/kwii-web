<template>
<v-container grid-list text-xs-center >
      <v-layout id="register">
              <div class= "left">
                  Image and app information
              </div>
              <div class="rigth">
              <nuxt/>
              </div>
      </v-layout>
      </v-container>
</template>
<style>
    div.container{
        margin: 0;
        margin-top: 0px;
        max-width: 100%;
        padding: 0px;
    }
    div.layout{
        margin: 0;
        margin-top: 0px;
        max-width: 100%;
        padding: 0px;
    }
    div.left{
        font-family: Arial, Helvetica, sans-serif;
        color: #282828;
        margin: 0px;
        background: #35693c;
        width:30%;
        height: -webkit-fill-available;
    }
    div.rigth{
        background: white;
        background-repeat: repeat-y;
        width:70%;
        height: 100%;
    }
</style>
