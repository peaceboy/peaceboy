var levels = [];
levels.push(new Level(0, 0, 0));
levels.push(new Level(1, 1, 4));
levels.push(new Level(2, 2, 6));
levels.push(new Level(3, 3, 8));
levels.push(new Level(4, 5, 10));
levels.push(new Level(5, 8, 13));
levels.push(new Level(6, 10, 15));
levels.push(new Level(7, 13, 18));
levels.push(new Level(8, 15, 22));
levels.push(new Level(9, 18, 26));
levels.push(new Level(10, 20, 28));
levels.push(new Level(11, 24, 32));
levels.push(new Level(12, 28, 38));
levels.push(new Level(13, 30, 40));
levels.push(new Level(14, 33, 44));
levels.push(new Level(15, 37, 48));
levels.push(new Level(16, 40, 52));
levels.push(new Level(17, 43, 55));
levels.push(new Level(18, 47, 60));
levels.push(new Level(19, 50, 65));
levels.push(new Level(20, 55, 68));


function Level(number, requiredBalls, ballCount, settings) {
    this.number = number;
    this.requiredBalls = requiredBalls;
    this.ballCount = ballCount;
    this.settings = settings;
}

Level.prototype.isGoal = function (explodedBalls) {
    return (explodedBalls - 1) == this.requiredBalls; // remove the "bomb" ball.
};

Level.prototype.passedGoal = function (explodedBalls) {
    return (explodedBalls - 1) >= this.requiredBalls; // remove the "bomb" ball.
};

Level.create = function (number, requiredBalls, ballCount) {
    var settings = {};

    if (number == 2) {
        settings.ballSize = 10;
        settings.explodeRadius = 60;
        settings.explodeTime = 500;
        settings.bombColor = 'red';
    }

    if (number == 3) {
        settings.bombColor = 'green';
    }

    return new Level(number, requiredBalls, ballCount, settings);
}
