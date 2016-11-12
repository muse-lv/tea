(function(){   
        $(function(){
            var container = $('#silde-container');
            var list = $('#list');
            var buttons = $('#buttons span');
            var prev = $('#prev');
            var next = $('#next');
            var index = 1;
            var interval = 3000;
            var timer;
            var widthScreen = parseInt(container.outerWidth());
            var img = container.find("img");
            var len = img.length;
            var imgHeight = container.find("img").outerHeight();
            img.one("load",function(){
                imgHeight = container.find("img").outerHeight();
                container.css("height",imgHeight+'px'); 
            }).each(function() {
              if(this.complete){
                imgHeight = container.find("img").outerHeight();
                container.css("height",imgHeight+'px');
              };
            });            
        
            $(window).resize(function() {    
                imgHeight = container.find("img").outerHeight();  
                widthScreen = parseInt(container.outerWidth());        
                container.css("height",imgHeight+'px'); 
                stop();
                play();
            });


            // 增加备份
            function addimg(){
                var imgAfter = img.eq(0).clone();
                var imgBefore = img.last().clone();
                list.prepend(imgBefore);
                list.append(imgAfter);
            }
            addimg();

            function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                list.animate({'left': offset}, 300, function () {
                    if(left > -200){
                        list.css('left', -widthScreen * len);
                    }
                    if(left < (-widthScreen * len)) {
                        list.css('left', -widthScreen);
                    }
                });
            }

            function showButton() {
                buttons.eq(index-1).addClass('on').siblings().removeClass('on');
                buttons.find("p").hide();
                buttons.eq(index-1).find("p").show();
            }

            function play() {
                timer = setTimeout(function () {
                    next.trigger('click');
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == len) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-widthScreen);
                showButton();
            });

            prev.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 1) {
                    index = len;
                }
                else {
                    index -= 1;
                }
                animate(widthScreen);
                showButton();
            });

            buttons.each(function () {
                 $(this).bind('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('index'));
                     var offset = -widthScreen * (myIndex - index);

                     animate(offset);
                     index = myIndex;
                     showButton();
                 })
            });

            container.hover(stop, play);
            play();
        });
})();

