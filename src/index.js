var foo = new Promise((rs, rj) => {
	return rs('foo')
})

foo.then(d => {
	console.log(d);
})