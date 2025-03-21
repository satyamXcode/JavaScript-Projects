const clock = document.getElementById('clock');

        setInterval(function () {
            let date = new Date();
            clock.innerHTML = date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            });
        }, 1000);