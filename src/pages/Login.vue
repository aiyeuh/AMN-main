<template>
  <div id="bg">
    <!-- <div @click="logini">
      <router-link to="/dashboard"></router-link>
      <router-view />
    </div> -->
    <b-card
      title="Helpdesk Login"
      img-src="./img/logo_amn.png"
      img-alt="logoamn"
      img-top
      img-height="100px"
      img-width="100px"
      class="cardlogin"
    >
      <b-form>
        <b-form-group
          id="uname-group"
          label="Username:"
          label-for="uname"
          label-class="nich"
        >
          <b-form-input
            id="uname"
            v-model="form.uname"
            type="text"
            placeholder="Enter Username"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="password"
          label="Password:"
          label-for="pass"
          label-class="nich"
        >
          <b-form-input
            id="input-pass"
            type="password"
            v-model="form.password"
            placeholder="Enter Password"
            description="Min. 8 characters"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox class="textcheck" value="me"
              ><p class="textcheck">Remember Me</p></b-form-checkbox
            >
          </b-form-checkbox-group>
          <br />
          <b-button
            pill
            @click="logini"
            class="btngin"
            type="submit"
            variant="primary"
            >Login</b-button
          >
          <small href="#ForgotPassword">Forgot Password?</small>
        </b-form-group>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        uname: "",
        password: "",
        checked: false,
      },
      succesed: false,
    };
  },
  methods: {
    logini() {
      let u = this.form.uname;
      let p = this.form.password;
      if (u == "admin" && p == "admin") {
        this.succesed = true;
        console.log("login benar");
      } else {
        console.log("SALAH COK");
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.uname = "";
      this.form.passw = "";
      this.form.checked = false;
    },
  },
};
</script>
<style>
/* .container {

} */
.text-center {
  font-size: 30px;
}

.nich {
  margin-top: 13px;
  color: black;
}
.btngin {
  padding: 50px;
  width: 250px;
}
.textcheck {
  margin-left: 4px;
  position: relative;
  color: black;
}
#uname {
  border-radius: 17px;
}
#uname-group {
  color: aliceblue;
}
#password {
  color: aliceblue;
}
#input-pass {
  border-radius: 17px;
}
#bg {
  height: 695px;
  background-image: url("../../public/img/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.cardlogin {
  max-width: 20rem;
  height: 30rem;

  margin-left: 500px;
  padding: 20px;
  box-shadow: 20px 8px 40px whitesmoke;
}
</style>
