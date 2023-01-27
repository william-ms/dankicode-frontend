$(function()
{
  var currentValue = 0;
  var isDrag = false;
  var priceMax = 70000;
  var priceCurrent = 0;

  $('.price-bar-pointer').mousedown(function()
  {
    isDrag = true;
  })

  $(document).mouseup(function()
  {
    isDrag = false;
    enableTextSelection();
  })

  $('.price-bar').mousemove(function(e)
  {
    if(isDrag)
    {
      disableTextSelection();
      var elBase = $(this);
      var mouseX = e.pageX - elBase.offset().left;
      
      if(mouseX < 0)
      {
        mouseX = 0;
      }
      if(mouseX > elBase.width())
      {
        mouseX = elBase.width();
      }

      $('.price-bar-pointer').css('left', (mouseX - 13) + 'px')
      currentValue = (mouseX / elBase.width()) * 100;
      $('.price-bar-fill').css('width', currentValue + '%');

      priceCurrent = (currentValue / 100) * priceMax;
      priceCurrent = formatPrice(priceCurrent);
      $('.price-current').html('R$' + priceCurrent);
    }
  })

  function formatPrice(priceCurrent)
  {
    priceCurrent = priceCurrent.toFixed(2);
    priceArr = priceCurrent.split('.');

    var priceNew = formatTotal(priceArr);

    return priceNew;
  }

  function formatTotal(priceArr)
  {
    if(priceArr[0] < 1000)
    {
      return priceArr[0] + ',' + priceArr[1];
    }
    else if(priceArr[0] < 10000)
    {
      return priceArr[0][0] + '.' + priceArr[0].substr(1, priceArr[0].length) + ',' + priceArr[1];
    }
    else
    {
      return priceArr[0][0] + priceArr[0][1] + '.' + priceArr[0].substr(2, priceArr[0].length) + ',' + priceArr[1];
    }
    
  }

  function disableTextSelection()
  {
    $('body').css('-webkit-user-select', 'none');
    $('body').css('-moz-user-select', 'none');
    $('body').css('-ms-user-select', 'none');
    $('body').css('-o-user-select', 'none');
    $('body').css('user-select', 'none');
  }

  function enableTextSelection()
  {
    $('body').css('-webkit-user-select', 'auto');
    $('body').css('-moz-user-select', 'auto');
    $('body').css('-ms-user-select', 'auto');
    $('body').css('-o-user-select', 'auto');
    $('body').css('user-select', 'auto');
  }
})