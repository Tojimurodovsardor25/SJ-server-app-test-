window.addEventListener('load', function (e) {
    // URL Server D-B //
    const url = 'https://jsonplaceholder.typicode.com/users'

    function sendXHR(method, url, body) {
        // Promis funksiya resolve va reject
        return new Promise((resolve, reject) => {
            // Umumiy (Global) funksiya
            const xhr = new XMLHttpRequest();

            // Metod bo'yicha url (manzil) ochish
            xhr.open(method, url)

            // Post so'rovi
            xhr.setRequestHeader('content-type', 'application/json')

            // Massivga aylantirish
            xhr.responseType = 'json'

            // Bildirishnoma uchun alohida funksiya
            xhr.onload = function () {
                if (xhr.status < 400) {
                    resolve(xhr.response);
                } else {
                    reject('Xato' + xhr.status)
                }
            }
              

            // Sorov jo'natish
            xhr.send(JSON.stringify(body))
        })


    }

    const names = document.querySelector('.names');

    const user = {
        name: 'Umarjon',
        age: 15
    }

    sendXHR("POST", url, user).then((res) => {
        console.log(res);
        names.innerHTML = res.id + res.name
    }).catch((err) => {
        console.log(err);
    })

});