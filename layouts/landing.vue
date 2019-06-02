<template>
  <v-layout id="register" class="full-heigth">
    <v-flex
      id="chooser"
      xs4
    >
      <v-container grid-list text-xs-center>
        <h1
          style="color: white"
        >
          {{ appTitle }}
        </h1>
        <div id="appImage">
          <img
            :src="options[active_option].image_path"
            height="200"
            width="200"
          >
        </div>
        <h2>
          {{ options[active_option].text }}
        </h2>
        <v-flex xs6 offset-xs4>
          <!--No pude centar estos botones de mejor manera-->
          <v-radio-group
            v-model="active_option"
            row
          >
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
        <!--forms-->
        <nuxt />
      </v-container>
    </v-flex>
  </v-layout>
</template>
<style scoped>
    #chooser{
        background-color: green
    }
    #appImage{
        margin: 100px 10px 50px 10px;
    }
    .full-heigth{
        height: -webkit-fill-available;
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
          image_path: '/_nuxt/assets/images/KWII-LOGO.png',
          text: 'This is\'t WhatsApp Web :P'
        },
        {
          image_path: 'data:image/png;base64,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',
          text: 'This is a WhatsApp Web fork xD'
        },
        {
          image_path: '/_nuxt/assets/images/KWII-LOGO.png',
          text: 'This is\'t WhatsApp Web :\'v'
        }
      ]
    }
  }
}
</script>
