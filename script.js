const startBtn = document.querySelector("button")
const started = document.getElementById("started")
const form = document.getElementById("form")
const response = form.response

history.replaceState({}, "/", "/")

startBtn.onclick = start

function start() {
    const num = rnd(1, 100)
    let count = 0

    started.hidden = false

    form.onsubmit = e => {
        e.preventDefault()

        count++

        const guess = e.submitter.value || form.guess.value

        if (e.submitter.value) e.submitter.disabled = true
        else if (guess) form.querySelector(`[value="${guess}"]`).disabled = true

        if (guess == num) {
            response.value = `Вы угадали с ${count}-й попытки!`
            form.onsubmit = null
        } else if (guess < num) {
            response.value = "Загаданное число больше!"
        } else {
            response.value = "Загаданное число меньше!"
        }
    }
}

function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

