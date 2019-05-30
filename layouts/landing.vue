<template>
<v-container grid-list text-xs-center >
      <v-layout id="register">
              <div class= "left">
                  <v-container grid-list text-xs-center >
                    <div id="appImage">
                    <img src="~assets/images/KWII-LOGO.png" height="200" width="200"/>
                    <h1>KIWII</h1>
                    </div>
                    <div id="appInfo">
                    <h2>Chatea con tus amigos y más...</h2>
                    </div>
                  </v-container>
              </div>
              <div class="rigth">
                <!--forms-->
              <nuxt/>
              </div>
      </v-layout>
      </v-container>
</template>
<style>
    #appImage{
        font-family: Helvetica;
        color: white;
        margin: 100px 10px 50px 10px;
    }
    #appInfo{
        margin: auto;
    }
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
        background: #c0e4ceec;
        width:30%;
        height: -webkit-fill-available;
        border-radius: 10px;
        border-style: dashed;
        border-color: green;
    }
    div.rigth{
        background: white;
        background-repeat: repeat-y;
        width:70%;
        height: 100%;
        padding:20px;
    }
</style>
