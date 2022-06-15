function b() {
	setTimeout(() => console.log('test'), 100);
}
function a() {
	b();
	var sum = 0;
	for (var i = 0; i < 900000000; i++) {sum += i};
	console.log(sum);
}
a();
