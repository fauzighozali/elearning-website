<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-base">
      <vx-card>
        <vs-table search :data="data" class="mb-2">
          <template slot="header">
            <h3>
              All Organization
            </h3>
          </template>
          <template slot="thead">
            <vs-th>Code</vs-th>
            <vs-th>Name</vs-th>
            <vs-th></vs-th>            
          </template>
          <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="tr.code">{{tr.code}}</vs-td>
              <vs-td :data="tr.name">{{tr.name}}</vs-td>
              <vs-td>
                <div class="flex">
                  <vs-button class="mr-2" :to="{name: `course-read`, params: {id: tr.id}}" icon-pack="feather" icon="icon-edit" size="small"></vs-button>
                </div>
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vx-card>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    data () {
      return {
        
      }
    },
    computed:{
      ...mapState({
        data: state => state.course.rows
      })
    },
    methods:{
      ...mapActions({
        dispatchIndex: 'course/index'
      })
    },
    mounted () {
      this.dispatchIndex(this.$store.state.AppActiveUser.data.company_id)
    }
  }
</script>