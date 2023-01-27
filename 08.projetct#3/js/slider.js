$(function()
{
  const personAmount = $('.person-about').length;

  function initSlider()
  {
    const sizeContainer = 100 * personAmount;
    const sizeSingle = 100 / personAmount;

    //Define a largura do slide e do conteúdo
    $('.person-about').css('width', sizeSingle + '%');
    $('.slider').css('width', sizeContainer + '%');

    //Adiciona os botões do slide
    for(let i = 0; i < personAmount; i++)
    {
      if(i == 0)
      {
        $('.slider-bullets').append('<span style="background-color:rgb(170, 170, 170);"></span>')
      }
      else
      {
        $('.slider-bullets').append('<span></span>')
      }
    }
  }

  function goToSlider(slideCurrent)
  {
    let offSetX = $('.person-about').eq(slideCurrent).offset().left - $('.slider').offset().left;

    $('.slider-bullets span').css('background-color', 'rgb(200, 200, 200)');
    $('.slider-bullets span').eq(slideCurrent).css('background-color', 'rgb(170, 170, 170)');
    $('.slider-scroll').animate({'scrollLeft' : offSetX});
  }

  function autoPlay()
  {
    let delay = 3000;
    let slideCurrent = 0;

    setInterval(function()
    {
      slideCurrent += 1;
      
      if(slideCurrent == personAmount)
      {
        slideCurrent = 0;
      }

      goToSlider(slideCurrent);
    }, delay);
  }

  $(window).resize(function()
  {
    $('.slider-scroll').stop().animate({'scrollLeft' : 0});
  })

  initSlider();
  autoPlay();
})