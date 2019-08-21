var Line = {};

Line.newPoint = function (x, y) { return {x:x, y:y} }
Line.newLine = function (x1, y1, x2, y2) { return {start:{x:x1,y:y1}, end:{x:x2,y:y2}} };
Line.newCircle = function (x, y, r) { return {point:{x:x,y:y}, r:r} };
Line.newLineFromPoints = function (point1, point2) { return {start:point1, end:point2} };
Line.newCircleFromPoint = function (point, r) { return {point:point, r:r} };

Line.getPointDistance = function (point1, point2) {

    var a = point1.x - point2.x;
    var b = point1.y - point2.y;

    return Math.sqrt(a*a + b*b);

}
Line.getLineLength = function (line) { return Line.getPointDistance(line.start, line.end) };
Line.getLineMidpoint = function (line) { return newPoint((line.start.x + line.end.x)/2, (line.start.y + line.end.y)/2) };
Line.getPointAngle = function (point1, point2) { return Math.atan2(point1.y-point2.y, point1.x-point2.x) }
Line.getLineAngle = function (line) { return Line.getPointAngle(line.start, line.end) };

Line.lineLineCollision = function (line1, line2) {

    return {
        x: (((line1.start.x*line1.end.y-line1.start.y*line1.end.x)*(line2.start.x-line2.end.x)) - ((line1.start.x-line1.end.x)*(line2.start.x*line2.end.y-line2.start.y*line2.end.x))) / (((line1.start.x-line1.end.x)*(line2.start.y-line2.end.y)) - ((line1.start.y-line1.end.y)*(line2.start.x-line2.end.x))),
        y: (((line1.start.x*line1.end.y-line1.start.y*line1.end.x)*(line2.start.y-line2.end.y)) - ((line1.start.y-line1.end.y)*(line2.start.x*line2.end.y-line2.start.y*line2.end.x))) / (((line1.start.x-line1.end.x)*(line2.start.y-line2.end.y)) - ((line1.start.y-line1.end.y)*(line2.start.x-line2.end.x)))
    };

}
Line.pointLineCollision = function (point, line) { return Math.round(Line.getPointDistance(point, line.start) + Line.getPointDistance(point, line.end)) === Math.round(Line.getLineLength(line)) }
Line.pointCircleCollision = function (point, circle) { return Line.getPointDistance(point, circle.point) < circle.r };
Line.circleCircleCollision = function (circle1, circle2) { return Line.getPointDistance(circle1.point, circle2.point) < circle1.r + circle2.r }
