/**
 * Niðurteljari!
 */
class VideoPlayer {
  /**
   * Finnur container fyrir niðurteljara og form.
   * Bindur submit eventhandler við form.
   */
  constructor() {
    this.video = document.querySelector('video');
    //Maybe attach listeneres here?
  }

  //When called, initializes videoPlayer and attaches listeneres
  Load(){

  }

  pause(){

  }

  skipForward(){

  }

  skipBackwards(){

  }

  fullScreen(){

  }

  mute(){

  }

document.addEventListener('DOMContentLoaded', () => {
  const videoPlayer = new VideoPlayer();
  videoPlayer.load();
});
