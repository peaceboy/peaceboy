var levels = [];
levels.push(new Level(0, 0, 0));
levels.push(new Level(1, 1, 4));
levels.push(new Level(2, 2, 6));
levels.push(new Level(3, 4, 10));
levels.push(new Level(4, 6, 15));
levels.push(new Level(5, 8, 18));
levels.push(new Level(6, 10, 20));
levels.push(new Level(7, 14, 22));
levels.push(new Level(8, 18, 28));
levels.push(new Level(9, 20, 30));
levels.push(new Level(10, 25, 35));
levels.push(new Level(11, 28, 40));
levels.push(new Level(12, 30, 45));
levels.push(new Level(13, 35, 50));
levels.push(new Level(14, 38, 53));
levels.push(new Level(15, 42, 56));
levels.push(new Level(16, 45, 60));
levels.push(new Level(17, 48, 64));
levels.push(new Level(18, 50, 68));
levels.push(new Level(19, 55, 74));
levels.push(new Level(20, 60, 80));


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
