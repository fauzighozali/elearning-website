<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-base">
      <vx-card title="Input Data Event">
        <div class="vx-col w-full">
            <input class="hidden" type="file" @change="changeImage" ref="imageInput" v-validate="'required'" data-vv-as="Event Image" name="image" accept="image/jpeg,image/png"><br>
            <img v-if="image.length<1" src="@/assets/images/upload.png" width="100" height="100" alt="" class="preview" @click="$refs.imageInput.click()">
            <img v-if="image.length>0" :src="image" alt="" class="preview" @click="$refs.imageInput.click()">
            <span class="text-danger text-sm center" v-show="errors.has('image')">{{ errors.first('image') }}</span>
        </div>
        <div class="vx-row mb-5 mt-10">
          <div class="vx-col w-full">
            <vs-input class="w-full" v-validate="'required'" name="title" label="Title" v-model="title"></vs-input>
            <span class="text-danger text-sm" v-show="errors.has('title')">{{errors.first('title')}}</span>
          </div>
        </div>
        <div class="vx-row mb-5">
          <div class="vx-col w-full">
            <vs-input class="w-full" v-validate="'required'" name="description" label="Description" v-model="description"></vs-input>
            <span class="text-danger text-sm" v-show="errors.has('description')">{{errors.first('description')}}</span>
          </div>
        </div>
        <div class="vx-row mb-5">
          <div class="vx-col w-full">
            <vs-input class="w-full" v-validate="'required'" name="link" label="Link" v-model="link"></vs-input>
            <span class="text-danger text-sm" v-show="errors.has('link')">{{errors.first('link')}}</span>
          </div>
        </div>
        <vs-button @click="store">Save</vs-button>
      </vx-card>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      company_id:null,
      image: '',
      title:'',
      description:'',
      link:'',
      allowedImageType:['image/jpeg','image/png']
    }
  },
  methods:{
    ...mapActions({
      dispatchStore: 'event/store',
      dispatchUpdate: 'event/update',
      dispatchShow: 'event/show'
    }),
    store () {
      this.$validator.validateAll().then(async res => {
        if (!res) return false
        const payload = {
          id: this.$route.params.id,
          company_id: this.$store.state.AppActiveUser.data.company_id,
          image: this.image,
          title: this.title,
          description: this.description,
          link: this.link
        }
        try {
          if (this.$route.params.id) {
            await this.dispatchUpdate(payload)
          } else {
            await this.dispatchStore(payload)
          }
          this.$vs.notify({
            title: 'Success!',
            text: 'Data was saved successfully!',
            color: 'success'
          })
          this.$router.push({name: 'event'})
        } catch (error) {
          this.$vs.notify({
            title: 'Oops!',
            text: error.data.message,
            color: 'danger'
          })
        } 
      })
    },
    async getDetail () {
      const { success } = await this.dispatchShow(this.$route.params.id)
      this.company_id = success.company_id
      this.image = 'http://127.0.0.1:8000/storage/' + success.image
      this.title = success.title
      this.description = success.description
      this.link = success.link
    },
    async changeImage(e) {
      const image = e.target
      if (image.files && image.files[0]) {
        const filterFormat = await this.allowedImageType.filter(e => e==image.files[0].type)
        if(filterFormat.length<1) return this.$vs.notify({title:`Maaf!`,text:`File bukan berupa gambar!`,color:`warning`});
        const reader = new FileReader()
        reader.onload = async (e) => {
            this.image = e.target.result;
        }
        reader.readAsDataURL(image.files[0])
      }
    }
  },
  async mounted () {
    if (this.$route.params.id) {
      this.getDetail()
    }
  },
}
</script>

<style lang="scss" scoped>
    .preview {
        max-width:100%;
        margin-left:auto;
        margin-right:auto;
        display:block;
        cursor: pointer;
        border-radius: 5px;
    }
    .center {
        margin-left:auto;
        margin-right:auto;
        display:block;
        text-align: center;
        margin-bottom: 5px;
    }
    .text-small {
        font-size: 12px;
        padding-left: 5px;
    }
</style>
