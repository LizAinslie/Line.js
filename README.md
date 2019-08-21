# Line.js
A library making line collisions easy

**Functions**

``Line.newPoint (x, y)``
Returns a new point with the properties of `x` and `y`

``Line.newLine (x1, y1, x2, y2)``
Returns an object with two points in the properties of `start` and `end`

``Line.newCircle (x, y, radius)``
Returns an object with its location point under `point` and its radius under `r`

``Line.newLineFromPoints (point1, point2)``
Returns a line using two points

``Line.newCircleFromPoint (point, radius)``
Creates a circle from a point with a radius

``Line.getPointDistance (point1, point2)``
Returns the ditance between two points

``Line.getLineLength (line)``
Returns the distance of a line

``Line.getLineMidpoint (line)``
Returns the point in the middle of a line

``Line.getPointAngle (point1, point2)``
Returns the angle in radians between two points

``Line.getLineAngle (line)``
Returns the angle in radians of a line

``Line.lineLineCollision (line1, line2)``
Returns the point where two lines intersect

``Line.pointLineCollision (point, line)``
Returns `true` if the point is on the line, and returns `false` if it is not

``Line.pointCircleCollision (point, circle)``
Returns `true` if a point is touching a circle, and returns `false` if it is not

``Line.circleCircleCollision (circle1, circle2)``
Returns `true` if a circle is touching another circle, and returns `false` if it is not
