$(function()
{
  $('.mosaic .container .mosaic-wrapper').slick(
    {
      centerMode : false,
      slidesToShow : 6,
      arrows : false,
      responsive : [
        {
          breakpoint : 768,
          settings : {
            centerMode : true,
            slidesToShow : 3,
            arrows : false
          }
        },
        {
          breakpoint : 580,
          settings : {
            centerMode : true,
            slidesToShow : 2,
            arrows : false
          }
        },
        {
          breakpoint : 360,
          settings : {
            centerMode : true,
            slidesToShow : 1,
            arrows : false
          }
        }
      ]
    }
  );

  $('.treatments .container').slick(
    {
      centerMode : false,
      slidesToShow : 3,
      arrows : false,
      infinite : false,
      responsive : [
        {
          breakpoint : 768,
          settings : {
            centerMode : false,
            slidesToShow : 2,
            arrows : false,
            dots : true,
            infinite : false
          }
        },
        {
          breakpoint : 480,
          settings : {
            centerMode : false,
            slidesToShow : 1,
            arrows : false,
            dots : true,
            infinite : false
          }
        }
      ]
    }
  );

  $('.testimonies .container').slick({
    centerMode : false,
      slidesToShow : 1,
      arrows : false,
      dots : true,
      infinite : false,
  })
})