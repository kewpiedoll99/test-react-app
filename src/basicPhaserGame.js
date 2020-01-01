let gameState = {};

function preload() {
    this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
    gameState.codey = this.add.sprite(100, 200, 'codey');
    gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (gameState.cursors.down.isDown) {
        gameState.codey.y += 1;
    }
}

let config = {
    'width': 123,
    'height': 234,
    'backgroundColor': 0x223344,

    'scene': {
        preload,
        create,
        update
    }
};

const game = new Phaser.Game(config);
