var start;

function rotate(object, degrees) {
  object.css({
    '-webkit-transform': 'rotate(' + degrees + 'deg)',
    '-moz-transform': 'rotate(' + degrees + 'deg)',
    '-ms-transform': 'rotate(' + degrees + 'deg)',
    '-o-transform': 'rotate(' + degrees + 'deg)',
    'transform': 'rotate(' + degrees + 'deg)',
    'zoom': 1

  });
}
// each sceneshow;
var sceneshow = [
  // first
  function  (inpos) {
console.log(inpos,"1")
  },
  // seconde
  function  (inpos) {
console.log(inpos,"2")
  },
  // third
  function  (inpos) {
console.log(inpos,"3")
  },
  // forth
  function  (inpos) {
console.log(inpos,"4")
  },
  // end
  function  (inpos) {
console.log(inpos,"5")
  },
];

var emailshow = function  () {
  
};

var first = false;

var eventhadle = {
  scroll: function() {
    var turnwidth = 4000;
    var turn = pageYOffset / turnwidth;
    var pos = parseInt(turn) % 5;
    var times = 180;
    var deg = ((turn - pos) * times < 90) && pos > 0 ? -((turn - pos) * times + (pos - 1) * 90) : -(pos) * 90;
    rotate($('.scenes'), deg);
    if (pageYOffset > 21000){
      window.scrollTo(0,0); 
      first = true;
    }
    // background color
    if(pos>2){
        $('.page').addClass('pagereturn');
    }else{
        $('.page').removeClass('pagereturn');
    }
    // chapter rotate
    rotate($('.chapter'),360-deg);
    // sceneshow
    sceneshow[pos](turn-pos);

  },
  resize: function() {
    var w = $(window).width();
    // first edge
    $(".scenes .citybg").css("padding-left",-$('.scenes').offset().left);

    // 
    $("#endpreScene").css("left",(21000-$('.scenes').offset().left));

    // doms which needs whole window view
    $('#preScene,#endScene .gameover,#endScene .andover,#endpreScene').css('width', w);

  }

};

// person Action
var tu_action = {
   jump:function  () {
     // body...
   }
};
document.addEventListener("touchmove", function  () {
  $('.scenes .citybg').css('left', -pageYOffset);
  eventhadle.scroll();
}, false);


window.onscroll = function() {
  $('.scenes .citybg').css('left', -pageYOffset);
  eventhadle.scroll();

};

window.onresize = function() {
  eventhadle.resize();
};

var main = {

  preload: function() {

  },
  underground: function() {
    $('.underground').each(function () {
        for (var i = 41 ; i >= 0; i--) {     
            $(this).append("<div class='Galaxian-sc'></div>");
        }
    });
  },
  init: function() {
    var self = this
    $(document).ready(function() {
        eventhadle.resize();
        self.underground();
    });
  }
};


main.init();