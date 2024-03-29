class Engine {
  /**
         * The game loop.
         * The game loop calls update and draw using a timer
         */
  static gameLoop() {
    let canvas = document.querySelector("#canv")
    let ctx = canvas.getContext("2d")

    //Make the canvas the same size as our window
    //so it is "full screen"
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Update the current scene
    currentScene.update()

    //Draw in world space
    currentScene.draw(ctx)

    //Draw in Screen/UI space
    //currentScene.drawUI(ctx)
  }

  /** Setup the game **/
  static setup() {
    document.addEventListener("keydown", Input.keydown)
    document.addEventListener("keyup", Input.keyup)

    document.addEventListener("mousemove", Input.mousemove)


    //In the background, create a thread and call
    //gameLoop every 100ms.

    setInterval(Engine.gameLoop, Time.ms)
  }

}