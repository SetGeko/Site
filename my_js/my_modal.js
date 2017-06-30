$('.menu li a').click(function() {
            $('.menu li').removeClass('selected');
            $(this).parent('li').addClass('selected');
            imgWidth = '250px';
            thisItem = $(this).attr('rel');
            event.preventDefault();

            if (thisItem != "all") {

                $('.item li[rel=' + thisItem + ']').stop()
                    .animate({
                        'width': imgWidth,
                        'opacity': 1,
                    });

                $('.item li[rel!=' + thisItem + ']').stop()
                    .animate({
                        'width': 0,
                        'opacity': 0,
                    });
            } else {

                $('.item li').stop()
                    .animate({
                        'opacity': 1,
                        'width': imgWidth,
                    });
            }
        })
        $('.item li').hover(function() {
            $(this).children(".item-text").css({
                'opacity': 1
            });
            $(this).children("img").css({
                'opacity': 0.1
            });
        }, function() {
            $(this).children(".item-text").css({
                'opacity': 0
            });
            $(this).children("img").css({
                'opacity': 1
            });
        });


        $(".image").click(function() { // Событие клика на маленькое изображение
            var img = $(this); // Получаем изображение, на которое кликнули
            var src = img.attr('src'); // Достаем из этого изображения путь до картинки
            $("#work").append("<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна

                "<div class='popup_bg'><span class=' fa fa-ban'></span></div>" + // Блок, который будет служить фоном затемненным
                "<img src='" + src + "' class='popup_img' />" + // Само увеличенное фото
                "</div>");
            $(".popup").fadeIn(800); // Медленно выводим изображение
            $(".popup_bg").click(function() { // Событие клика на затемненный фон	   
                $(".popup").fadeOut(800); // Медленно убираем всплывающее окно
                setTimeout(function() { // Выставляем таймер
                    $(".popup").remove(); // Удаляем разметку всплывающего окна
                }, 800);
            });
        });