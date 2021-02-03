<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-base">
      <vx-card title="All Event">
        <vs-table search :data="data" class="mb-2">
          <template slot="header">
            <vs-button :to="{name: 'event-create'}">Create Event</vs-button>
          </template>
          <template slot="thead">
            <vs-th>Image</vs-th>
            <vs-th>Title</vs-th>
            <vs-th>Description</vs-th>
            <vs-th></vs-th>            
          </template>
          <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
              <vs-td class="img-container">
                <img :src="'http://api-kms.maesagroup.co.id/files/' + tr.image" width="150" height="100" class="product-img"/>
              </vs-td>
              <vs-td :data="tr.title">{{tr.title}}</vs-td>
              <vs-td :data="tr.description">{{tr.description}}</vs-td>
              <vs-td>
                <div class="flex">
                  <vs-button class="mr-2" :to="{name: `event-edit`, params: {id: tr.id}}" icon-pack="feather" icon="icon-edit" size="small"></vs-button>
                  <vs-button color="danger" @click="deletes(tr.id)" icon-pack="feather" icon="icon-delete" size="small"></vs-button>
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
        idDelete: null
      }
    },
    computed:{
      ...mapState({
        data: state => state.event.rows
      })
    },
    methods:{
      ...mapActions({
        dispatchIndex: 'event/index',
        dispatchDestroy: 'event/destroy'
      }),
      async confirmDelete () {
        try {
          await this.dispatchDestroy(this.idDelete)
          this.dispatchIndex()
          this.$vs.notify({
            title: 'Success',
            text: 'Your data has been deleted successfully',
            color: 'primary'
          })
          this.dispatchIndex(this.$store.state.AppActiveUser.data.company_id)
        } catch (error) {
          this.$vs.notify({
            title: 'Oops!',
            text: `Looks like something went wrong. please try again later (${error.data.message})`,
            color: 'danger'
          })
        }
      },
      deletes (id) {
        this.idDelete = id
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: 'Are you sure ?',
          text: 'Deleted data can no longer be restored',
          accept: this.confirmDelete
        })
      }
    },
    mounted () {
      this.dispatchIndex(this.$store.state.AppActiveUser.data.company_id)
    }
  }
</script>