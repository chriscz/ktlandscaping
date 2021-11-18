$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// https://css-tricks.com/snippets/jquery/shuffle-children/
$.fn.shuffleChildren = function() {
    $.each(this.get(), function(index, el) {
        var $el = $(el);
        var $find = $el.children();

        $find.sort(function() {
            return 0.5 - Math.random();
        });

        $el.empty();
        $find.appendTo($el);
    });
};

$(function(){

  var merge = function(o1, o2) {
    var merged = {};
    for (var key in o1) {
      if (o1.hasOwnProperty(key)) {
        merged[key] = o1[key]
      }
    }

    for (var key in o2) {
      if (o2.hasOwnProperty(key)) {
        merged[key] = o2[key]
      }
    }

    return merged;
  }

  var config = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  // shuffle the images
  $('.supplier-logos').shuffleChildren();
  $('.distributor-logos').shuffleChildren();

  $('.supplier-logos').slick(merge(config, { pauseOnHover: true }));
  $('.distributor-logos').slick(merge(config, { pauseOnHover: true }));

  // unhide
  $('.supplier-logos').show();
  $('.distributor-logos').show();

});
