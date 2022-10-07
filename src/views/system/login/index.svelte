<script>
  import Logo from '@/assets/images/logo.png'
</script>
<div class="container-login">
  <div class="wrap-login">
    <div class="form">
      <img class="logo" src={Logo} alt="logo">
      <div class="name">后台管理系统</div>
      <div class="wrap-input100 validate-input" data-validate = "Enter username">
        <input class="input100" autocomplete="off" type="text" name="username" placeholder="用户名">
        <span class="focus-input100">
          <i class="adminfont admin-font-yonghuming"></i>
        </span>
      </div>
      <div class="wrap-input100 validate-input" data-validate="Enter password">
        <input class="input100" type="password" name="pass" placeholder="密码">
        <span class="focus-input100">
          <i class="adminfont admin-font-tianchongxing-"></i>
        </span>
      </div>
      <div>
        <button class="login">登录</button>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .logo {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
    margin-bottom: 30px;
    pointer-events: none;
    user-select: none;
  }
  .container-login {
    background-image: url(@/assets/images/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container-login::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255,255,255,0.9);
  }
  .wrap-login {
    width: 500px;
    border-radius: 10px;
    overflow: hidden;
    padding: 55px 55px 37px 55px;
    background: #9152f8;
    background: -webkit-linear-gradient(to top, #7579ff, #b224ef);
    background: -o-linear-gradient(to top, #7579ff, #b224ef);
    background: -moz-linear-gradient(to top, #7579ff, #b224ef);
    background: linear-gradient(to top, #7579ff, #b224ef);
  }
  .name {
    font-size: 30px;
    color: #fff;
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
    display: block;
    padding-bottom: 34px;
  }
  .login {
    font-size: 18px;
    color: #555555;
    line-height: 1.2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    min-width: 120px;
    height: 50px;
    border-radius: 25px;
    background: #9152f8;
    background: -webkit-linear-gradient(to bottom, #7579ff, #b224ef);
    background: -o-linear-gradient(to bottom, #7579ff, #b224ef);
    background: -moz-linear-gradient(to bottom, #7579ff, #b224ef);
    background: linear-gradient(to bottom, #7579ff, #b224ef);
    position: relative;
    z-index: 1;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    outline: none !important;
    border: none;
  }
  .login:hover{
    color: #fff;

  }
  .login::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: #fff;
    top: 0;
    left: 0;
    opacity: 1;
    transition: all 0.4s;
  }
  .login:hover::before {
    background: transparent;
  }
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .wrap-input100 {
    width: 100%;
    position: relative;
    border-bottom: 2px solid rgba(255,255,255,0.24);
    margin-bottom: 30px;
  }

  .input100 {
    font-family: Poppins-Regular;
    font-size: 16px;
    color: #fff;
    line-height: 1.2;

    display: block;
    width: 100%;
    height: 50px;
    background: transparent;
    padding: 0 5px 0 38px;
  }
  .focus-input100 {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    text-align: left;
  }

  .focus-input100::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    background: #fff;
  }

  .focus-input100 i {
    font-family: Material-Design-Iconic-Font;
    font-size: 22px;
    color: #fff;
    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: 12px;
    left: 0px;
    padding-left: 5px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .input100:focus {
    padding-left: 5px;
  }

  .input100:focus + .focus-input100 i {
    top: -22px;
    font-size: 18px;
  }

  .input100:focus + .focus-input100::before {
    width: 100%;
  }
  input:focus::-webkit-input-placeholder { color:transparent; }
  input:focus:-moz-placeholder { color:transparent; }
  input:focus::-moz-placeholder { color:transparent; }
  input:focus:-ms-input-placeholder { color:transparent; }

  input::-webkit-input-placeholder { color: #fff;}
  input:-moz-placeholder { color: #fff;}
  input::-moz-placeholder { color: #fff;}
  input:-ms-input-placeholder { color: #fff;}
</style>