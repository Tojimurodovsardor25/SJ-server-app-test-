window.addEventListener('load', function (e) {
    // URL Server D-B //
    const url = 'http://localhost:3000/savol'

    function requestServer(url) {
        return fetch(url).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                console.error('Xato', res.status);
            }
        })
    }

    requestServer(url).then(data => {
        const titleInfo = document.querySelector('.title_info');
        data.forEach((val, index) => {
            titleInfo.innerHTML = val.savol1

            titleInfo.appendChild(titleInfo)
        })
    }).catch((err) => {
        // console.error(err);
    })
});