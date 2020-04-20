(function() {
  var $fk = $(''
        + '<div class="wd-fmog">'
          + '<div class="wd-fmog-big-triangle"></div>'
          + '<div class="wd-fmog-small-triangle"></div>'
          + '<a>'
            + '<p class="wd-fmog-message">Fork me on GitHub</p>'
          + '</a>'
        + '</div>');

  $fk.find('.wd-fmog').css({
    'height'  : '140px',
    'position': 'absolute',
    'right'   : 0,
    'top'     : 0,
    'width'   : '140px',
    'z-index' : 10
  });

  $fk.find('.wd-fmog-big-triangle').css({
    'border-bottom': 'solid 70px white',
    'border-left'  : 'solid 70px white',
    'border-right' : 'solid 70px #aa0000',
    'border-top'   : 'solid 70px #aa0000',
    'box-sizing'   : 'border-box',
    'position'     : 'absolute',
    'right'        : 0,
    'top'          : 0,
    'width'        : '140px'
  });

  $fk.find('.wd-fmog-small-triangle').css({
    'border-bottom': 'solid 50px #ffffff00',
    'border-left'  : 'solid 50px #ffffff00',
    'border-right' : 'solid 50px white',
    'border-top'   : 'solid 50px white',
    'box-sizing'   : 'border-box',
    'height'       : '100px',
    'position'     : 'absolute',
    'right'        : 0,
    'top'          : 0,
    'width'        : '100px'
  });

  $fk.find('.wd-fmog-message').css({
    'color'      : 'white',
    'cursor'     : 'pointer',
    'height'     : '28px',
    'line-height': '28px',
    'position'   : 'absolute',
    'right'      : '-13px',
    'top'        : '30px',
    'transform'  : 'rotate(45deg)',
    'user-select': 'none'
  });

  window.$forkMeGH =  {
    show: function(url)  {
      $fk.find('a').attr('href', url);
      $('body').append($fk);
    }
  };
}());
