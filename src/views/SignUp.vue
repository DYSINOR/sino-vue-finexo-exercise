<template>
    <Form @submit="handleSubmit">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <Field type="email" name="email" :rules="emailRule" v-model="email"/>
        <ErrorMessage name="email" />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <Field type="password" name="password" :rules="passwordRule" v-model="password"/>
        <ErrorMessage name="password" />
      </div>
      <button class="btn btn-primary">Submit</button>
    </Form>
   </template>
   <script>
   import { Form, Field, ErrorMessage } from "vee-validate";
   import * as Yup from "yup";
   import axios from 'axios'
   export default {
    components: { Form, Field, ErrorMessage },
    data() {
      return {
        email: "",
        password: "",
        emailRule: Yup.string().email().required(),
        passwordRule: Yup.string().min(6).required(),
      };
    },
    methods: {
      async handleSubmit(){
            //console.log(this.email);
            const {data} = await axios.post("http://172.23.128.93:3000/register",
                {
                    // name: this.formData.name,
                    email: this.email,
                    password: this.password,
                    // repeat_pass: this.formData.repeat_pass
                }
            );
            console.log(data)
        },
    },
   };
   </script>