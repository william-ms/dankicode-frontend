$(function()
{
  const imgShow = 3;
  const maxIndex = Math.ceil($('.mini-img-wrapper').length / 3) - 1;
  let curIndex = 0;

  function initSlider()
  {
    let elScroll = $('.sale-mini-wrapper');
    let elSingle = $('.mini-img-wrapper');

    let amtImg = $('.mini-img-wrapper').length * (100 / 3);

    elScroll.css('width', amtImg + '%');
    elSingle.css('width', (100 / 3) * (100 / amtImg) + '%');
  }

  function navigateSlider()
  {
    $('.right').click(function()
    {
      if(curIndex < maxIndex)
      {
        curIndex++;

        let elOff = $('.mini-img-wrapper').eq(curIndex * 3).offset().left - $('.sale-mini-wrapper').offset().left;
        $('.sale-mini-galery').animate({'scrollLeft' : elOff + 'px'});
      }
    });

    $('.left').click(function()
    {
      if(curIndex > 0);
      {
        curIndex--;

        let elOff = $('.mini-img-wrapper').eq(curIndex * 3).offset().left - $('.sale-mini-wrapper').offset().left;
        $('.sale-mini-galery').animate({'scrollLeft' : elOff + 'px'});
      }
    });
  }

  function clickSlider()
  {
    $('.mini-img-wrapper').click(function()
    {
      $('.mini-img-wrapper').css('background-color', 'transparent');
      $(this).css('background-color', 'rgb(210, 210, 210)');

      let img = $('.sale-mini-img').css('background-image');
      $('.sale-vehicle-img').css('background-image', img);
    })

    $('.mini-img-wrapper').eq(0).click();
  }

  initSlider();
  navigateSlider();
  clickSlider();
})