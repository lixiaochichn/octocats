document.addEventListener('DOMContentLoaded', function () {

    let $octocats = document.querySelector("#octocats");
    let $btn = document.querySelector("#btn");
    let page = 1;

    const URL = 'https://octocats.now.sh/api/octocats';

    function loadmore(url) {
        $.getJSON(url, function (albums) {
            let catshtml;
            // console.log(albums.data.length);
            for (let i = 0; i < albums.data.length; i++) {
                catshtml = `<div class="catcard"><img class="catimg" src="${albums.data[i].image}" alt="${albums.data[i].name}"><div>${albums.data[i].name}</div></div>`;

                $octocats.innerHTML += catshtml.substring(0);
                console.log('1');
            };
        });
    };

    loadmore(URL);
    $btn.addEventListener('click', function () {
        page++;
        let url = `https://octocats.now.sh/api/octocats?page=${page}`;
        loadmore(url);
    })

});







