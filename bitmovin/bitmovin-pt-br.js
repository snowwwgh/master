(function () {
    if (!window.bitmovin || !bitmovin.playerui || !bitmovin.playerui.i18n) {
        console.warn('Bitmovin Player UI v4 i18n não encontrado.');
        return;
    }
    bitmovin.playerui.i18n.setConfig({
        language: 'pt-BR',
        vocabularies: {
            'pt-BR': {
                'auto': 'Automático',
                'normal': 'Normal',
                'off': 'Desligado',
                'default': 'Padrão',
                'live': 'AO VIVO',
                'back': 'Voltar',
                'close': 'Fechar',
                'play': 'Reproduzir',
                'pause': 'Pausar',
                'playPause': 'Reproduzir/Pausar',
                'replay': 'Repetir',
                'mute': 'Silenciar',
                'unmute': 'Ativar som',
                'fullscreen': 'Tela cheia',
                'enterFullscreen': 'Entrar em tela cheia',
                'exitFullscreen': 'Sair da tela cheia',
                'pictureInPicture': 'Picture-in-Picture',
                'settings': 'Configurações',
                'speed': 'Velocidade',
                'settings.video.quality': 'Qualidade',
                'settings.audio.quality': 'Qualidade do áudio',
                'settings.audio.track': 'Áudio',
                'settings.subtitles': 'Legendas',
                'settings.subtitles.options': 'Opções de legendas',
                'subtitle': 'Legenda',
                'subtitles': 'Legendas',
                'captions': 'Legendas',
                'subtitle.select': 'Selecionar legenda',
                'quality': 'Qualidade',
                'audio': 'Áudio',
                'audioTrack': 'Faixa de áudio',
                'googleCast': 'Transmitir',
                'airplay': 'AirPlay',
                'retry': 'Tentar novamente',
                'reset': 'Redefinir'
            }
        }
    });
})();
