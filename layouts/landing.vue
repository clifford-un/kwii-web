<template>
  <v-layout id="register" class="full-heigth">
    <v-flex id="chooser" xs4>
      <v-container grid-list text-xs-center>
        <div id="appImage">
          <img :src="options[active_option].image_path" height="200" width="200">
        </div>
        <h1>
          {{ appTitle }}
        </h1>
        <h3>
          {{ options[active_option].text }}
        </h3>
        <v-flex xs6 offset-xs4>
          <v-radio-group v-model="active_option" row>
            <v-radio
              v-for="option in options.length"
              :key="option"
              :value="option-1"
            />
          </v-radio-group>
        </v-flex>
      </v-container>
    </v-flex>
    <v-flex>
      <v-container>
        <nuxt />
      </v-container>
    </v-flex>
  </v-layout>
</template>

<style scoped>
    #chooser{
        background-color: "#51AA69"
    }
    #appImage{
        margin: 100px 10px 50px 10px;
    }
    .full-heigth{
        height: -webkit-fill-available;
    }
    h1, h3{
      color: white
    }
</style>

<script>
export default {
  data: () => {
    return {
      appTitle: 'KWII',
      active_option: 0,
      options: [
        {
          image_path: 'https://image.flaticon.com/icons/svg/1078/1078011.svg',
          text: 'Be a Kwiier, Join Us to Kwii Platform'
        },
        {
          image_path: 'https://image.flaticon.com/icons/svg/263/263069.svg',
          text: 'Your messages were never more secure'
        },
        {
          image_path: 'https://image.flaticon.com/icons/svg/1122/1122581.svg',
          text: 'Chat Everywhere, Anywhere'
        }
      ]
    }
  }
}
</script>
