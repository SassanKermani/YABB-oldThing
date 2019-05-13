const http = require(`http`);
const fs = require(`fs`);

http.createServer( (req, res)=>{

	// console.log(req.method)

	if(req.method == `GET`){
		
		res.writeHeader(200, {"Content-Type": "text/html"}); 
		// res.write(`KO`);
		// res.end();

		fs.readFile(`./testPage.html`, (err, data)=>{
			console.log(`ok`)
			if(err){ throw err};
			res.write(data);
			res.end();
		})


	}else{
		
		console.log(`post`)

		let body = [];
		req.on('data', (chunk) => {
			body.push(chunk);
		}).on('end', () => {
			body = Buffer.concat(body)//.toString();
			// at this point, `body` has the entire req body stored in it as a string
			
			console.log(`body`);
			console.log(typeof body);

		// 	fs.writeFile(`./testVideoFile`, body, (err)=>{
		// 		if(err){throw err};
		// 		console.log(`saved`);
		// 		res.end(body);
		// 	})

			res.end(body);
			
		});

		/*----------  -------------------------  ----------*/

		// fs.readFile(`./testVideoFile`, (err, data)=>{
		// 	if(err){ throw err};
		// 	console.log(`data`)
		// 	console.log(typeof data)
		// 	console.log(data)

		// 	res.end(data);
		// })

	}

}).listen(3000);
