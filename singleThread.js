setTimeout(() => console.log('test1'), 0);
function b() {
	setTimeout(() => console.log('test2'), 0);
}
function a() {
	b();
	var sum = 0;
	for (var i = 0; i < 9000000000; i++) {sum += i};
	console.log('test3');
}
a();
