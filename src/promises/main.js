function async() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Promises are awesome!');
		}, 100);
	});
	return promise;
}

async()
	.then(function (data) {
		console.log(data);
	},
	function (err) {
		console.log(err);
	});