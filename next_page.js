var inputElement;
                                                        var v_question;
                                                        document.getElementById("mod_quiz-next-nav").addEventListener("click", function() {
                                                            // Ваш скрипт или функция, которую вы хотите выполнить при нажатии кнопки
                                                            // Например:
                                                            inputElement = document.getElementById('q498438:34_answer');
                                                            v_question = inputElement.value;
                                                            //alert(v_question);
                                                            // Или вызов другой функции
                                                            myFunction();
                                                             var contentDiv = document.getElementById('d_answer');
                                                            contentDiv.style.opacity = '0.3';
                                                        });

                                                        function myFunction() {
                                                            // Предположим, у вас уже есть div с идентификатором 'content' на странице HTML, куда вы хотите добавить результаты
                                                            var contentDiv = document.getElementById('d_answer');
                                                            contentDiv.innerHTML = '';
                                                            var question = v_question;
                                                            var sections = window.the_answers.split('***'); // берем переменную из answers

                                                            for (var i = 1; i < sections.length; i++) {
                                                            var section = sections[i].trim().split('\n');
                                                            //var section = sections[i].split('\n');
                                                            var header = section[0];
                                                            if (header.includes(question)) {
                                                                var text = section.slice(1);
                                                                var content = `<h2 style="font-size:medium;">**************ВОПРОС: ${header}</h2>`;
                                                                for (var j = 0; j < text.length; j++) {
                                                                if (text[j].endsWith('.png')) {
                                                                    var image = text[j].trim();
                                                                    var imagePath = image.substring(0, image.length - 4) + '.png';
                                                                    content += `<img src="${imagePath}" alt="${image}" style="max-width: 50%;">`;
                                                                } else {
                                                                    content += `<p>${text[j]}</p>`;
                                                                }
                                                                }
                                                                document.getElementById('d_answer').innerHTML = content;
                                                                break;
                                                            }
                                                            }
                                                        }