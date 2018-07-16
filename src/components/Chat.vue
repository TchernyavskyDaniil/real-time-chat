<template>
	<div class="chat container">
    <h2 class="center teal-text title-chat">Hello {{this.name}} !</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="msg in messages" :key="msg.id" class="msg">
            <span class="teal-text">{{msg.name}}</span>
            <span class="grey-text text-darken-3">{{msg.content}}</span>
            <span class="grey-text time">{{msg.timestamp}}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
  import NewMessage from '@/components/NewMessage'
  import db from '@/firebase/init'
  import moment from 'moment'
  
  export default {
    name: "Chat",
    components: {NewMessage},
    props: ['name'],
    component: {
      NewMessage
    },
    data () {
      return {
        messages: []
      }
    },
    created () {
      let ref = db.collection('messages').orderBy('timestamp')
      
      ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            let doc = change.doc
            this.messages.push({
              id: doc.id,
              name: doc.data().name,
              content: doc.data().content,
              timestamp: moment(doc.data().timestamp).format('lll')
            })
          }
        })
      })
    }
  }
</script>

<style>
  .title-chat {
    font-size: 2.6em;
    margin-bottom: 40px;
  }
  
  .chat span {
    font-size: 1.4em;
  }
  
  .chat .time {
    display: block;
    font-size: 0.8em;
  }
  
  .messages {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-height: 300px;
    overflow: auto;
  }
  
  .messages::-webkit-scrollbar {
    width: 3px;
  }
  
  .messages::-webkit-scrollbar-track {
    background: #ddd;
  }
  
  .messages::-webkit-scrollbar-thumb {
    background: #aaa;
  }
  
  .msg {
    text-align: left;
  }
</style>
