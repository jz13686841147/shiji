  /*获取屏幕的宽高*/
  $(document).ready(
      function() {
          var nowpage = 0;
          //给最大的盒子增加事件监听整个屏幕添加滑动事件;
          $(".container").swipe({
              swipe: function(event, direction, distance, duration, fingerCount) {
                  if (direction == "up") {
                      nowpage = nowpage + 1;
                  } else if (direction == "down") {
                      nowpage = nowpage - 1;
                  }

                  if (nowpage > 12) {
                      nowpage = 12;
                  }

                  if (nowpage < 0) {
                      nowpage = 0;
                  }

                  $(".container").animate({
                      "top": nowpage * -100 + "%"
                  }, 800);

                  $(".page").eq(nowpage).addClass("cur").siblings().removeClass("cur");
              }
          });
          var cw = document.documentElement.clientWidth;
          var ch = document.documentElement.clientHeight;
          console.log(cw);
          console.log(ch);
          //page3 page7部分
          function pageswipe(id) {
              var nowpic = 0;
              var imgh = $('.picture-container').css('height');
              var imgW = $('.pic-ain img').css({
                  width: parseInt(imgh) * 4 / 3
              })
              var pic_child = $(id).children().css({
                  width: cw,
                  height: parseInt(imgh)
              });
              $(id).css({
                  width: cw * 8
              });
              $(id).swipe({
                  swipe: function(event, direction, distance, duration, fingerCount) {
                      if (direction == "left") {
                          nowpic = nowpic + 1;
                      } else if (direction == "right") {
                          nowpic = nowpic - 1;
                      }

                      if (nowpic > 7) {
                          nowpic = 7;
                      }

                      if (nowpic < 0) {
                          nowpic = 0;
                      }
                      $(id).animate({
                          "left": nowpic * -cw + "px"
                      }, 400);
                      $(".item").eq(nowpic).addClass("show").siblings().removeClass("show");
                      $(".dot").eq(nowpic).addClass("current").siblings().removeClass("current");
                  }
              });
          }
          pageswipe('#pic-3');
          pageswipe('#pic-7');
          //page14 end
          var signimgW = $('#sign .sign-page img').width();
          console.log(signimgW);
          $('#sign .sign-page').css({
              'width': signimgW + 'px',
              'height': signimgW * 0.92 + 'px',
          })
          var $allW = $('#sign .sign-page').length * signimgW;
          console.log($allW);
          var nowpic = 0;
          $('#sign').css({ 'width': $allW + 'px', 'height': signimgW * 0.92 + 'px' });
          $('#sign').swipe({
              swipe: function(event, direction, distance, duration, fingerCount) {
                  console.log(11);
                  if (direction == "left") {
                      nowpic = nowpic + 1;
                      console.log(nowpic);
                  } else if (direction == "right") {
                      nowpic = nowpic - 1;
                      console.log(11)
                  }

                  if (nowpic > 6) {
                      nowpic = 6;
                  }

                  if (nowpic < 0) {
                      nowpic = 0;
                  }
                  $('#sign').animate({
                      "left": nowpic * -signimgW + "px"
                  }, 400);
                  $("#sign-head").children('.head-item').eq(nowpic)
                      .addClass("toshow").siblings().removeClass('toshow');
              }
          })
          $('#go-page1').on('click', function() {
              $('#con-h5').animate({ 'top': 0 });
          })

          //page5部分
          var pic5bgh = $('.shipwreck').css('height');
          console.log(pic5bgh);
          var pic5bgw = $('.imgbg img').css({
              width: parseInt(pic5bgh) * 4 / 3
          })
          var pic5child = $('#pic5').children().css({
              width: cw,
          });
          //small部分
          var pic5smallh = $('.shipcontainer').css('height');
          console.log(pic5smallh);
          var pic5smallw = $('.shipcontainer').css('width');
          console.log(pic5smallw);
          $('.smallimg img').css({
              width: parseInt(pic5smallw),
              height:parseInt(pic5smallh)
          })
          var pic5smallw = $('.smallimg img').css('width');
          $('#smallimg').children().css({
              width: pic5smallw,
              height: pic5smallh
          });
           console.log(pic5smallh);
           var $img = $('#smallimg > .pic5-box >.smallimg');

           $img.children().css({width: parseInt(pic5smallh)*10/9});
           console.log($img.children().width());
         $('#smallimg').css({
              width: parseInt(parseInt(pic5smallh) * 0.97) * 6,
              height: pic5smallh
          });


          var shipimg = 0;
          $('#smallimg').swipe({
              swipe: function(event, direction, distance, duration, fingerCount) {
                  if (direction == "left") {
                      shipimg = shipimg + 1;
                      console.log('left');
                  } else if (direction == "right") {
                      shipimg = shipimg - 1;
                  }

                  if (shipimg > 5) {
                      shipimg = 5;
                  }

                  if (shipimg < 0) {
                      shipimg = 0;
                  }
                $('#smallimg').animate({
                      'left': shipimg * -parseInt(pic5smallw) + 'px',
                  }, 400);
                  $("#pic5").children().eq(shipimg).addClass("toshow").siblings().removeClass("toshow");
                  $('.page5 .item').eq(shipimg).addClass("toshow").siblings().removeClass("toshow");
                  $(".page5 .dot").eq(shipimg).addClass("current").siblings().removeClass("current");
              }
          });
      }
  );
