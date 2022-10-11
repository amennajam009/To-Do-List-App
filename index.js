let btn=document.querySelector('.btn')

btn.addEventListener('click',()=>{
    let title=document.querySelector('.title').value
    let work=document.querySelector('.work').value
    let createnotes=querySelector('.NotesContainer');
    if(title==='' || work===''){
        alert('Enter the Valid')
        return;
    }
})