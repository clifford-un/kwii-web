<template>
    <v-layout id="register" class="full-heigth">
        <v-flex
        xs5
        id="chooser"
        >
            <v-container grid-list text-xs-center >
                <div id="appImage">
                    <img
                    src="~assets/images/KWII-LOGO.png"
                    height="200"
                    width="200"
                    />
                    <h1>KWII</h1>
                </div>
                <div id="appInfo">
                    <h2>This is't WhatsApp Web :P</h2>
                </div>
            </v-container>
        </v-flex>
        <v-flex>
            <v-container>
            <!--forms-->
            <nuxt/>
            </v-container>
        </v-flex>
    </v-layout>
</template>
<style scoped>
    #chooser{
        background-color: green
    }
    #appImage{
        font-family: Helvetica;
        color: white;
        margin: 100px 10px 50px 10px;
    }
    .full-heigth{
        height: -webkit-fill-available;
    }
</style>
