<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Login Facebook</title>
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" />
    <link href="style.css" rel="stylesheet" />
  </head>

  <body>
    <header>
      <div class="center">
        <div class="logo">
          <img src="facebook-logo.png" alt="logo facebook" />
        </div>

        <form method="post" class="form-login">
          <div class="form-element">
            <p>E-mail ou telefone</p>
            <input type="email" name="email"/>
          </div><!--form-element-->

          <div class="form-element">
            <p>Senha</p>
            <input type="password" name="password"/>
            <p class="forgot">Esqueceu a conta?</p>
          </div><!--form-element-->

          <div class="form-element">
            <input type="submit" name="submit" value="Enviar"/>
          </div><!--form-element-->
        </form>

        <div class="clear"></div>
      </div><!--center-->
    </header>

    <section class="main">
      <div class="center">
        <div class="img-person">
          <img src="img1.png" />
        </div><!--img-person-->

        <div class="open-account">
          <h2>Abra sua conta</h2>
          <h3>É gratuito e sempre será.</h3>

          <form class="form-open-account">
            <div class="w50">
              <input type="text" placeholder="Nome"/>
            </div>

            <div class="w50">
              <input type="text" placeholder="Sobrenome"/>
            </div>

            <div class="w100">
              <input type="text" placeholder="Celular ou email"/>
            </div>

            <div class="w100">
              <input type="password" placeholder="Nova senha"/>
            </div>

            <div class="w100">
              <h2>Data de Nascimento:</h2>
              <select class="nascimento" name="nascimento-dia">
                <?php
                   for($i = 1; $i <= 31; $i++){
                ?>
                <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                <?php } ?>
              </select>

              <select class="nascimento" name="nascimento-mes">
                <option value="0">Janeiro</option>
                <option value="1">Junho</option>
                <option value="2">Junho</option>
                <option value="3">Junho</option>
                <option value="4">Junho</option>
                <option value="5">Junho</option>
                <option value="6">Junho</option>
                <option value="7">Junho</option>
                <option value="8">Junho</option>
                <option value="9">Junho</option>
                <option value="10">Junho</option>
                <option value="11">Junho</option>

              </select>

              <select class="nascimento" name="nascimento-ano">
                <option value="0">1990</option>
              </select>
            </div>

            <div class="w100">
              <input type="submit" name="submit" value="Cadastrar"/>
            </div>
            <div class="clear"></div>
          </form>
        </div><!--open-account-->

        <div class="clear"></div>
      </div><!--center-->
    </section><!--main-->
  </body>
</html>