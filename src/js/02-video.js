const iframe = document.querySelector('iframe');
import throttle from 'lodash.throttle';
    const player = new Vimeo.Player(iframe);
    console.log('The best HW8');

    player.on('play', function() {
        console.log('played the video!');
    });


    const onPlay = function(data) {
        localStorage.setItem("videoplayer-current-time", data.seconds);
    };
    
    player.on('timeupdate', throttle(onPlay, 1000));

    player.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time"))).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                console.log('Error!!!');
                break;
    
            default:
                console.log('Other error');
                break;
        }
    });

