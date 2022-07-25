//Slide
let previous=document.getElementById('btn-previous')
let next=document.getElementById('btn-next')
let row=document.getElementsByClassName('contain')
let a=0;
previous.addEventListener('click',function(){
    a+=517;
    for(let i=0;i<row.length;i++)
    {
        row[i].style.transform='translateX('+a+'px)';
    }
    if(a==0)
    {
        previous.style.display="none";
    }
    else if(next.style.display="none"){
        next.style.display="flex";
    }
})
next.addEventListener('click',function(){
    a-=517;
    for(let j=0;j<row.length;j++)
    {
        row[j].style.transform='translateX('+a+'px)';
    }
    if(a==-1034)
    {
        next.style.display="none";
    }
    else if(previous.style.display="none"){
        previous.style.display="flex";
    }
})
//End slide

//select filter
let filter=document.getElementsByClassName("filter1");
let labels=document.getElementsByClassName("filter");
let add= document.getElementsByClassName('add');
let icon=document.getElementsByClassName("hide");
for(let i=0;i<filter.length;i++)
{
    filter[i].addEventListener('click',function(){
    if(filter[i].style.background==""){
        filter[i].style.color="white";
        filter[i].style.background="rgb(29, 155, 240)";
        icon[i].innerHTML='<i class="bi bi-check-lg" style="color:white"></i>'
        add[i].style.display="none";
    }
    else if(filter[i].style.background=="rgb(29, 155, 240)")
    {
        filter[i].style.color="black";
        filter[i].style.background="";
        icon[i].innerHTML='<i class="bi bi-x-lg"></i>'
        add[i].style.display="flex";
    }
    })   
}
//



