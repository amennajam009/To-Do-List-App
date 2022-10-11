let btn=document.querySelector('.btn')

btn.addEventListener('click',()=>{
  let title=document.querySelector('.title').value;
  let work=document.querySelector('.work').value;
  let createlist=document.querySelector('. NotesContainer');
   
  if(title===''|| work===''){
    alert('Stupid Fill something');
  }

  let div=document.createElement('.div')
   div.classList.add('col-md-4')
  div.innerHTML=`
  <h3>${title}</h3>  
  <ul>
  <li>${work}</li>
  <li>${work}</li>
  <li>${work}</li>
  <li>${work}</li>
  <li>${work}</li>
  <li>${work}</li>
  <li>${work}</li>
  <li>${work}</li>
  <li>${work}</li>
  
  </ul> 
  <button type = "button" class = "btn del" id = "delete-all-btn">
 <span><i class = "fas fa-trash"></i></span>
 Delete All
</button>   `
})