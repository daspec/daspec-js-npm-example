var speeds = require('../src-modules/speeds');
defineStep(/Moving at a speed of (.*), a keen cyclist will be faster than (.*)/, function (speed, comparison) {
	expect(speeds[comparison]).quantityToBeLessThan(speed);
});

defineStep(/Moving at a speed of (.*), a keen cyclist will be slower than (.*)/, function (speed, comparison) {
	expect(speeds[comparison]).quantityToBeGreaterThan(speed);
});
