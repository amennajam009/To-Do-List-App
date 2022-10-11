let btn=document.querySelector('.btn')

btn.addEventListener('click',()=>{
    let title=document.querySelector('.title').value
    let work=document.querySelector('.work').value
    let createnotes=querySelector('.NotesContainer');
    if(title==='' || work===''){
        alert('Enter the Valid')
        return;
    }

    let div=document.createElement('div')

    div.innerHTML= `
<div class="mb-3">
 <h3>${title}</h3>
 <textarea class="form-control text " placeholder="Enter Your Work" name="" id="" rows="7">${work}</textarea>
 <button type = "button" class = "btn del" id = "delete-all-btn">
 <span><i class = "fas fa-trash"></i></span>
 Delete All
</button> 
</div>
`



div.querySelector('.del')
div.addEventListener('click',()=>{
 div.remove()
})
CreateNotes.append(div)
  
  // console.log(work)

})