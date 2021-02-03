<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-base">
      <vx-card title="All Employee">
        <vs-table search :data="data" class="mb-2">
          <template slot="header">
            <vs-button :to="{name: 'employee-create'}">Create User</vs-button>
          </template>
          <template slot="thead">
            <vs-th></vs-th>
            <vs-th>Name</vs-th>
            <vs-th>Username</vs-th>
            <vs-th>Company</vs-th>
            <vs-th>Organization</vs-th>
            <vs-th>NIK</vs-th>
            <vs-th></vs-th>
          </template>
          <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
              <vs-td class="img-container">
                <vs-avatar :src="'http://api-kms.maesagroup.co.id/files/' + tr.image"/>
              </vs-td>
              <vs-td :data="tr.name">{{tr.name}}</vs-td>
              <vs-td :data="tr.username">{{tr.username}}</vs-td>
              <vs-td :data="tr.company.name">{{tr.company.name}}</vs-td>
              <vs-td :data="tr.organization.name">{{tr.organization.name}}</vs-td>
              <vs-td :data="tr.nik">{{tr.nik}}</vs-td>
              <vs-td>
                <div class="flex">
                  <vs-button class="mr-2" :to="{name: `employee-edit`, params: {id: tr.id}}" icon-pack="feather" icon="icon-edit" size="small"></vs-button>
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
        data: state => state.employee.rows
      })
    },
    methods:{
      ...mapActions({
        dispatchIndex: 'employee/index',
        dispatchDestroy: 'employee/destroy'
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
      this.dispatchIndex()
    }
  }
</script>