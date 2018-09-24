  $(document).ready(function(){
  	M.AutoInit();
    $('.sidenav').sidenav();

    $("#search_for_taxi").on('click tap', function(){
    	var toastHTML = '<span>Tesla едет к Вам, ожидайте звонка</span><button class="btn-flat toast-action">Отменить</button>';
  		M.toast({html: toastHTML});
		setTimeout(
		  function() 
		  {
	  		$("#taxi_form").remove();
	  		$("main").append('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3a2c487e1d81ffaa3b1f6a900acc58d5d15488c723fed98a61e01ce82105bec3&amp;width=100%25&amp;height=452&amp;lang=ru_RU&amp;scroll=true"></script>');
    	}, 5000);
    });

    $("#report_carsharing").on('click tap', function(){
    	var toastHTML = '<span>Спасибо за Ваш интерес, мы с Вами свяжемся.</span>';
  		M.toast({html: toastHTML});
    });

    $("#question_answer").on('click tap', function(){
    	var toastHTML = '<span>Спасибо за Ваш вопрос, мы Вам скоро позвоним!</span>';
  		M.toast({html: toastHTML});
    });

    $("#save_profile").on('click tap', function(){
    	var toastHTML = '<span>Профиль обновлен.</span>';
  		M.toast({html: toastHTML});
    });

    $("#add_tesla").on('click tap', function(){
    	var toastHTML = '<span>Ваша Tesla добавлена, спасибо!</span>';
  		M.toast({html: toastHTML});
    });
  });