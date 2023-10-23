function resetAnimation() {
    document.getAnimations().forEach((anim) => {
        anim.cancel();
        anim.play();
      });
}