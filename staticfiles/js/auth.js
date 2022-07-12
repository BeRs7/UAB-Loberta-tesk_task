const auth = document.getElementById('auth')
const username = document.getElementById('username')
const password = document.getElementById('password')
const csrf = document.getElementsByName('csrfmiddlewaretoken')

auth.addEventListener('submit', e=> {
    e.preventDefault()
    const fd = new FormData()
    fd.append('csrfmiddlewaretoken', csrf[0].value)
    fd.append('username', username.value)
    fd.append('password', password.value)
    $.ajax({
        type: 'POST',
        url: '',
        enctype: 'multipart/form-data',
        data: fd,
        success: function (response) {
            window.location.href = '/main'
        },
        error: function (error) {
            console.log(error)
            document.getElementById('error').innerText='Wrong login or password'
        },
        cache: false,
        contentType: false,
        processData: false,
    })
})
