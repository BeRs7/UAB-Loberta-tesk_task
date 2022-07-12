function check_func() {
const check = document.getElementById('check')
const csrf = document.getElementsByName('csrfmiddlewaretoken')

check.addEventListener('submit', e=> {
    e.preventDefault()
    const fd = new FormData()
    fd.append('csrfmiddlewaretoken', csrf[0].value)
    fd.append('interval', interval.checked)
    fd.append('number_of_periods', number_of_periods.value)
    fd.append('interval_period', interval_period.value)

    $.ajax({
        type: 'POST',
        url: '',
        enctype: 'multipart/form-data',
        data: fd,
        success: function (response) {
            var list = document.getElementsByClassName('list-group-item')
            for (i = 0; i <= list.length; i++) {
                if (response.res[i] === 200) {
                    list[i].style.backgroundColor = "green"
                }
                else {
                    list[i].style.backgroundColor = "red"
                }
            }
        },
        error: function (error) {
            console.log(error)
        },
        cache: false,
        contentType: false,
        processData: false,
    })
})
}


function set_interval() {
    const check_interval = document.getElementById('check_interval')
    const interval = document.getElementById('interval')
    const number_of_periods = document.getElementById('number_of_periods')
    const interval_period = document.getElementById('interval_period')
    const csrf = document.getElementsByName('csrfmiddlewaretoken')

    check_interval.addEventListener('submit', e=> {
        e.preventDefault()
        const fd = new FormData()
        fd.append('csrfmiddlewaretoken', csrf[0].value)
        fd.append('interval', interval.checked)
        fd.append('number_of_periods', number_of_periods.value)
        fd.append('interval_period', interval_period.value)

        $.ajax({
            type: 'POST',
            url: '',
            enctype: 'multipart/form-data',
            data: fd,
            success: function (response) {
            },
            error: function (error) {
                console.log(error)
            },
            cache: false,
            contentType: false,
            processData: false,
        })
    })

}

function disabled_button() {
    if (document.getElementById('interval').checked === true) {
        document.getElementById('interval_button').disabled = ''
    } else {
        document.getElementById('interval_button').disabled = 'disabled'
    }
}