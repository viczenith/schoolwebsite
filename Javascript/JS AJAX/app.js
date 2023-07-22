var httpRequest = new XMLHttpRequest();

function makeRequest(){
    httpRequest.onreadystatechange = writeContent;

    httpRequest.open("GET" , "https://codeliber.com/test.php");
    httpRequest.send();
}

function writeContent() {
    if(httpRequest.readystate === 4){
        if (httpRequest.readystatus == 200){
            document.getElementById("demo").innerHTML=httpRequest.responseText;
        }else{
          alert('There was a problem with the request');  
        }
    }
}