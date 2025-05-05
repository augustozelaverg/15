// Variable global para el reproductor de YouTube
var player;

// Función que se ejecuta cuando la API de YouTube está lista
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubeVideo', {
        videoId: 'lKo5tWdGBgo',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'rel': 0,
            'showinfo': 0,
            'loop': 1,
            'playlist': 'X0lpAuuA8nA',
            'modestbranding': 1,
            'enablejsapi': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Función que se ejecuta cuando el reproductor está listo
function onPlayerReady(event) {
    // El reproductor está listo pero no reproducimos automáticamente
    // Esperamos al clic en el botón
}

// Función que se ejecuta cuando cambia el estado del reproductor
function onPlayerStateChange(event) {
    // Mostrar botón de confirmación cuando el video comienza a reproducirse
    if (event.data == YT.PlayerState.PLAYING) {
        document.getElementById('botonConfirmar').style.display = 'block';
    }
}

// Evento para el botón "Abrir Invitación"
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botonAbrir').addEventListener('click', function() {
        var bienvenida = document.getElementById('bienvenida');
        var videoContainer = document.getElementById('videoContainer');
        
        // Animación de desvanecimiento
        bienvenida.style.opacity = '0';
        
        setTimeout(function() {
            bienvenida.style.display = 'none';
            videoContainer.style.display = 'block';
            
            // Iniciar reproducción del video con sonido
            player.playVideo();
            player.unMute();
            player.setVolume(100);
            
            // Mostrar botón de confirmación
            setTimeout(function() {
                document.getElementById('botonConfirmar').style.display = 'block';
            }, 1000);
        }, 1500);
    });
});
