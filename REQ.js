(()=>{var REQ={
    	get:function(uri,data,successFunc,errorFunc){
			let xhr=new XMLHttpRequest()
			xhr.open("GET",uri+'?'+REQ.r.urlify(data),true)
			xhr.setRequestHeader("x-requested-with","XMLHttpRequest")
			xhr.responseType='json'
			xhr.onload=()=>{
				if(xhr.status!=200){
					actionBar("Network Error")
					errorFunc()
				}else{successFunc(xhr.response)}
			}
			xhr.onerror=()=>{
				actionBar("Network Error")
				errorFunc()
			}
			xhr.send()
		},
		postXhr:function(uri,data,successFunc,errorFunc){
			let xhr=new XMLHttpRequest()
			xhr.open("POST",uri)
			xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
			xhr.setRequestHeader("x-requested-with","XMLHttpRequest")
			xhr.responseType='json'
			xhr.onload=()=>{
				if(xhr.status!=200){errorFunc()}
				else{successFunc(xhr.response)}
			}
			xhr.onerror=()=>{
				actionBar("Network Error")
				errorFunc()
			}
			let json=REQ.r.urlify(data)
			xhr.send(json)
		},
		r:{urlify:function(json){return new URLSearchParams(json).toString()}}
	}
    window.REQ=REQ
})()