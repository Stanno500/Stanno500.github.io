const orb = document.querySelector('.left'),
    ease = 0.8,
    start_position = 0;
let animation_running = false,
    total_offset = 0,
    scroll_request = 0;

function animate_scroll() {
    scroll_request++;

    if (!animation_running) {
        animation_running = true;

        animation_loop();
    }
}

function animation_loop() {
    //console.log('test')
    const current_offset = window.pageYOffset;

    let difference = current_offset - (total_offset);
    difference *= ease;
    if(difference>10)console.log(difference);
    if (Math.abs(difference) < 0.05) {
        scroll_request = 0;
        total_offset = current_offset;
        animation_running = false;

        return;
    }

    orb.style.top = `${(start_position - total_offset)*0.6}px`;

    total_offset += difference;

    requestAnimationFrame(animation_loop);
}

document.addEventListener('scroll', animate_scroll);