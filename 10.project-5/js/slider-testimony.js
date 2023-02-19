$(function()
{
  const amtTestimonies = $('.testimony-single').length;
  var curIndex = 0;

  function initTestimonies()
  {
    $('.testimony-single').hide();
    $('.testimony-single').eq(0).show();
  }

  function navTestimonies()
  {
    $('.arrows .right').click(function()
    {
        curIndex++;

        if(curIndex >= amtTestimonies)
        {
          curIndex = 0;
        }

        $('.testimony-single').hide();
        $('.testimony-single').eq(curIndex).show();
    })

    $('.arrows .left').click(function()
    {
      curIndex--;

      if(curIndex < 0)
      {
        curIndex = amtTestimonies - 1;
      }

      $('.testimony-single').hide();
      $('.testimony-single').eq(curIndex).show();
    })
  }

  initTestimonies();
  navTestimonies();
})