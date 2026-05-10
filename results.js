input.oninput = function() {
	a = 0;

	if (input.value !== "")
		window.history.pushState('','','?' + "v=" + input.value);
	else
		window.history.pushState('','', window.location.protocol + "//" + window.location.host + window.location.pathname);

	Object.keys(cipher).forEach(function(key) { a += ((input.value).split(key).length - 1)*cipher[key]; }); 
	
	if (/\d/.test(input.value))
		a += ((input.value)).match(/\d+/g).map(Number).reduce(function(b, c) { return b + c; }, 0);
	
	result.innerHTML = a;
	
	
		// Year 1 //
		if (typeof year1[a] !== 'undefined') {
			year1count.innerHTML = year1[a].length;
			year1match.innerHTML = "";
			Object.keys(year1[a]).forEach(function(key) { 
				year1match.innerHTML += "<li>" + year1[a][key] + "</li>"; 
			})
		}
		else {
			year1count.innerHTML = 0;
			year1match.innerHTML = "N/A";
		}

		// Year 2 //
		if (typeof year2[a] !== 'undefined') {
			year2count.innerHTML = year2[a].length;
			year2match.innerHTML = "";
			Object.keys(year2[a]).forEach(function(key) { 
				year2match.innerHTML += "<li>" + year2[a][key] + "</li>"; 
			})
		}
		else {
			year2count.innerHTML = 0;
			year2match.innerHTML = "N/A";
		}

		// Year 3 //
		if (typeof year3[a] !== 'undefined') {
			year3count.innerHTML = year3[a].length;
			year3match.innerHTML = "";
			Object.keys(year3[a]).forEach(function(key) { 
				year3match.innerHTML += "<li>" + year3[a][key] + "</li>"; 
			})
		}
		else {
			year3count.innerHTML = 0;
			year3match.innerHTML = "N/A";
		}

		// Year 4 //
		if (typeof year4[a] !== 'undefined') {
			year4count.innerHTML = year4[a].length;
			year4match.innerHTML = "";
			Object.keys(year4[a]).forEach(function(key) { 
				year4match.innerHTML += "<li>" + year4[a][key] + "</li>"; 
			})
		}
		else {
			year4count.innerHTML = 0;
			year4match.innerHTML = "N/A";
		}
		
}

document.body.onload = function() {
	input.value = decodeURI(window.location.search).substring(3,128);
	input.select();
	input.dispatchEvent(new Event('input'));
}
