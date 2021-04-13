<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-base">
      <vx-card title="Input Data Course">
        <div class="vx-col w-full">
            <input class="hidden" type="file" @change="changeImage" ref="imageInput" v-validate="'required'" data-vv-as="Course Image" name="image" accept="image/jpeg,image/png"><br>
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
        <div class="vx-row mb-5">
          <div class="vx-col w-full">
            <small class="ml-2">Type</small> <br>
            <vs-radio class="ml-2 mr-2" v-model="type" vs-value="1">Hard Skill</vs-radio>
            <vs-radio class="ml-2 mr-2" v-model="type" vs-value="4">Soft Skill</vs-radio>
            <vs-radio class="ml-2 mr-2" v-model="type" vs-value="2">Our Company</vs-radio>
            <vs-radio class="ml-2 mr-2" v-model="type" vs-value="3">Corporate Value</vs-radio>
          </div>
        </div>
        <div class="vx-row mb-5">
          <div class="vx-col w-full">
            <small class="ml-2">Upload file</small> <br>
            <input class="ml-2 mr-2" type="file" id="file" ref="file" @change="getBase64File"/>
          </div>
        </div>
        <div class="vx-row mb-5">
          <div class="vx-col w-full">
            <small class="ml-2">Upload video</small> <br>
            <input class="ml-2 mr-2" type="file" id="video" ref="file" @change="getBase64Video"/>
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
      organization_id:null,
      image: '',
      title:'',
      description:'',
      file: '',
      video: '',
      link:'',
      type: 1,
      allowedImageType:['image/jpeg','image/png']
    }
  },
  methods:{
    ...mapActions({
      dispatchStore: 'course/store',
      dispatchUpdate: 'course/update',
      dispatchShow: 'course/show'
    }),
    store () {
      this.$validator.validateAll().then(async res => {
        if (!res) return false
        const payload = {
          id: this.$route.params.id,
          organization_id: this.$route.params.organizationId,
          image: this.image,
          title: this.title,
          description: this.description,
          video: this.video,
          link: this.link,
          type: this.type,
          file: this.file
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
          this.$router.push({name: 'course'})
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
      this.organization_id = success.organization_id
      this.image = 'http://api-kms.maesagroup.co.id/files/' + success.image
      this.title = success.title
      this.description = success.description
      this.file = success.file
      this.video = success.video
      this.link = success.link
      this.type = success.type
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
    },
    getBase64File(event) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = ()=> {
       this.file = reader.result;
      };
      this.$emit('input', event.target.files[0])
    },
    getBase64Video(event) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = ()=> {
       this.video = reader.result;
      };
      this.$emit('input', event.target.files[0])
    }
  },
  async mounted () {
    if (this.$route.params.id) {
      this.getDetail()
    }
  }
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
