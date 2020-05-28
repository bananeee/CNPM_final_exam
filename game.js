var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 610,
    parent: 'game_box',
    backgroundColor: 0xffffff,
    scene: [SceneChild1],

    dom: {
        createContainer: true
    }
}

var game = new Phaser.Game(config);