class SceneChild1 extends Phaser.Scene {
    constructor() {
        super("Lesson1");
    }

    preload() {
        this.load.svg('background', 'assets/background.svg', {width: 1024, height: 497});
        this.load.svg('tree', 'assets/tree.svg', {width: 632, height: 497});
        this.load.svg('circle', 'assets/circle.svg', {width: 120, height: 120});
        this.load.spritesheet('obj', 'assets/obj.svg', {frameWidth: 175, frameHeight: 175});
        this.load.spritesheet('bug', 'assets/bugs.svg', {frameWidth: 111, frameHeight: 120});
    }

    create() {
        this.gameSetup();
    }

    gameSetup() {
        this.background = this.add.image(0, 461, 'background').setOrigin(0,0.5).setAlpha(0.5);

        this.tree = this.add.image(361, 378.5, 'tree');
        
        this.circle1 = this.add.image(166, 515, 'circle');
        this.circle2 = this.add.image(547, 515, 'circle');

        this.obj = this.add.sprite(360, 377, 'obj', 0);

        this.bug = this.add.sprite(850, 390, 'bug', 2).setInteractive({ draggable: true });
        
    }

   
}