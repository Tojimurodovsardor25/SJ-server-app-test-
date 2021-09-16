window.addEventListener('load', function (e) {
    // npm-js.com // json-server //
    const url = 'https://jsonplaceholder.typicode.com/users'

    function requestServer() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, url)

            // Post so'rovi
            xhr.setRequestHeader('content-type', 'application/json')

            xhr.responseType = 'json'

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
});