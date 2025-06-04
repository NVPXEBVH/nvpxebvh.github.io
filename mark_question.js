function convertBulletsToList(text) {
    let lines = text.split('\n');
    let listItems = [];
    let otherLines = [];

    for (let line of lines) {
        let match = line.match(/^\s*•\s*(.+)/);
        if (match) {
            listItems.push(match[1].trim());
        } else {
            otherLines.push(line);
        }
    }

    if (listItems.length === 0) {
        // Нет списка — возвращаем текст с <br>
        return text.replace(/\n/g, '<br>');
    }

    // Формируем HTML списка
    let html = '<ul>';
    for (let item of listItems) {
        html += `<li>${item}</li>`;
    }
    html += '</ul>';

    // Добавляем остальные строки (если есть)
    if (otherLines.length > 0) {
        html += otherLines.join('<br>');
    }

    return html;
}

document.getElementById("yui_3_17_2_1_1685452473883_8064").addEventListener("click", function() {

 


    const inputElement = document.getElementById('q498438:34_answer');
    const question = inputElement.value.trim();
    const contentDiv = document.getElementById('d_answer');
    contentDiv.innerHTML = '';

    if (!question) return;

    const sections = window.the_answers.split('***');
    const escapedQuestion = question.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedQuestion, 'gi');

    let found = false;
    let resultsHTML = '';

    for (let i = 1; i < sections.length; i++) {
        const sectionRaw = sections[i].trim();
        const lines = sectionRaw.split('\n');

        let sectionMatched = false;
        let processedLines = [];

        for (let line of lines) {
            if (regex.test(line)) {
                sectionMatched = true;
                // Подсвечиваем совпадения
                const highlightedLine = line.replace(regex, match => `<mark>${match}</mark>`);
                processedLines.push(highlightedLine);
            } else {
                processedLines.push(line);
            }
        }

        if (sectionMatched) {
            found = true;
            let sectionHTML = processedLines.join('\n');

            // Заменяем строки с именами файлов картинок на теги <img>
            sectionHTML = sectionHTML.replace(/(^|\n)(\s*\S+\.(png|jpg|jpeg|gif|bmp))(\n|$)/gi,
                (match, p1, p2) => `${p1}<img src="${p2.trim()}" alt="${p2.trim()}" style="max-width:100%; height:auto;">\n`
            );

            // Преобразуем пункты списка
            sectionHTML = convertBulletsToList(sectionHTML);

            resultsHTML += `<div style="margin-bottom:20px">${sectionHTML}</div>`;
        }
    }

    if (!found) {
        resultsHTML = '<p>Совпадений не найдено.</p>';
    }

    contentDiv.innerHTML = resultsHTML;
});
