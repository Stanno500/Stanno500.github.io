const orb = document.querySelector('.imageGraphic'),
    ease = 0.57,
    start_position = 0;
let animation_running = false,
    total_offset = 0,
    scroll_request = 0;

var scrollSpeedMultiplier;
var pageHeight;

function animate_scroll() {
    pageHeight = document.body.scrollHeight;
    scroll_request++;

    if (!animation_running) {
        animation_running = true;

        animation_loop();
    }
}

function animation_loop() {
    const current_offset = window.pageYOffset;

    let difference = current_offset - (total_offset);
    difference *= ease;
    if (Math.abs(difference) < 0.05) {
        scroll_request = 0;
        total_offset = current_offset;
        animation_running = false;

        return;
    }

    orb.style.top = `${(start_position - total_offset) * scrollSpeedMultiplier}px`;

    total_offset += difference;

    requestAnimationFrame(animation_loop);
}

function checkScrollSpeed() {
    sHeight = document.body.scrollHeight;
    if (sHeight <= 4000) scrollSpeedMultiplier = 0.8;
    else if (sHeight > 4000 && sHeight <= 5000) scrollSpeedMultiplier = 0.5;
    else if (sHeight > 5000 && sHeight <= 6000) scrollSpeedMultiplier = 0.36;
    else if (sHeight > 6000 && sHeight <= 7000) scrollSpeedMultiplier = 0.18;
    else scrollSpeedMultiplier = 0.15;
}

function showWidth() {
    alert(document.body.scrollHeight + 'px')
}

document.addEventListener('scroll', animate_scroll);
document.addEventListener('scroll', checkScrollSpeed);
window.addEventListener('resize', checkScrollSpeed);