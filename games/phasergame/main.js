

var config = {
    type: Phaser.AUTO,
    width: window.outerWidth,
    height: window.outerHeight,
    scene: {
      preload: preload,
      create: create,
      update: update
    }
    
  };
  
  var game = new Phaser.Game(config);
  
  var player; // Declare the player sprite
  var speed = 200; // Speed at which the player moves
  
  function preload() {
    // Load the player sprite
    this.load.image('player', '/img/favicon.png');
  }
  
  function create() {
    // Add the player sprite to the middle of the screen
    player = this.add.sprite(400, 300, 'player');
  }
  
  function update() {
    // Check if the pointer is down (left click or touch)
    if (this.input.activePointer.isDown) {
      // Get the pointer's current position
      var pointerX = this.input.activePointer.x;
      var pointerY = this.input.activePointer.y;
  
      // Calculate the distance between the player and the pointer
      var dx = pointerX - player.x;
      var dy = pointerY - player.y;
  
      // Move the player toward the pointer's position
      var angle = Math.atan2(dy, dx); // Calculate angle toward the pointer
      player.x += Math.cos(angle) * speed * 0.016; // Adjust movement speed
      player.y += Math.sin(angle) * speed * 0.016;
    }
  }
  