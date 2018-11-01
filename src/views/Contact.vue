<template>
  <div class="contact">
    <div class="container">
      <div class="row grid-center">
      <div class="col-xs-12">
        <div class="grid-example-block ">
          <h1 class="ui-title-1">Contact Us</h1>
        </div>
      </div>
      </div>
      <div class="row grid-center">
        <div class="col-xs-6">
          <div class="grid-example-block">
            <form @submit.prevent="formFront(user)">
              <div class="form-item" :class="{ 'errorInput': $v.user.name.$error }">
                <label for="nameField">Name</label>
                <input id="nameField"
                type="text"
                placeholder="input name" 
                v-model ="user.name"
                :class ="{ 'error': $v.user.name.$error }"
                @change ="$v.user.name.$touch()">
                <div class="error" v-if="!$v.user.name.required">Field is required</div>
                <div class="error" v-if="!$v.user.name.minLength">Name must have at least {{$v.user.name.$params.minLength.min}} letters.</div>
              </div>
              <div class="form-item" :class="{ 'errorInput': $v.user.phone.$error }">              
                <label for="ageRangeField" >Phone</label>
                <masked-input 
                id="phoneField" 
                type="tel"
                mask="\+\375 (11) 111-11-11"
                @input="rawVal = arguments[1]"
                placeholder="input phone format +375(29)000-00-00" 
                v-model="user.phone"
                @change ="$v.user.phone.$touch()" />
                <div class="error" v-if="!$v.user.phone.required">Field is required</div>
              </div>
              <div class="form-item" :class="{ 'errorInput': $v.user.message.$error }">
                <label for="commentField">Message <span class="countMessage">{{user.message.length}}</span></label>
                <textarea 
                id="commentField" 
                placeholder="input message" 
                v-model="user.message"
                @change ="$v.user.message.$touch()">
                </textarea>
                <div class="error" v-if="!$v.user.message.required">Field is required</div>
                <div class="error" v-if="!$v.user.message.maxLength">Name must have at least {{$v.user.message.$params.maxLength.max}} letters.</div>
              </div>
              <div class="row grid-middle">
                <div class="col-xs-6 grid-end">
                  <button class="button button--plain button-primary button--big" type="submit">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
  import { required, minLength, maxLength} from 'vuelidate/lib/validators'
  import MaskedInput from 'vue-masked-input' 
  export default {
    components: {
      MaskedInput 
    },
    data() {
      return {
        user: {
          name: '',
          phone: '',
          message: ''
        },
        submitted: {
          phone: '',
          message: ''
        }
      }
    },
    validations: {
      user: {
        name: {
          required,
          minLength: minLength(3)
          
        },
        message: {
          required,
          maxLength: maxLength(250),
        },
        phone:{
          required
        }
      }
    },
    computed: {
      formUser() {
        this.name = this.$store.state.userData.name
        return name
      }
    },
    methods: {
      formFront (user) {
        this.$v.$touch()
        if(this.$v.$invalid) {
          this.$notify({
              group: 'foo',
              type: 'warn',
              text: 'Incorrect form.'
            });
        } else {
          this.$store.dispatch('formUser', user)
          .then(response=> {
            // console.log(response)
              var response = response.headers
              this.$notify({
              group: 'foo',
              type: 'success',
              text: 'Your message has been successfully sent.'
            });
            this.submitted.phone = this.user.phone
            this.submitted.message = this.user.message
            this.user.phone = this.user.message = ''
          })
          .catch(error=>{
            // console.log(error)
            this.$notify({
              group: 'foo',
              type: 'warn',
              text: 'Error.'
            });
          })
        }
      }
    }
  }

</script>
<style lang="sass">
  .form-item
    margin-bottom: 2rem
    .error
      display: none
      color:  #fc5c65
      font-size: 0.75rem
    &.errorInput
      .error
        display: block
  form
    width: 50%
    @media screen and (max-width: 768px)
      width: 100%
  .countMessage
    color:  #fc5c65
  fieldset, input, select, textarea
    margin-bottom: 0
</style>

