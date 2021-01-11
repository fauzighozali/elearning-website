<!-- =========================================================================================
    File Name: FormWizardNumberTab.vue
    Description: Form wizard with numbers in tabs
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Question 1-5" code-toggler>

        <!-- <p>Create neat and clean form wizard using <code>form-wizard</code> and <code>tab-content</code> components</p> -->

        <div class="mt-5">
            <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit" @on-complete="formSubmitted">
                <tab-content title="Question 1" class="mb-5">
                    <!-- tab 1 content -->
                    <div class="vy-row">
                        <div class="vx-col w-full">
                            <vs-textarea v-model="textarea" label="Question" class="mb-0 md:mt-10 mt-6" rows="3" />
                        </div>
                        <div class="vx-col w-full mt-5">
                            <vs-input label="Answer A" v-model="firstName" class="w-full" />
                        </div>
                        <div class="vx-col w-full mt-5">
                            <vs-input label="Answer B"  v-model="lastName" class="w-full" />
                        </div>
                        <div class="vx-col w-full mt-5">
                            <vs-input label="Answer C"  v-model="email" class="w-full" />
                        </div>
                         <div class="vx-col w-full mt-5">
                            <vs-input label="Answer D"  v-model="email" class="w-full" />
                        </div>
                         <div class="vx-col w-full mt-5">
                            <vs-input label="Answer E"  v-model="email" class="w-full" />
                        </div>
                        <div class="vx-col w-full">
                            <vs-textarea v-model="textarea" label="Correct Answer" class="mb-0 md:mt-10 mt-6" rows="3" />
                        </div>
                    </div>
                </tab-content>

                <tab-content title="Question 2" class="mb-5">
                    <!-- tab 2 content -->
                    <div class="vy-row">
                        <div class="vx-col w-full">
                            <vs-textarea v-model="textarea" label="Question" class="mb-0 md:mt-10 mt-6" rows="3" />
                        </div>
                        <div class="vx-col w-full mt-5">
                            <vs-input label="Answer A" v-model="firstName" class="w-full" />
                        </div>
                        <div class="vx-col w-full mt-5">
                            <vs-input label="Answer B"  v-model="lastName" class="w-full" />
                        </div>
                        <div class="vx-col w-full mt-5">
                            <vs-input label="Answer C"  v-model="email" class="w-full" />
                        </div>
                         <div class="vx-col w-full mt-5">
                            <vs-input label="Answer D"  v-model="email" class="w-full" />
                        </div>
                         <div class="vx-col w-full mt-5">
                            <vs-input label="Answer E"  v-model="email" class="w-full" />
                        </div>
                        <div class="vx-col w-full">
                            <vs-textarea v-model="textarea" label="Correct Answer" class="mb-0 md:mt-10 mt-6" rows="3" />
                        </div>
                    </div>
                </tab-content>

               <tab-content title="Question 3" class="mb-5">
                    <!-- tab 3 content -->
                    <div class="vy-row">
                        <div class="vx-col w-full">
                            <vs-textarea v-model="textarea" label="Question" class="mb-0 md:mt-10 mt-6" rows="3" />
                        </div>
                        <div class="vx-col w-full mt-5">
                            <vs-input label="Answer A" v-model="firstName" class="w-full" />
                        </div>
                        <div class="vx-col w-full mt-5">
                            <vs-input label="Answer B"  v-model="lastName" class="w-full" />
                        </div>
                        <div class="vx-col w-full mt-5">
                            <vs-input label="Answer C"  v-model="email" class="w-full" />
                        </div>
                         <div class="vx-col w-full mt-5">
                            <vs-input label="Answer D"  v-model="email" class="w-full" />
                        </div>
                         <div class="vx-col w-full mt-5">
                            <vs-input label="Answer E"  v-model="email" class="w-full" />
                        </div>
                        <div class="vx-col w-full">
                            <vs-textarea v-model="textarea" label="Correct Answer" class="mb-0 md:mt-10 mt-6" rows="3" />
                        </div>
                    </div>
                </tab-content>

                <tab-content title="Question 4" class="mb-5">
                    <!-- tab 4 content -->
                    <div class="vy-row">
                        <div class="vx-col w-full">
                            <vs-textarea v-model="textarea" label="Question" class="mb-0 md:mt-10 mt-6" rows="3" />
                        </div>
                        <div class="vx-col w-full mt-5">
                            <vs-input label="Answer A" v-model="firstName" class="w-full" />
                        </div>
                        <div class="vx-col w-full mt-5">
                            <vs-input label="Answer B"  v-model="lastName" class="w-full" />
                        </div>
                        <div class="vx-col w-full mt-5">
                            <vs-input label="Answer C"  v-model="email" class="w-full" />
                        </div>
                         <div class="vx-col w-full mt-5">
                            <vs-input label="Answer D"  v-model="email" class="w-full" />
                        </div>
                         <div class="vx-col w-full mt-5">
                            <vs-input label="Answer E"  v-model="email" class="w-full" />
                        </div>
                        <div class="vx-col w-full">
                            <vs-textarea v-model="textarea" label="Correct Answer" class="mb-0 md:mt-10 mt-6" rows="3" />
                        </div>
                    </div>
                </tab-content>

                 <tab-content title="Question 5" class="mb-5">
                    <!-- tab 5 content -->
                    <div class="vy-row">
                        <div class="vx-col w-full">
                            <vs-textarea v-model="textarea" label="Question" class="mb-0 md:mt-10 mt-6" rows="3" />
                        </div>
                        <div class="vx-col w-full mt-5">
                            <vs-input label="Answer A" v-model="firstName" class="w-full" />
                        </div>
                        <div class="vx-col w-full mt-5">
                            <vs-input label="Answer B"  v-model="lastName" class="w-full" />
                        </div>
                        <div class="vx-col w-full mt-5">
                            <vs-input label="Answer C"  v-model="email" class="w-full" />
                        </div>
                         <div class="vx-col w-full mt-5">
                            <vs-input label="Answer D"  v-model="email" class="w-full" />
                        </div>
                         <div class="vx-col w-full mt-5">
                            <vs-input label="Answer E"  v-model="email" class="w-full" />
                        </div>
                        <div class="vx-col w-full">
                            <vs-textarea v-model="textarea" label="Correct Answer" class="mb-0 md:mt-10 mt-6" rows="3" />
                        </div>
                    </div>
                </tab-content>

            </form-wizard>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;form-wizard color=&quot;rgba(var(--vs-primary), 1)&quot; :title=&quot;null&quot; :subtitle=&quot;null&quot; finishButtonText=&quot;Submit&quot; @on-complete=&quot;formSubmitted&quot;&gt;
      &lt;tab-content title=&quot;Step 1&quot; class=&quot;mb-5&quot;&gt;

          &lt;!-- tab 1 content --&gt;
          &lt;div class=&quot;vx-row&quot;&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full mt-5&quot;&gt;
                  &lt;vs-input label=&quot;First Name&quot; v-model=&quot;firstName&quot; class=&quot;w-full&quot; /&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full mt-5&quot;&gt;
                  &lt;vs-input label=&quot;Last Name&quot;  v-model=&quot;lastName&quot; class=&quot;w-full&quot; /&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full mt-5&quot;&gt;
                  &lt;vs-input type=&quot;email&quot; label=&quot;Email&quot;  v-model=&quot;email&quot; class=&quot;w-full&quot; /&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full mt-5&quot;&gt;
                  &lt;vs-select v-model=&quot;city&quot; class=&quot;w-full select-large&quot; label=&quot;City&quot;&gt;
                      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in cityOptions&quot; class=&quot;w-full&quot; /&gt;
                  &lt;/vs-select&gt;
              &lt;/div&gt;
          &lt;/div&gt;
      &lt;/tab-content&gt;

      &lt;!-- tab 2 content --&gt;
      &lt;tab-content title=&quot;Step 2&quot; class=&quot;mb-5&quot;&gt;
          &lt;div class=&quot;vx-row&quot;&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full&quot;&gt;
                  &lt;vs-input label=&quot;Proposal Title&quot; v-model=&quot;proposalTitle&quot; class=&quot;w-full mt-4&quot; /&gt;
                  &lt;vs-input label=&quot;Job Title&quot;  v-model=&quot;jobTitle&quot; class=&quot;w-full mt-4&quot; /&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full&quot;&gt;
                  &lt;vs-textarea v-model=&quot;textarea&quot; label=&quot;Short discription&quot; class=&quot;mb-0 md:mt-10 mt-6&quot; rows=&quot;3&quot; /&gt;
              &lt;/div&gt;
          &lt;/div&gt;
      &lt;/tab-content&gt;

      &lt;!-- tab 3 content --&gt;
      &lt;tab-content title=&quot;Step 3&quot; class=&quot;mb-5&quot;&gt;
          &lt;div class=&quot;vx-row&quot;&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full&quot;&gt;
                  &lt;vs-input label=&quot;Event Name&quot; v-model=&quot;eventName&quot; class=&quot;w-full mt-5&quot; /&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full&quot;&gt;
                  &lt;vs-select v-model=&quot;city&quot; class=&quot;w-full select-large mt-5&quot; label=&quot;Event Location&quot;&gt;
                      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in cityOptions&quot; class=&quot;w-full&quot; /&gt;
                  &lt;/vs-select&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full mt-5&quot;&gt;
                  &lt;vs-select v-model=&quot;status&quot; class=&quot;w-full select-large&quot; label=&quot;Event Status&quot;&gt;
                      &lt;vs-select-item :key=&quot;index&quot; :value=&quot;item.value&quot; :text=&quot;item.text&quot; v-for=&quot;(item,index) in statusOptions&quot; class=&quot;w-full&quot; /&gt;
                  &lt;/vs-select&gt;
              &lt;/div&gt;
              &lt;div class=&quot;vx-col md:w-1/2 w-full md:mt-8&quot;&gt;
                  &lt;div class=&quot;demo-alignment&quot;&gt;
                      &lt;span&gt;Requirements:&lt;/span&gt;
                      &lt;div class=&quot;flex&quot;&gt;
                        &lt;vs-checkbox&gt;Staffing&lt;/vs-checkbox&gt;
                        &lt;vs-checkbox&gt;Catering&lt;/vs-checkbox&gt;
                      &lt;/div&gt;
                  &lt;/div&gt;
              &lt;/div&gt;
          &lt;/div&gt;
      &lt;/tab-content&gt;
  &lt;/form-wizard&gt;
&lt;/template&gt;

&lt;script&gt;
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  data() {
    return {
      firstName: &quot;&quot;,
      lastName: &quot;&quot;,
      email: &quot;&quot;,
      city: &quot;new-york&quot;,
      proposalTitle: &quot;&quot;,
      jobTitle: &quot;&quot;,
      textarea: &quot;&quot;,
      eventName: &quot;&quot;,
      eventLocation: &quot;san-francisco&quot;,
      status: &quot;plannning&quot;,
      cityOptions: [
        {text: &quot;New York&quot;, value:&quot;new-york&quot;},
        {text: &quot;Chicago&quot;, value:&quot;chicago&quot;},
        {text: &quot;San Francisco&quot;, value:&quot;san-francisco&quot;},
        {text: &quot;Boston&quot;, value:&quot;boston&quot;},
      ],
      statusOptions: [
        {text: &quot;Plannning&quot;, value:&quot;plannning&quot;},
        {text: &quot;In Progress&quot;, value:&quot;in progress&quot;},
        {text: &quot;Finished&quot;, value:&quot;finished&quot;},
      ],
      LocationOptions: [
        {text: &quot;New York&quot;, value:&quot;new-york&quot;},
        {text: &quot;Chicago&quot;, value:&quot;chicago&quot;},
        {text: &quot;San Francisco&quot;, value:&quot;san-francisco&quot;},
        {text: &quot;Boston&quot;, value:&quot;boston&quot;},
      ],
    }
  },
  methods: {
    formSubmitted() {
      alert(&quot;Form submitted!&quot;);
    }
  },
  components: {
    FormWizard,
    TabContent
  }
}
&lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      city: 'new-york',
      proposalTitle: '',
      jobTitle: '',
      textarea: '',
      eventName: '',
      eventLocation: 'san-francisco',
      status: 'plannning',
      cityOptions: [
        {text: 'New York', value:'new-york'},
        {text: 'Chicago', value:'chicago'},
        {text: 'San Francisco', value:'san-francisco'},
        {text: 'Boston', value:'boston'}
      ],
      statusOptions: [
        {text: 'Plannning', value:'plannning'},
        {text: 'In Progress', value:'in progress'},
        {text: 'Finished', value:'finished'}
      ],
      LocationOptions: [
        {text: 'New York', value:'new-york'},
        {text: 'Chicago', value:'chicago'},
        {text: 'San Francisco', value:'san-francisco'},
        {text: 'Boston', value:'boston'}
      ]
    }
  },
  methods: {
    formSubmitted () {
      alert('Form submitted!')
      this.$router.push(`/apps/user/user-create-course`).catch(() => {})
    }
  },
  components: {
    FormWizard,
    TabContent
  }
}
</script>
