Showuser()
// Add User to localstorage
let btnAdd=document.getElementById('btnAdd')
let btnEdit=document.getElementById('btnEdit')
let btnSearch=document.getElementById('btnSearch')
let nameuser=document.getElementById('name')
let loc=document.getElementById('loc')
let birth=document.getElementById('birth')
let email=document.getElementById('email')

btnAdd.addEventListener('click',function(){
    if(nameuser.value=='' || loc.value=='' || birth.value=='' || email.value==''){
        alert('Bạn hãy nhập đủ thông tin')
    }
    else{
    let listUser=localStorage.getItem('listUser')
    if(listUser== null){
        listUserObj=[];
    }
    else{
        listUserObj = JSON.parse(listUser)
    }
    let user = {
        name: nameuser.value,
        loc: loc.value,
        birth:birth.value,
        email:email.value
    }
    listUserObj.push(user)
    localStorage.setItem('listUser',JSON.stringify(listUserObj))
    nameuser.value=''
    loc.value=''
    birth.value=''
    email.value=''
    Showuser()
}
})
//end
//show data
function Showuser(){
    let listUser=localStorage.getItem('listUser')
    if(listUser==null){
        listUserObj=[]
    }
    else{
        listUserObj=JSON.parse(listUser)
    }
    let details='';
    listUserObj.forEach(function(element,index){
        details+=  `<tr>`;
        details+= `<th scope="row">${index}</th>`;
        details+= `<td>${element.name}</td>`;
        details+= `<td>${element.loc}</td>`;
        details+= `<td>${element.birth}</td>`;
        details+= `<td>${element.email}</td>`;
        details+= `<td><div class="bi bi-pencil-square btn btn-warning" id="${index}" onclick='show(this.id)'></div></td>`;
        details+= `<td><div class="bi bi-trash btn btn-danger" id="${index}" onclick='remove(this.id)'></div></td>`;
        details+= `</tr>`;
    })
    let table=document.getElementById('user_detail');
    if(listUserObj.length>0){
        table.innerHTML=details;
    }
    else{
        table.innerHTML='<h2>Empty Data</h2>';
    }
}
//end show data

//remove user
function remove(index){
    let listUser=localStorage.getItem('listUser')
    if(listUser == null){
        listUserObj=[]
    }
    else{
        listUserObj=JSON.parse(listUser)
    }
    listUserObj.splice(index,1);
    localStorage.setItem('listUser',JSON.stringify(listUserObj));
    Showuser()
}
//end remove

//show infomation to edit
function show(index){
    let listUser=localStorage.getItem('listUser')
    if(listUser == null){
        listUserObj=[]
    }
    else{
        listUserObj=JSON.parse(listUser)
    }
    nameuser.value=listUserObj[index]['name']
    loc.value=listUserObj[index]['loc']
    birth.value=listUserObj[index]['birth']
    email.value=listUserObj[index]['email']
    btnEdit.innerHTML=`<input type="button" class="btn btn-success" id="${index}" onclick='edit(this.id)' value="Edit">`
    btnEdit.style.display="initial"
    btnAdd.style.display="none"
}
//end show

//edit
function edit(index){
    let listUser=localStorage.getItem('listUser')
    if(listUser == null){
        listUserObj=[]
    }
    else{
        listUserObj=JSON.parse(listUser)
    }
    listUserObj[index]['name']=nameuser.value
    listUserObj[index]['loc']=loc.value
    listUserObj[index]['birth']=birth.value
    listUserObj[index]['email']=email.value
    localStorage.setItem('listUser',JSON.stringify(listUserObj));
    nameuser.value=''
    loc.value=''
    birth.value=''
    email.value=''
    btnEdit.style.display="none";
    btnAdd.style.display="initial"
    Showuser()
}
//end edit

//search
btnSearch.addEventListener('click',function(){
    let input= document.getElementById('inputSearch')
    if(input.value == '')
        alert('Bạn hãy nhập giá trị cần tìm kiếm')
    else{
        let list=document.getElementById('user_detail').getElementsByTagName('tr');
        for(let i=0;i<list.length;i++)
        {
            if(list[i].innerText.toLowerCase().search(input.value.toLowerCase()) > -1)
                list[i].style.display="visible"
            else
                list[i].style.display="none"
        }
    }
})
//end search