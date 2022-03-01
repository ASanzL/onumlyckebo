xhr = new XMLHttpRequest();

xhr.onload = function () {
    if(xhr.status === 200){
        var responseObject = JSON.parse(xhr.responseText);
        var content = '';

        for(var i = 0; i < responseObject.news.length; i++) {
            content += '<article>' +
                '<h1>' + responseObject.news[i].title + '</h1>';
            for(var j = 0; j < responseObject.news[i].content.length; j++) {
                content += '<figure>' +
                    '<img src="img/' + responseObject.news[i].content[j].img + '" alt="">' +
                    '<figcaption>' + responseObject.news[i].content[j].cap + '</figcaption>' +
                    '</figure>';
            }
            content += '</article>';
        }
        document.getElementById('main').innerHTML = content;
    }
}

xhr.open('GET', 'data/news.json', true);
xhr.send(null);