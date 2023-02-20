window.onload = function() {

  function openForm() 
  {
    $('button').click(function(e) 
    {
      $('.bg').fadeIn();
      e.stopPropagation();
    });
  }

  function closeForm() 
  {
    $('body, .btnClose').click(function()
    {
      $('.bg').fadeOut();
    })

    $('form').click(function(e) 
    {
      e.stopPropagation();
    });
  }

  function invalidField(el)
  {
    el.css('color', 'red');
    el.css('border', '2px solid red');
    el.data('invalid', 'true');
  }

  //Resetar campo de entrada
  function focus(el)
  {
    el.css('color', '#ccc');
    el.css('border', '2px solid #ccc');
  }

  $('input[name="name"]').focus(function()
  {
    focus($(this));
  });

  //Validar o nome completo
  function checkName(name)
  {
    var nameSingle = name.split(' ');
    var nameAmount = name.split(' ').length;

    if (name == "")
    {
      return false;
    }
    else if(nameAmount >= 2)
    {
      for(var i = 0; i < nameAmount; i++)
      {
        if(nameSingle[i].match(/^[A-Z]{1}[a-z]{1,}$/))
        {
          return true;
        }
        else
        {
          return false;
        }
      }
    }
    else
    {
      return false;
    }
  }

  //Validar telefone
  function checkTel(tel)
  {
    if (tel.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null)
    {
      return false;
    }
  }

  //validar email
  function checkEmail(email)
  {
    if (email.match(/^([a-z0-9-_]{1,})+@+([a-z.]{1,})$/) == null)
    {
      return false;
    }
  }

  //validar o formulário
  function checkForm() {
    $('form').submit(function(e)
    {
      e.preventDefault();
      var name = $('input[name="name"]').val();
      var tel = $('input[type="tel"').val();
      var email = $('input[name="email"').val();

      checkName(name);
      checkTel(tel);
      checkEmail(email);

      if(checkName(name) == false)
      {
        invalidField($('input[name="name"]'));
      }
      else if (checkTel(tel) == false)
      {
        invalidField($('input[name="tel"]'));
      }
      else if (checkEmail(email) == false)
      {
        invalidField($('input[name="email"]'));
      }
    })
  }

  openForm();
  closeForm();
  checkForm();
}