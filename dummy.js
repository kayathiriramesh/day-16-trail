
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
request.send();
request.onload=function()
    {
         var res=JSON.parse(request.response);
        console.log(res);

    
function thtags(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }
function trtags(tagname){
    var ele=document.createElement(tagname);
    return ele;
}

var tables=document.createElement("table");
tables.setAttribute("class","table");
var theads=document.createElement("thead");
theads.setAttribute("class","thead-dark");
var tr1=trtags("tr");
var th1=thtags("th","scope","col","ID");
var th2=thtags("th","scope","col","NAME");
var th3=thtags("th","scope","col","MAIL");
tr1.append(th1,th2,th3);
theads.append(tr1);
tables.append(theads);
var tbodys=document.createElement("tbody");
var temp=[];
    for(var k=0;k<10;k++)
    {
    var buttons=document.createElement("button");
    buttons.innerHTML=k+1;
    temp.push(buttons);
    document.body.append(buttons);
    //buttons.addEventListener("click",prints);
    }
temp.forEach(prints(x));
    

prints(x=buttons.innerHTML)
{
    var res;
    for(var i=(x-1);i<10*(x);i++)
    {
   var tr2=trtags("tr") ;   
   var tds1=document.createElement("td");
   tds1.innerHTML=res[i].id;
   tr2.append(tds1);
   tbodys.append(tr2);
   var tds2=document.createElement("td");
   tds2.innerHTML=res[i].name;
   tr2.append(tds2);
   tbodys.append(tr2);
   var tds3=document.createElement("td");
   tds3.innerHTML=res[i].mail;
   tr2.append(tds3);
   tbodys.append(tr2);
   tables.append(tbodys);
    }        
}
document.body.append(tables);

    }    