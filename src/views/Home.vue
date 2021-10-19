<template>
  <div class="container-register">
    <div v-if="!hasNickName" class="container-inner-register">
          <h1 class="title-hey">Hey chat!</h1>
          <div class="in-line-form">
            <v-text-field
              label="Nickmane"
              solo
              dense
              v-model="nickname"
          ></v-text-field>
          <v-btn
            color="primary"
            dark
            @click="setNickName"
          >
            Join
          </v-btn>
          </div>
    </div>
    <div v-else>
      <div class="container-chat-messages">
        <v-card  v-for="(messageIt, index) in messages" :key="index"
            color="#385F73"
            dark
            class="card-message mt-3"
            v-bind:style=" test ? 'align-self: flex-end;' : 'align-self: flex-start;' ">
            <v-card-title class="text-body-1">
              {{ messageIt.message }}
            </v-card-title>
            <v-card-subtitle> From: {{ messageIt.nickname }}</v-card-subtitle>
          </v-card>
        <v-text-field
           class="inherit-fb"
            v-model="messageText"
            :append-outer-icon="messageText && 'mdi-send'"
            clear-icon="mdi-close-circle"
            clearable
            label="Message"
            type="text"
            @click:append="toggleMarker"
            @click:append-outer="sendMessage"
            @click:prepend="changeIcon"
            @click:clear="clearMessage"
          ></v-text-field>
          <h5>Nickname: {{nickname}} </h5>
      </div>
      <v-btn
      style="position:absolute;"
      class="ma-2 delete-db"
      color="error"
      @click="deleteAllChat"
    >
      Delete chat
    </v-btn>
    </div>
        
    
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Home',

    data(){
      return{
        hasNickName: false,
        nickname: '',
        password: 'Password',
        show: false,
        messageText: '',
        marker: true,
        iconIndex: 0,
        icons: [
          'mdi-emoticon',
          'mdi-emoticon-cool',
          'mdi-emoticon-dead',
          'mdi-emoticon-excited',
          'mdi-emoticon-happy',
          'mdi-emoticon-neutral',
          'mdi-emoticon-sad',
          'mdi-emoticon-tongue',
        ],
        messages:[{nickname: 'pedro', message: 'hola'}],
        test: false,
      }
    },
    components: {
    },
    watch: {
        messages() {
        },
    },
    mounted() {
    axios
      .get('http://localhost:3000/api/')
      .then(response => {
        console.log(response)
        this.messages = response.data;
        console.log('-----', this.message);
         });
  },
  methods: {
      setNickName() {
            if (this.nickname) {
              this.hasNickName=true
            }
        },
      toggleMarker () {
        this.marker = !this.marker
      },
      sendMessage () {
        this.saveMessage()
        this.resetIcon()
        this.clearMessage()
        
      },
      clearMessage () {
        this.messageText = ''
      },
      resetIcon () {
        this.iconIndex = 0
      },
      changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      },
      saveMessage(){
        console.log('ENVIANDO');
        const message = { 
        message: this.messageText,
        nickname: this.nickname,
        };
        axios
        .post('http://localhost:3000/api/', message)
        .then(response => {
          console.log(response)
          // this.message = [response.data];
          // console.log('-----', this.message);
          }
          );
      },
      deleteAllChat(){
        axios
        .post('http://localhost:3000/api/deletedb')
        .then(response => {
          console.log(response)
          // this.message = [response.data];
          // console.log('-----', this.message);
          }
          );
      }
  },
  computed: {
      icon () {
        return this.icons[this.iconIndex]
      },
    },
  }
</script>
