# Cleaning robot

## tl;dr

-   Install: `npm install`
-   Run: `npm start`
-   Test: `npm run test`
-   Visit: `localhost:1337`
-   Customize: `localhost:1337/?columns=15&rows=5&speed=100` (speed is ms)

## Assignment description

In a square room of size 10x10 (100 tiles), a cleaning robot (such as depicted above) moves about the floor, cleaning each tile as it passes over it.
The robot starts at a random position in the room, and begins randomly moving accross the room.
The robot moves one tile at a time, and each movement it does is random.
The robot can move in 4 directions: North, South, West, and East. The robot moves twice per second.

## The goal of the assignment is:

-   To display the room map on the screen.
-   To display the current position of the robot in the room.
-   To display the ongoing cleaning process: color each tile in the room green as the robot passes over it.
-   A button labeled “Reset” should allow to start over the cleaning process.

### Bonus tasks:

-   Track the duration spent cleaning the room.
-   When the room has been completely cleaned, a message saying “Cleaning Complete in {x} seconds” should appear under the room map.

The room’s map can rendered as a grid of brown tiles.
The robot can be rendered as cross or a point inside one of the tiles.
A cleaned tile can be shown as having a green background, as opposed to a brown background for dirty tiles.

Feel free to adjust the visual design of the assignment to your liking.
