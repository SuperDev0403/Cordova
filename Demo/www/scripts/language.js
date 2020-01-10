function changeLang(lang_string) {
    
	if(localStorage.getItem("language")=='en'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Language</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Contact</a></li>\
        <li><div class="menu_line"></div></li>\
		<li><a href="program.html"><img src="images/icon_questions.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Questions</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.ConferenceTrainingApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Rate application</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Exit</a></li>');

			
			$('.t1').html('Change the language:');
			
			$('#ml1').html('About Us');
		    $('#mls1').html('All the information');		
			$('#ml2').html('News');
		    $('#mls2').html('Current information');			
			$('#ml3').html('Program');
		    $('#mls3').html('Schedule of events');
		    $('#ml4').html('Council');
		    $('#mls4').html('Programme - Scientific');
		    $('#ml5').html('Speakers');
		    $('#mls5').html('Our leading');
		    $('#ml6').html('Partners');
		    $('#mls6').html('We cooperate with ...');
		    $('#ml7').html('Photorelation');
		    $('#mls7').html('Interesting moments');
			$('#ml8').html('Materials');
		    $('#mls8').html('Download documents');
		    $('#ml9').html('Facebook');
		    $('#mls9').html('Mobile App');
		
			$('#tops1').html('About application');
			$('#tops2').html('Language');
			$('#tops3').html('Search');
			$('#tops4').html('News');
			$('#tops5').html('About Us');
			$('#tops6').html('Program');
			$('#tops7').html('Scientific Council');
			$('#tops8').html('Speakers');
			$('#tops9').html('Partners');
			$('#tops10').html('Photorelation');
			$('#tops11').html('Materials');
		
			$('.ce').html('Error: Connection problem...');
			$('.ce_2_search').html('Error: Connection problem...');
			$('.ce_search').html('Error: Enter search term...');
		
		    $('.download_full_info').replaceWith('<div class="download_full_info">Download or view:</div>');
			$('.gallery_mna').replaceWith('<span class="gallery_mna">Number of photos</span>');
		    $('.partners_full_info').replaceWith('<div class="partners_full_info">Additional information:</div>');
		    
			$('.program_full_date').replaceWith('<div class="program_full_date">date:</div>');
			$('.program_full_hours').replaceWith('<div class="program_full_hours">hour:</div>');
			$('.program_full_time').replaceWith('<div class="program_full_time">duration:</div>');
			$('.program_full_info_1').replaceWith('<div class="program_full_info_1">Speaker:</div>');
			$('.program_full_info_2').replaceWith('<div class="program_full_info_2">Your opinion:</div>');
			$('.program_full_info_3').replaceWith('<div class="program_full_info_3">Ask a question:</div>');
			$('.comment_txt_1').replaceWith('<div class="comment_txt_1">optional comment</div>');
			$('.comment_txt_2').replaceWith('<div class="comment_txt_2">question</div>');
			$('.ce_nd').replaceWith('<div class="ce_nd">No data</div>');
			$('.program_menu_sd_txt').replaceWith('<span class="program_menu_sd_txt">Select the day:</span>');
			$('.min').replaceWith('<span class="min">min.</span>');
			$('#comment').replaceWith('<input type="submit" value="Send" id="comment">');
			$('#question').replaceWith('<input type="submit" value="Send" id="question">');
			$('.search_top_txt_1').replaceWith('<div class="search_top_txt_1">News</div>');
			$('.search_top_txt_2').replaceWith('<div class="search_top_txt_2">Program</div>');
			$('.search_top_txt_3').replaceWith('<div class="search_top_txt_3">Scientific Council</div>');
			$('.search_top_txt_4').replaceWith('<div class="search_top_txt_4">Speakers</div>');
			$('.search_top_txt_5').replaceWith('<div class="search_top_txt_5">Partners</div>');
			$('.search_top_txt_6').replaceWith('<div class="search_top_txt_6">Photorelation</div>');
			$('.search_top_txt_7').replaceWith('<div class="search_top_txt_7">Materials</div>');
			$('.search_nr').replaceWith('<div class="search_nr">No data</div>');
			
			window.vtxt1 = 'Thank you for your feedback';
			window.vtxt2 = 'Informtion';
			window.vtxt3 = 'OK';
			window.vtxt4 = 'Select a rating from 1 to 5 stars';
			window.vtxt5 = 'Informtion';
			window.vtxt6 = 'OK';
			window.vtxt7 = 'Your entry has been updated';
			window.vtxt8 = 'Informtion';
			window.vtxt9 = 'OK';
			window.vtxt10 = 'There was a problem with the connection';
			window.vtxt11 = 'Informtion';
			window.vtxt12 = 'OK';
			window.vtxt13 = 'Fill required field';
			window.vtxt14 = 'Informtion';
			window.vtxt15 = 'OK';
			window.vtxt16 = 'Thank you for your question';
			window.vtxt17 = 'Informtion';
			window.vtxt18 = 'OK';
	
	}
	
	if(localStorage.getItem("language")=='pl'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Język</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Kontakt</a></li>\
        <li><div class="menu_line"></div></li>\
		<li><a href="program.html"><img src="images/icon_questions.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Pytania</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.ConferenceTrainingApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Oceń aplikację</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Wyjście</a></li>');

			
			$('.t1').html('Zmień język aplikacji:');
			
			$('#ml1').html('O Nas');
		    $('#mls1').html('Wszystkie informacje');
			$('#ml2').html('Aktualności');
		    $('#mls2').html('Bieżące informacje');
			$('#ml3').html('Program');
		    $('#mls3').html('Harmonogram wydarzeń');
		    $('#ml4').html('Rada');
		    $('#mls4').html('Programowo - Naukowa');
		    $('#ml5').html('Prelegenci');
		    $('#mls5').html('Nasi prowadzący');
		    $('#ml6').html('Partnerzy');
		    $('#mls6').html('Współpracujemy z ...');
		    $('#ml7').html('Fotorelacja');
		    $('#mls7').html('Najciekawsze momenty');
			$('#ml8').html('Materiały');
		    $('#mls8').html('Pobierz dokumenty');
		    $('#ml9').html('Facebook');
		    $('#mls9').html('Aplikacja mobilna');
		
			$('#tops1').html('O aplikacji');
			$('#tops2').html('Język');
			$('#tops3').html('Szukaj');
			$('#tops4').html('Aktualności');
			$('#tops5').html('O Nas');
			$('#tops6').html('Program');
			$('#tops7').html('Rada Programowo - Naukowa');
			$('#tops8').html('Prelegenci');
			$('#tops9').html('Partnerzy');
			$('#tops10').html('Fotorelacja');
			$('#tops11').html('Materiały');
		
			$('.ce').html('Błąd: Problem z połączeniem...');
			$('.ce_2_search').html('Błąd: Problem z połączeniem....');
			$('.ce_search').html('Błąd: Uzupełnij pole...');
		
		    $('.download_full_info').replaceWith('<div class="download_full_info">Pobierz lub zobacz:</div>');
			$('.gallery_mna').replaceWith('<span class="gallery_mna">Ilość zdjęć</span>');
		    $('.partners_full_info').replaceWith('<div class="partners_full_info">Informacje dodatkowe:</div>');
		
			$('.program_full_date').replaceWith('<div class="program_full_date">data:</div>');
			$('.program_full_hours').replaceWith('<div class="program_full_hours">godzina:</div>');
			$('.program_full_time').replaceWith('<div class="program_full_time">czas trwania:</div>');
			$('.program_full_info_1').replaceWith('<div class="program_full_info_1">Prelegent:</div>');
			$('.program_full_info_2').replaceWith('<div class="program_full_info_2">Twoja opinia:</div>');
			$('.program_full_info_3').replaceWith('<div class="program_full_info_3">Zadaj pytanie:</div>');
			$('.comment_txt_1').replaceWith('<div class="comment_txt_1">komentarz opcjonalnie</div>');
			$('.comment_txt_2').replaceWith('<div class="comment_txt_2">pytanie</div>');
			$('.ce_nd').replaceWith('<div class="ce_nd">Brak danych</div>');
			$('.program_menu_sd_txt').replaceWith('<span class="program_menu_sd_txt">Wybierz dzień:</span>');
			$('.min').replaceWith('<span class="min">min.</span>');
			$('#comment').replaceWith('<input type="submit" value="Wyślij" id="comment">');
		    $('#question').replaceWith('<input type="submit" value="Wyślij" id="question">');
			$('.search_top_txt_1').replaceWith('<div class="search_top_txt_1">Aktualności</div>');
			$('.search_top_txt_2').replaceWith('<div class="search_top_txt_2">Program</div>');
			$('.search_top_txt_3').replaceWith('<div class="search_top_txt_3">Rada Naukowa</div>');
			$('.search_top_txt_4').replaceWith('<div class="search_top_txt_4">Prelegenci</div>');
			$('.search_top_txt_5').replaceWith('<div class="search_top_txt_5">Partnerzy</div>');
			$('.search_top_txt_6').replaceWith('<div class="search_top_txt_6">Fotorelacja</div>');
			$('.search_top_txt_7').replaceWith('<div class="search_top_txt_7">Materiały</div>');
			$('.search_nr').replaceWith('<div class="search_nr">Brak danych</div>');
		
			window.vtxt1 = 'Dziękujemy za Twoją opinię';
			window.vtxt2 = 'Informacja';
			window.vtxt3 = 'OK';
			window.vtxt4 = 'Wybierz ocenę od 1 do 5 z gwiazdek';
			window.vtxt5 = 'Informacja';
			window.vtxt6 = 'OK';
			window.vtxt7 = 'Twój wpis został zaktualizowany';
			window.vtxt8 = 'Informacja';
			window.vtxt9 = 'OK';
			window.vtxt10 = 'Wystąpił problem z połączeniem';
			window.vtxt11 = 'Informacja';
			window.vtxt12 = 'OK';
			window.vtxt13 = 'Wypełnij wymagane pole';
			window.vtxt14 = 'Informacja';
			window.vtxt15 = 'OK';
			window.vtxt16 = 'Thank you for your question';
			window.vtxt17 = 'Informacja';
			window.vtxt18 = 'OK';
		
	}
	
	if(localStorage.getItem("language")=='it'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Lingua</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Contatto</a></li>\
        <li><div class="menu_line"></div></li>\
		<li><a href="program.html"><img src="images/icon_questions.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Domande</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.ConferenceTrainingApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Applicazione tasso</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Uscita</a></li>');

			
			$('.t1').html('Cambia lingua app:');
			
			$('#ml1').html('Informazioni sul Forum');
		    $('#mls1').html('Tutte le informazioni');
			$('#ml2').html('Notizie');
		    $('#mls2').html('Informazioni correnti');
			$('#ml3').html('Programma');
		    $('#mls3').html('Pianificazione degli eventi');
		    $('#ml4').html('Consiglio');
		    $('#mls4').html('Programmatico - scientifico');
		    $('#ml5').html('Altoparlanti');
		    $('#mls5').html('Il nostro leader');
		    $('#ml6').html('Partner');
		    $('#mls6').html('Lavoriamo con ...');
		    $('#ml7').html('Photorelation');
		    $('#mls7').html('I momenti più interessanti');
			$('#ml8').html('Materiale');
		    $('#mls8').html('Scarica i documenti');
		    $('#ml9').html('Facebook');
		    $('#mls9').html('Applicazione mobile');
		
			$('#tops1').html('Informazioni sull\'applicazione');
			$('#tops2').html('Lingua');
			$('#tops3').html('Ricerca');
			$('#tops4').html('Notizie');
			$('#tops5').html('Informazioni sul Forum');
			$('#tops6').html('Programma');
			$('#tops7').html('Programma - Consiglio Scientifico');
			$('#tops8').html('Altoparlanti');
			$('#tops9').html('Partner');
			$('#tops10').html('Photorelation');
			$('#tops11').html('Materiale');
		
			$('.ce').html('Errore: Problema di connessione...');
			$('.ce_2_search').html('Errore: Problema di connessione....');
			$('.ce_search').html('Errore: Completare il campo...');
		
		    $('.download_full_info').replaceWith('<div class="download_full_info">Scarica o visualizza:</div>');
			$('.gallery_mna').replaceWith('<span class="gallery_mna">Numero di foto</span>');
		    $('.partners_full_info').replaceWith('<div class="partners_full_info">Ulteriori informazioni:</div>');
		
			$('.program_full_date').replaceWith('<div class="program_full_date">data:</div>');
			$('.program_full_hours').replaceWith('<div class="program_full_hours">ora:</div>');
			$('.program_full_time').replaceWith('<div class="program_full_time">durata:</div>');
			$('.program_full_info_1').replaceWith('<div class="program_full_info_1">Altoparlante:</div>');
			$('.program_full_info_2').replaceWith('<div class="program_full_info_2">La tua opinione:</div>');
			$('.program_full_info_3').replaceWith('<div class="program_full_info_3">Fai una domanda:</div>');
			$('.comment_txt_1').replaceWith('<div class="comment_txt_1">commento opzionale</div>');
			$('.comment_txt_2').replaceWith('<div class="comment_txt_2">domanda</div>');
			$('.ce_nd').replaceWith('<div class="ce_nd">Nessun dato</div>');
			$('.program_menu_sd_txt').replaceWith('<span class="program_menu_sd_txt">Scegli una giornata:</span>');
			$('.min').replaceWith('<span class="min">ver.</span>');
			$('#comment').replaceWith('<input type="submit" value="Inviare" id="comment">');
		    $('#question').replaceWith('<input type="submit" value="Inviare" id="question">');
			$('.search_top_txt_1').replaceWith('<div class="search_top_txt_1">Notizie</div>');
			$('.search_top_txt_2').replaceWith('<div class="search_top_txt_2">Programma</div>');
			$('.search_top_txt_3').replaceWith('<div class="search_top_txt_3">Consiglio Scientifico</div>');
			$('.search_top_txt_4').replaceWith('<div class="search_top_txt_4">Altoparlanti</div>');
			$('.search_top_txt_5').replaceWith('<div class="search_top_txt_5">Partner</div>');
			$('.search_top_txt_6').replaceWith('<div class="search_top_txt_6">Photorelation</div>');
			$('.search_top_txt_7').replaceWith('<div class="search_top_txt_7">Materiale</div>');
			$('.search_nr').replaceWith('<div class="search_nr">Nessun dato</div>');
		
			window.vtxt1 = 'Grazie per il tuo feedback';
			window.vtxt2 = 'Informazioni';
			window.vtxt3 = 'OK';
			window.vtxt4 = 'Scegli tra 1 e 5 stelle';
			window.vtxt5 = 'Informazioni';
			window.vtxt6 = 'OK';
			window.vtxt7 = 'Il tuo post è stato aggiornato';
			window.vtxt8 = 'Informazioni';
			window.vtxt9 = 'OK';
			window.vtxt10 = 'C\'era un problema di connessione';
			window.vtxt11 = 'Informazioni';
			window.vtxt12 = 'OK';
			window.vtxt13 = 'Compilare il campo richiesto';
			window.vtxt14 = 'Informazioni';
			window.vtxt15 = 'OK';
			window.vtxt16 = 'Grazie per la tua domanda';
			window.vtxt17 = 'Informazioni';
			window.vtxt18 = 'OK';
	}
	
	if(localStorage.getItem("language")=='es'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Idioma</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Contacto</a></li>\
        <li><div class="menu_line"></div></li>\
		<li><a href="program.html"><img src="images/icon_questions.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Preguntas</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.ConferenceTrainingApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Calificar la aplicación</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Salida</a></li>');

			
			$('.t1').html('Cambiar el idioma de la aplicación:');
			
			$('#ml1').html('Acerca de nosotros');
		    $('#mls1').html('Toda la información');
			$('#ml2').html('Noticias');
		    $('#mls2').html('Información actual');
			$('#ml3').html('Programa');
		    $('#mls3').html('Calendario de eventos');
		    $('#ml4').html('Consejo');
		    $('#mls4').html('Programático - Científico');
		    $('#ml5').html('Altavoces');
		    $('#mls5').html('Nuestro líder');
		    $('#ml6').html('Socios');
		    $('#mls6').html('Trabajamos con ...');
		    $('#ml7').html('Photorelation');
		    $('#mls7').html('Los momentos más interesantes');
			$('#ml8').html('Materiales');
		    $('#mls8').html('Descargue los documentos');
		    $('#ml9').html('Facebook');
		    $('#mls9').html('Aplicación móvil');
		
			$('#tops1').html('Acerca de la aplicación');
			$('#tops2').html('Idioma');
			$('#tops3').html('Búsqueda');
			$('#tops4').html('Noticias');
			$('#tops5').html('Acerca de nosotros');
			$('#tops6').html('Programa');
			$('#tops7').html('Programa - Consejo Científico');
			$('#tops8').html('Altavoces');
			$('#tops9').html('Socios');
			$('#tops10').html('Photorelation');
			$('#tops11').html('Materiales');
		
			$('.ce').html('Error: Problema de conexión...');
			$('.ce_2_search').html('Error: Problema de conexión....');
			$('.ce_search').html('Error: Completa el campo...');
		
		    $('.download_full_info').replaceWith('<div class="download_full_info">Descargar o ver:</div>');
			$('.gallery_mna').replaceWith('<span class="gallery_mna">Número de fotos</span>');
		    $('.partners_full_info').replaceWith('<div class="partners_full_info">Información adicional:</div>');
		
			$('.program_full_date').replaceWith('<div class="program_full_date">fecha:</div>');
			$('.program_full_hours').replaceWith('<div class="program_full_hours">hora:</div>');
			$('.program_full_time').replaceWith('<div class="program_full_time">duración:</div>');
			$('.program_full_info_1').replaceWith('<div class="program_full_info_1">Altavoz:</div>');
			$('.program_full_info_2').replaceWith('<div class="program_full_info_2">Tu opinión:</div>');
			$('.program_full_info_3').replaceWith('<div class="program_full_info_3">Haga una pregunta:</div>');
			$('.comment_txt_1').replaceWith('<div class="comment_txt_1">comentario opcional</div>');
			$('.comment_txt_2').replaceWith('<div class="comment_txt_2">pregunta</div>');
			$('.ce_nd').replaceWith('<div class="ce_nd">Sin datos</div>');
			$('.program_menu_sd_txt').replaceWith('<span class="program_menu_sd_txt">Elige un día:</span>');
			$('.min').replaceWith('<span class="min">acta</span>');
			$('#comment').replaceWith('<input type="submit" value="Enviar" id="comment">');
		    $('#question').replaceWith('<input type="submit" value="Enviar" id="question">');
			$('.search_top_txt_1').replaceWith('<div class="search_top_txt_1">Noticias</div>');
			$('.search_top_txt_2').replaceWith('<div class="search_top_txt_2">Programa</div>');
			$('.search_top_txt_3').replaceWith('<div class="search_top_txt_3">Consejo Científico</div>');
			$('.search_top_txt_4').replaceWith('<div class="search_top_txt_4">Altavoces</div>');
			$('.search_top_txt_5').replaceWith('<div class="search_top_txt_5">Socios</div>');
			$('.search_top_txt_6').replaceWith('<div class="search_top_txt_6">Photorelation</div>');
			$('.search_top_txt_7').replaceWith('<div class="search_top_txt_7">Materiales</div>');
			$('.search_nr').replaceWith('<div class="search_nr">Sin datos</div>');
		
			window.vtxt1 = 'Gracias por sus comentarios';
			window.vtxt2 = 'Información';
			window.vtxt3 = 'OK';
			window.vtxt4 = 'Elige de 1 a 5 estrellas';
			window.vtxt5 = 'Información';
			window.vtxt6 = 'OK';
			window.vtxt7 = 'Se ha actualizado tu publicación';
			window.vtxt8 = 'Información';
			window.vtxt9 = 'OK';
			window.vtxt10 = 'Hubo un problema de conexión';
			window.vtxt11 = 'Información';
			window.vtxt12 = 'OK';
			window.vtxt13 = 'Rellene el campo requerido';
			window.vtxt14 = 'Información';
			window.vtxt15 = 'OK';
			window.vtxt16 = 'Gracias por tu pregunta';
			window.vtxt17 = 'Información';
			window.vtxt18 = 'OK';
	}
	
	if(localStorage.getItem("language")=='de'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Sprache</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Kontakt</a></li>\
        <li><div class="menu_line"></div></li>\
		<li><a href="program.html"><img src="images/icon_questions.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Fragen</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.ConferenceTrainingApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Bewerte die App</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Ausfahrt</a></li>');

			
			$('.t1').html('App-Sprache ändern:');
			
			$('#ml1').html('Über uns');
		    $('#mls1').html('Alle Informationen');
			$('#ml2').html('Nachrichten');
		    $('#mls2').html('Aktuelle Informationen');
			$('#ml3').html('Programm');
		    $('#mls3').html('Zeitplan der Ereignisse');
		    $('#ml4').html('Rat');
		    $('#mls4').html('Programmatisch - wissenschaftlich');
		    $('#ml5').html('Lautsprecher');
		    $('#mls5').html('Unser Führer');
		    $('#ml6').html('Partner');
		    $('#mls6').html('Wir arbeiten mit ...');
		    $('#ml7').html('Photorelation');
		    $('#mls7').html('Die interessantesten Momente');
			$('#ml8').html('Materialien');
		    $('#mls8').html('Laden Sie die Dokumente herunter');
		    $('#ml9').html('Facebook');
		    $('#mls9').html('Mobile Anwendung');
		
			$('#tops1').html('Über die Bewerbung');
			$('#tops2').html('Sprache');
			$('#tops3').html('Suche');
			$('#tops4').html('Nachrichten');
			$('#tops5').html('Über uns');
			$('#tops6').html('Programm');
			$('#tops7').html('Programm - Wissenschaftlicher Rat');
			$('#tops8').html('Lautsprecher');
			$('#tops9').html('Partner');
			$('#tops10').html('Photorelation');
			$('#tops11').html('Materialien');
		
			$('.ce').html('Fehler: Verbindungsproblem...');
			$('.ce_2_search').html('Fehler: Verbindungsproblem....');
			$('.ce_search').html('Fehler: Vervollständige das feld...');
		
		    $('.download_full_info').replaceWith('<div class="download_full_info">Herunterladen oder ansehen:</div>');
			$('.gallery_mna').replaceWith('<span class="gallery_mna">Anzahl der Fotos</span>');
		    $('.partners_full_info').replaceWith('<div class="partners_full_info">Zusätzliche Informationen:</div>');
		
			$('.program_full_date').replaceWith('<div class="program_full_date">datum:</div>');
			$('.program_full_hours').replaceWith('<div class="program_full_hours">stunde:</div>');
			$('.program_full_time').replaceWith('<div class="program_full_time">dauer:</div>');
			$('.program_full_info_1').replaceWith('<div class="program_full_info_1">Lautsprecher:</div>');
			$('.program_full_info_2').replaceWith('<div class="program_full_info_2">Ihre Meinung:</div>');
			$('.program_full_info_3').replaceWith('<div class="program_full_info_3">Stellen sie eine frage:</div>');
			$('.comment_txt_1').replaceWith('<div class="comment_txt_1">optionaler kommentar</div>');
			$('.comment_txt_2').replaceWith('<div class="comment_txt_2">frage</div>');
			$('.ce_nd').replaceWith('<div class="ce_nd">Keine daten</div>');
			$('.program_menu_sd_txt').replaceWith('<span class="program_menu_sd_txt">Wähle einen tag:</span>');
			$('.min').replaceWith('<span class="min">min.</span>');
			$('#comment').replaceWith('<input type="submit" value="Senden" id="comment">');
		    $('#question').replaceWith('<input type="submit" value="Senden" id="question">');
			$('.search_top_txt_1').replaceWith('<div class="search_top_txt_1">Nachrichten</div>');
			$('.search_top_txt_2').replaceWith('<div class="search_top_txt_2">Programm</div>');
			$('.search_top_txt_3').replaceWith('<div class="search_top_txt_3">Wissenschaftlicher Rat</div>');
			$('.search_top_txt_4').replaceWith('<div class="search_top_txt_4">Lautsprecher</div>');
			$('.search_top_txt_5').replaceWith('<div class="search_top_txt_5">Partner</div>');
			$('.search_top_txt_6').replaceWith('<div class="search_top_txt_6">Photorelation</div>');
			$('.search_top_txt_7').replaceWith('<div class="search_top_txt_7">Materialien</div>');
			$('.search_nr').replaceWith('<div class="search_nr">Keine daten</div>');
		
			window.vtxt1 = 'Vielen dank für ihr feedback';
			window.vtxt2 = 'Information';
			window.vtxt3 = 'OK';
			window.vtxt4 = 'Wähle 1 bis 5 sterne';
			window.vtxt5 = 'Information';
			window.vtxt6 = 'OK';
			window.vtxt7 = 'Dein beitrag wurde aktualisiert';
			window.vtxt8 = 'Information';
			window.vtxt9 = 'OK';
			window.vtxt10 = 'Es gab ein verbindungsproblem';
			window.vtxt11 = 'Information';
			window.vtxt12 = 'OK';
			window.vtxt13 = 'Füllen sie das erforderliche feld aus';
			window.vtxt14 = 'Information';
			window.vtxt15 = 'OK';
			window.vtxt16 = 'Vielen dank für ihre frage';
			window.vtxt17 = 'Information';
			window.vtxt18 = 'OK';
	}
	
	if(localStorage.getItem("language")=='fr'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>La langue</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Contact</a></li>\
        <li><div class="menu_line"></div></li>\
		<li><a href="program.html"><img src="images/icon_questions.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Des questions</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.ConferenceTrainingApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Application de taux</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Sortie</a></li>');

			
			$('.t1').html('Changer le langage de l\'application:');
			
			$('#ml1').html('À propos de nous');
		    $('#mls1').html('Toutes les informations');
			$('#ml2').html('Nouvelles');
		    $('#mls2').html('Informations actuelles');
			$('#ml3').html('Programme');
		    $('#mls3').html('Calendrier des événements');
		    $('#ml4').html('Conseil');
		    $('#mls4').html('Programmatique - scientifique');
		    $('#ml5').html('Haut-parleurs');
		    $('#mls5').html('Notre chef');
		    $('#ml6').html('Partenaires');
		    $('#mls6').html('Nous travaillons avec ...');
		    $('#ml7').html('Photorelation');
		    $('#mls7').html('Les moments les plus intéressants');
			$('#ml8').html('Matériels');
		    $('#mls8').html('Télécharger les documents');
		    $('#ml9').html('Facebook');
		    $('#mls9').html('Application mobile');
		
			$('#tops1').html('À propos de l\'application');
			$('#tops2').html('Langue');
			$('#tops3').html('Recherche');
			$('#tops4').html('Nouvelles');
			$('#tops5').html('À propos de nous');
			$('#tops6').html('Programme');
			$('#tops7').html('Programme - Conseil Scientifique');
			$('#tops8').html('Haut-parleurs');
			$('#tops9').html('Partenaires');
			$('#tops10').html('Photorelation');
			$('#tops11').html('Matériels');
		
			$('.ce').html('Erreur: Problème de connexion...');
			$('.ce_2_search').html('Erreur: Problème de connexion....');
			$('.ce_search').html('Erreur: Complétez le champ...');
		
		    $('.download_full_info').replaceWith('<div class="download_full_info">Télécharger ou afficher:</div>');
			$('.gallery_mna').replaceWith('<span class="gallery_mna">Nombre de photos</span>');
		    $('.partners_full_info').replaceWith('<div class="partners_full_info">Informations complémentaires:</div>');
		
			$('.program_full_date').replaceWith('<div class="program_full_date">date:</div>');
			$('.program_full_hours').replaceWith('<div class="program_full_hours">heure:</div>');
			$('.program_full_time').replaceWith('<div class="program_full_time">la durée:</div>');
			$('.program_full_info_1').replaceWith('<div class="program_full_info_1">Haut-parleur:</div>');
			$('.program_full_info_2').replaceWith('<div class="program_full_info_2">Votre opinion:</div>');
			$('.program_full_info_3').replaceWith('<div class="program_full_info_3">Poser une question:</div>');
			$('.comment_txt_1').replaceWith('<div class="comment_txt_1">commentaire facultatif</div>');
			$('.comment_txt_2').replaceWith('<div class="comment_txt_2">question</div>');
			$('.ce_nd').replaceWith('<div class="ce_nd">Aucune donnée</div>');
			$('.program_menu_sd_txt').replaceWith('<span class="program_menu_sd_txt">Choisissez un jour:</span>');
			$('.min').replaceWith('<span class="min">procès-verbal</span>');
			$('#comment').replaceWith('<input type="submit" value="Envoyer" id="comment">');
		    $('#question').replaceWith('<input type="submit" value="Envoyer" id="question">');
			$('.search_top_txt_1').replaceWith('<div class="search_top_txt_1">Nouvelles</div>');
			$('.search_top_txt_2').replaceWith('<div class="search_top_txt_2">Programme</div>');
			$('.search_top_txt_3').replaceWith('<div class="search_top_txt_3">Conseil scientifique</div>');
			$('.search_top_txt_4').replaceWith('<div class="search_top_txt_4">Haut-parleurs</div>');
			$('.search_top_txt_5').replaceWith('<div class="search_top_txt_5">Partenaires</div>');
			$('.search_top_txt_6').replaceWith('<div class="search_top_txt_6">Photorelatio</div>');
			$('.search_top_txt_7').replaceWith('<div class="search_top_txt_7">Matériels</div>');
			$('.search_nr').replaceWith('<div class="search_nr">Aucune donnée</div>');
		
			window.vtxt1 = 'Merci pour vos commentaires';
			window.vtxt2 = 'Informations';
			window.vtxt3 = 'OK';
			window.vtxt4 = 'Choisissez de 1 à 5 étoiles';
			window.vtxt5 = 'Informations';
			window.vtxt6 = 'OK';
			window.vtxt7 = 'Votre publication a été mise à jour';
			window.vtxt8 = 'Informations';
			window.vtxt9 = 'OK';
			window.vtxt10 = 'Wystąpił problem z połączeniem';
			window.vtxt11 = 'Informations';
			window.vtxt12 = 'OK';
			window.vtxt13 = 'Remplissez le champ requis';
			window.vtxt14 = 'Informations';
			window.vtxt15 = 'OK';
			window.vtxt16 = 'Merci pour votre question';
			window.vtxt17 = 'Informations';
			window.vtxt18 = 'OK';
	}
	
	if(localStorage.getItem("language")=='gr'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Γλώσσα</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>επαφή</a></li>\
        <li><div class="menu_line"></div></li>\
		<li><a href="program.html"><img src="images/icon_questions.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>ερωτήσεις</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.ConferenceTrainingApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>εφαρμογή Βαθμολογήστε</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Εξοδος</a></li>');

			
			$('.t1').html('Αλλαγή γλώσσας εφαρμογής:');
			
			$('#ml1').html('Σχετικά με εμάς');
		    $('#mls1').html('Όλες οι πληροφορίες');
			$('#ml2').html('ειδήσεις');
		    $('#mls2').html('Τρέχουσες πληροφορίες');
			$('#ml3').html('πρόγραμμα');
		    $('#mls3').html('Πρόγραμμα γεγονότων');
		    $('#ml4').html('συμβούλιο');
		    $('#mls4').html('Προγραμματική - Επιστημονική');
		    $('#ml5').html('ηχεία');
		    $('#mls5').html('Ο ηγέτης μας');
		    $('#ml6').html('εταίρων');
		    $('#mls6').html('Συνεργαζόμαστε με ...');
		    $('#ml7').html('φωτογραφίες');
		    $('#mls7').html('Οι πιο ενδιαφέρουσες στιγμές');
			$('#ml8').html('υλικά');
		    $('#mls8').html('Κατεβάστε τα έγγραφα');
		    $('#ml9').html('Facebook');
		    $('#mls9').html('Κινητή εφαρμογή');
		
			$('#tops1').html('Σχετικά με την εφαρμογή');
			$('#tops2').html('Γλώσσα');
			$('#tops3').html('έρευνα');
			$('#tops4').html('ειδήσεις');
			$('#tops5').html('O Nas');
			$('#tops6').html('πρόγραμμα');
			$('#tops7').html('Πρόγραμμα - Επιστημονικό Συμβούλιο');
			$('#tops8').html('ηχεία');
			$('#tops9').html('εταίρων');
			$('#tops10').html('φωτογραφίες');
			$('#tops11').html('υλικά');
		
			$('.ce').html('σφάλμα: Πρόβλημα σύνδεσης...');
			$('.ce_2_search').html('σφάλμα: Πρόβλημα σύνδεσης....');
			$('.ce_search').html('σφάλμα: Συμπληρώστε το πεδίο...');
		
		    $('.download_full_info').replaceWith('<div class="download_full_info">Λήψη ή προβολή:</div>');
			$('.gallery_mna').replaceWith('<span class="gallery_mna">Αριθμός φωτογραφιών</span>');
		    $('.partners_full_info').replaceWith('<div class="partners_full_info">Πρόσθετες πληροφορίες:</div>');
		
			$('.program_full_date').replaceWith('<div class="program_full_date">ημερομηνία:</div>');
			$('.program_full_hours').replaceWith('<div class="program_full_hours">ώρα:</div>');
			$('.program_full_time').replaceWith('<div class="program_full_time">διάρκεια:</div>');
			$('.program_full_info_1').replaceWith('<div class="program_full_info_1">ομιλητής:</div>');
			$('.program_full_info_2').replaceWith('<div class="program_full_info_2">Η άποψή σας:</div>');
			$('.program_full_info_3').replaceWith('<div class="program_full_info_3">Κάντε μια ερώτηση:</div>');
			$('.comment_txt_1').replaceWith('<div class="comment_txt_1">προαιρετικό σχόλιο</div>');
			$('.comment_txt_2').replaceWith('<div class="comment_txt_2">ερώτηση</div>');
			$('.ce_nd').replaceWith('<div class="ce_nd">Δεν υπάρχουν δεδομένα</div>');
			$('.program_menu_sd_txt').replaceWith('<span class="program_menu_sd_txt">Επιλέξτε μια ημέρα:</span>');
			$('.min').replaceWith('<span class="min">πρακτικά</span>');
			$('#comment').replaceWith('<input type="submit" value="Αποστολή" id="comment">');
		    $('#question').replaceWith('<input type="submit" value="Αποστολή" id="question">');
			$('.search_top_txt_1').replaceWith('<div class="search_top_txt_1">ειδήσεις</div>');
			$('.search_top_txt_2').replaceWith('<div class="search_top_txt_2">πρόγραμμα</div>');
			$('.search_top_txt_3').replaceWith('<div class="search_top_txt_3">Επιστημονικό συμβούλιο</div>');
			$('.search_top_txt_4').replaceWith('<div class="search_top_txt_4">ηχεία</div>');
			$('.search_top_txt_5').replaceWith('<div class="search_top_txt_5">εταίρων</div>');
			$('.search_top_txt_6').replaceWith('<div class="search_top_txt_6">φωτογραφίες</div>');
			$('.search_top_txt_7').replaceWith('<div class="search_top_txt_7">υλικά</div>');
			$('.search_nr').replaceWith('<div class="search_nr">Δεν υπάρχουν δεδομένα</div>');
		
			window.vtxt1 = 'Σας ευχαριστούμε για τα σχόλιά σας';
			window.vtxt2 = 'πληροφορίες';
			window.vtxt3 = 'Εντάξει';
			window.vtxt4 = 'Επιλέξτε από 1 έως 5 αστέρια';
			window.vtxt5 = 'πληροφορίες';
			window.vtxt6 = 'Εντάξει';
			window.vtxt7 = 'Η ανάρτησή σας έχει ενημερωθεί';
			window.vtxt8 = 'πληροφορίες';
			window.vtxt9 = 'Εντάξει';
			window.vtxt10 = 'Υπήρξε πρόβλημα σύνδεσης';
			window.vtxt11 = 'πληροφορίες';
			window.vtxt12 = 'Εντάξει';
			window.vtxt13 = 'Συμπληρώστε το απαιτούμενο πεδίο';
			window.vtxt14 = 'πληροφορίες';
			window.vtxt15 = 'Εντάξει';
			window.vtxt16 = 'Σας ευχαριστώ για την ερώτησή σας';
			window.vtxt17 = 'πληροφορίες';
			window.vtxt18 = 'Εντάξει';
	}
	
	if(localStorage.getItem("language")=='ru'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Язык</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>контакт</a></li>\
        <li><div class="menu_line"></div></li>\
		<li><a href="program.html"><img src="images/icon_questions.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>вопросов</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.ConferenceTrainingApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Подать заявку</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/><div class="menu_ts"></div>Выход</a></li>');

			
			$('.t1').html('Изменение языка приложения:');
			
			$('#ml1').html('О КОМПАНИИ');
		    $('#mls1').html('Вся информация');
			$('#ml2').html('новости');
		    $('#mls2').html('Текущая информация');
			$('#ml3').html('программа');
		    $('#mls3').html('Harmonogram wydarzeń');
		    $('#ml4').html('совет');
		    $('#mls4').html('Программист - научный');
		    $('#ml5').html('колонки');
		    $('#mls5').html('Наш лидер');
		    $('#ml6').html('партнеры');
		    $('#mls6').html('Мы работаем с ...');
		    $('#ml7').html('фотографии');
		    $('#mls7').html('Самые интересные моменты');
			$('#ml8').html('материалы');
		    $('#mls8').html('Загрузите документы');
		    $('#ml9').html('Facebook');
		    $('#mls9').html('Мобильное приложение');
		
			$('#tops1').html('О приложении');
			$('#tops2').html('Язык');
			$('#tops3').html('поиск');
			$('#tops4').html('новости');
			$('#tops5').html('О КОМПАНИИ');
			$('#tops6').html('программа');
			$('#tops7').html('Программа - Ученый совет');
			$('#tops8').html('колонки');
			$('#tops9').html('партнеры');
			$('#tops10').html('фотографии');
			$('#tops11').html('материалы');
		
			$('.ce').html('ошибка: Проблема подключения...');
			$('.ce_2_search').html('ошибка: Проблема подключения....');
			$('.ce_search').html('ошибка: Заполните поле...');
		
		    $('.download_full_info').replaceWith('<div class="download_full_info">Загрузить или просмотреть:</div>');
			$('.gallery_mna').replaceWith('<span class="gallery_mna">Количество фотографий</span>');
		    $('.partners_full_info').replaceWith('<div class="partners_full_info">Дополнительная информация:</div>');
		
			$('.program_full_date').replaceWith('<div class="program_full_date">дата:</div>');
			$('.program_full_hours').replaceWith('<div class="program_full_hours">час:</div>');
			$('.program_full_time').replaceWith('<div class="program_full_time">продолжительность:</div>');
			$('.program_full_info_1').replaceWith('<div class="program_full_info_1">динамик:</div>');
			$('.program_full_info_2').replaceWith('<div class="program_full_info_2">Ваше мнение:</div>');
			$('.program_full_info_3').replaceWith('<div class="program_full_info_3">Задайте вопрос:</div>');
			$('.comment_txt_1').replaceWith('<div class="comment_txt_1">необязательный комментарий</div>');
			$('.comment_txt_2').replaceWith('<div class="comment_txt_2">вопрос</div>');
			$('.ce_nd').replaceWith('<div class="ce_nd">Нет данных</div>');
			$('.program_menu_sd_txt').replaceWith('<span class="program_menu_sd_txt">Выберите день:</span>');
			$('.min').replaceWith('<span class="min">мин.</span>');
			$('#comment').replaceWith('<input type="submit" value="послать" id="comment">');
		    $('#question').replaceWith('<input type="submit" value="послать" id="question">');
			$('.search_top_txt_1').replaceWith('<div class="search_top_txt_1">новости</div>');
			$('.search_top_txt_2').replaceWith('<div class="search_top_txt_2">программа</div>');
			$('.search_top_txt_3').replaceWith('<div class="search_top_txt_3">Ученый совет</div>');
			$('.search_top_txt_4').replaceWith('<div class="search_top_txt_4">колонки</div>');
			$('.search_top_txt_5').replaceWith('<div class="search_top_txt_5">партнеры</div>');
			$('.search_top_txt_6').replaceWith('<div class="search_top_txt_6">фотографии</div>');
			$('.search_top_txt_7').replaceWith('<div class="search_top_txt_7">материалы</div>');
			$('.search_nr').replaceWith('<div class="search_nr">Нет данных</div>');
		
			window.vtxt1 = 'Благодарим за отзыв';
			window.vtxt2 = 'информация';
			window.vtxt3 = 'OK';
			window.vtxt4 = 'Wybierz ocenę od 1 do 5 z gwiazdek';
			window.vtxt5 = 'информация';
			window.vtxt6 = 'OK';
			window.vtxt7 = 'Ваше сообщение обновлено';
			window.vtxt8 = 'информация';
			window.vtxt9 = 'OK';
			window.vtxt10 = 'Была проблема подключения';
			window.vtxt11 = 'информация';
			window.vtxt12 = 'OK';
			window.vtxt13 = 'Заполните необходимое поле';
			window.vtxt14 = 'информация';
			window.vtxt15 = 'OK';
			window.vtxt16 = 'Спасибо за ваш вопрос';
			window.vtxt17 = 'информация';
			window.vtxt18 = 'OK';
	}

}

$(document).ready(function(){
    
	var app_lang = localStorage.getItem("language");	
	if(!app_lang || app_lang == 'null' || app_lang == '' || app_lang == 'false' || app_lang == 'undefined'){ window.localStorage.setItem("language","en"); }
			
	changeLang(localStorage.getItem("language"));

}); 