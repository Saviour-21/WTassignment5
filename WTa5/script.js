let base_url="req.php";
function contact() {
    var a = document.getElementById("form1");
    var b = document.getElementById("contactothers"); 
    var c = document.getElementById("about");    
     a.style.display = "none";
     b.style.display = "block";
     c.style.display = "none";
     display();
}

function fill(){
    var a = document.getElementById("form1");
    var b = document.getElementById("contactothers"); 
    var c = document.getElementById("about");   
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
}

function valide(){
    var a,b,c,d,e,f;
    a = document.getElementById('fname').value;
    b = document.getElementById('lname').value;
    c = document.getElementById('emailid').value;
    d = document.getElementById('phno').value;
    e = document.getElementById('state').value;
    f = document.getElementById('category').value;
    if(a == ""){
        alert(" Please fill the first Name field");
        return false;
    }
    else if((a.length <= 2) || (a.length > 20)) {
        alert("First Name length must be between 2 and 20");
        return false;
    }
    else if(!isNaN(a)){
        alert(" only characters are allowed");
        return false;
    }
    if(b == ""){
        alert("Please fill the Last Name field");
        return false;
    }
    else if((b.length <= 2) || (b.length > 20)) {
        alert("Last Name length must be between 2 and 20");
        return false;
    }
    else if(!isNaN(b)){
        alert("only characters are allowed");
        return false;
    }


    var at="@"
    var dot="."
    var lat=c.indexOf(at)
    var lstr=c.length
    var ldot=c.indexOf(dot)
    if(c == "")
    {
        alert("Please enter E-mail ID");
        return false;
    }
    if (c.indexOf(at)==-1){
        alert ("Invalid E-mail ID");
        return false;
    }
    else if (c.indexOf(at)==-1 || c.indexOf(at)==0 || c.indexOf(at)==lstr){
        alert ("Invalid E-mail ID");
        return false;
    }
    else if (c.indexOf(dot)==-1 || c.indexOf(dot)==0 || c.indexOf(dot)==lstr){
        alert ("Invalid E-mail ID");
        return false;
    }
    else if (c.indexOf(at,(lat+1))!=-1){
        alert ("Invalid E-mail ID");
        return false;
    }
    else if (c.substring(lat-1,lat)==dot || c.substring(lat+1,lat+2)==dot){
        alert ("Invalid E-mail ID");
        return false;
    }
    else if (c.indexOf(dot,(lat+2))==-1){
        alert ("Invalid E-mail ID");
        return false;
    }
    else if (c.indexOf(" ")!=-1){
        alert ("Invalid E-mail ID");
        return false;
    }

    if(d == ""){
        alert(" Please fill the Phone Number field");
        return false;
    }
    if(isNaN(d)){
        alert("User must write digits only not characters");
        return false;
    }
    if(d.length!=10){
        alert("Phone Number must be 10 digits only");
        return false;
    }
    else{
        alert("form submitted successully");
    }
           console.log("one");
           var o={fname: a, lname: b, email: c, phno: d, state_from: e, category: f};
           console.log(o);
            var f = JSON.stringify(o);
            console.log(f);
            console.log("yup1");
            insert(f);
            document.getElementById("register").reset();
    
}
function insert(f){
      let url = base_url + "?req=insert&obj=" + f;
      $.get(url,function(data,success){
      if(data == "Data inserted in database"){
        console.log("yup");
        alert("You registered as seller");
      }
      else{
        console.log("nope");
        alert("error occured. Not registered");
      }
      });
}


function display(){
    var p;
    let url = base_url + "?req=display";
              $.get(url,function(data,success){
                  console.log(data.length);
                  if(data.length == 0)
                  {
                      document.getElementById("mytable").innerHTML="<h3><div class='container text-center'>No registration till now.</div></h3>";
                  }
                  else{
                    p = "<table class='table table-hover'><thead> <tr><th>First Name</th> <th>Last Name</th> <th>Email id</th> <th>Contact Number</th> <th>State</th> <th>Category</th> </tr>"
                    for(i=0;i<data.length;i++)
                    {
                        p = p + "<tr><td>" + data[i].fname+ "</td><td>" + data[i].lname + "</td><td>" + data[i].email + "</td><td>" + data[i].phno + "</td><td>" + data[i].state_from + "</td><td>" + data[i].category + "</td><td>"  + "</td></tr>";
                    }
                    p = p + "</tbody></table>";
                    document.getElementById("op").innerHTML=p; 
                      }   
              });
  
  }
