$(function()
{
  const directory = '/';

  $('[goto="contact"]').click(function()
  {
    location.href = directory + 'index.html?contact';
    return false;
  })

  function checkUrl()
  {
    var url = location.href.split('/');
    var curPage = url[url.length - 1].split('?');

    if(curPage[1] != undefined && curPage[1] == 'contact')
    {
      $('header nav a').css('color', 'black');
      $('footer nav a').css('color', 'white');
      $('[goto="contact"]').css('color', '#EB2D2D');
      $('html, body').animate({'scrollTop' : $('#contact').offset().top});
    }
  }

  checkUrl();
})