const $progress = document.getElementById('progress')
const $prevBtn = document.getElementById('prev')
const $nextBtn = document.getElementById('next')
const $circles = document.querySelectorAll('.circle')

let currentActive = 1;


$nextBtn.addEventListener('click', () => {
    currentActive++

    if (currentActive > $circles.length)
        currentActive = $circles.length

    update()
})

$prevBtn.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1)
        currentActive = 1

    update()
})

function update() {

    $circles.forEach((circle, ind) => {
        if (ind < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    $progress.style.width = (currentActive - 1) / ($circles.length - 1) * 100 + '%'

    $prevBtn.disabled = currentActive === 1;
    $nextBtn.disabled = currentActive === $circles.length;

}