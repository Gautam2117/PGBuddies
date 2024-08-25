document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.stat');
    const speed = 200; // The lower the faster

    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-target');
            const data = +counter.innerText.replace(/\D/g, '');
            const time = value / speed;
            if(data < value) {
                counter.innerText = Math.ceil(data + time) + counter.innerText.replace(/[0-9]/g, '');
                setTimeout(animate, 1);
            }else{
                counter.innerText = value + counter.innerText.replace(/[0-9]/g, '');
            }
        };
        
        animate();
    });
});
