var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var shape = /** @class */ (function () {
    function shape(color, isFilled) {
        this.color = color;
        this.isFilled = isFilled;
    }
    shape.prototype.getColor = function () {
        return this.color;
    };
    shape.prototype.setColor = function (color) {
        this.color = color;
    };
    shape.prototype.getFilled = function () {
        return this.isFilled;
    };
    shape.prototype.setFilled = function (filled) {
        this.isFilled = filled;
    };
    shape.prototype.toString = function () {
        console.log("The Color: ".concat(this.color, " \n The Filled : ").concat(this.isFilled));
    };
    return shape;
}());
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle(color, isFilled, width, length) {
        var _this = _super.call(this, color, isFilled) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    rectangle.prototype.getArea = function () {
        return this.width * this.length;
    };
    return rectangle;
}(shape));
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle(color, isFilled, radius) {
        var _this = _super.call(this, color, isFilled) || this;
        _this.radius = radius;
        return _this;
    }
    circle.prototype.getArea = function () {
        return Math.pow(this.radius, 2) * Math.PI;
    };
    return circle;
}(shape));
var Meter = /** @class */ (function () {
    function Meter(cem) {
        this.cem = cem;
    }
    Meter.prototype.getMeter = function () {
        return this.cem * 100;
    };
    Meter.prototype.setMeter = function (meter) {
        this.cem = meter / 100;
    };
    return Meter;
}());
var names = /** @class */ (function () {
    function names(names) {
        this.names = names;
    }
    names.prototype.toString = function () {
        console.log("Names : ".concat(names));
    };
    return names;
}());
var r1 = new rectangle("red", false, 20, 10);
console.log(r1.toString());
var c1 = new circle("red", true, 20);
console.log(c1.getArea());
var m1 = new Meter(100);
console.log(m1.getMeter());
