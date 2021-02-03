<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-base">
      <vx-card title="All Questions">
        <vs-table search :data="data" class="mb-2">
        <template slot="header">
          <vs-button @click="addQuestion">Add Question</vs-button>
        </template>
        <template slot="thead">
          <vs-th>Question</vs-th>
        </template>
        <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="tr.description">
                {{tr.description}}
              </vs-td>
              <template slot="expand">
                <vs-chip class="w-full" v-for="(val,k) in tr.answers" :key="k" :color="val.is_true==1 ? 'success' : 'warning'">
                  <vs-avatar icon-pack="feather" :icon="val.is_true==1 ? 'icon-check' : 'icon-x'" :color="val.is_true ? 'success' : 'warning'"></vs-avatar>
                  {{val.name}}
                </vs-chip>
              </template>
            </vs-tr>
        </template>
        </vs-table>
        <vs-popup :active.sync="popUp" title="Add New Question">
          <vs-input v-model="f_question" class="w-full" label-placeholder="Question"></vs-input>
          <table class="w-full">
            <thead>
              <tr>
                <th>Answer List</th>
                <th width="25">True Answer</th>
              </tr>
            </thead>
            <tr v-for="(tr, i) in f_answers" :key="i">
              <td>
                <vs-input class="w-full" label-placeholder="Answer" v-model="tr.name"></vs-input>
              </td>
              <td class="text-center">
                <vs-checkbox v-model="tr.is_true"></vs-checkbox>
              </td>
            </tr>
          </table>
          <vs-button class="mt-3 w-full" @click="storeAnswer">Save</vs-button>
        </vs-popup>
      </vx-card>
    </div>
  </div>
</template>

<script>
  const ansDef = [
    {
      is_true: false,
      name: ""
    },
    {
      is_true: false,
      name: ""
    },
    {
      is_true: false,
      name: ""
    },
    {
      is_true: false,
      name: ""
    }
  ]
  import {mapState, mapActions} from 'vuex'
  export default {
    data () {
      return {
        popUp: false,
        f_question: "",
        f_answers:[
          {
            is_true: false,
            name: ""
          },
          {
            is_true: false,
            name: ""
          },
          {
            is_true: false,
            name: ""
          },
          {
            is_true: false,
            name: ""
          },
        ]
      }
    },
    computed:{
      ...mapState({
        data: state => state.course.rows
      })
    },
    methods:{
      ...mapActions({
        dispatchStoreQuestion: 'course/store_question',
        dispatchAllQuestion: 'course/getQuestion'
      }),
      addQuestion(){
        this.f_question = ""
        this.f_answers = ansDef
        this.popUp = true
      },
      async storeAnswer(){
        let payload = {
          course_id: this.$route.params.id,
          description: this.f_question,
          answers: this.f_answers
        }
        await this.dispatchStoreQuestion(payload)
        this.popUp = false       
        this.dispatchAllQuestion(this.$route.params.id) 
      },
    },
    mounted () {
      this.dispatchAllQuestion(this.$route.params.id)
    }
  }
</script>