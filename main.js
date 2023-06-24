// Target elements...
const add = document.querySelector(".add");
const edit = document.querySelector(".edit");
const deleteFile = document.querySelector(".delete");
const personName = document.querySelector("#nameid");
const email = document.querySelector("#emailid");
const age = document.querySelector("#ageid");
const contect = document.querySelector("#contectid");
const box = document.querySelector('.box');
const storeBox = document.querySelector('.storeBox');

// Events...
add.addEventListener("click", addDetailes);
// edit.addEventListener('click', editDetailes);
// deleteFile.addEventListener('click', deleteDetailes);

// function for add details........
// function for add details........



let storeData = JSON.parse(localStorage.getItem('userList')) ?  JSON.parse(localStorage.getItem('userList')) : []
function addDetailes(e) {
  e.preventDefault();

  Uname = personName.value;
  Uemail = email.value;
  Uage = age.value;
  Ucontect = contect.value;
  if (!personName.value || !email.value || !age.value || !contect.value) {
    // write code for show a popup message ...
    showAlert('Please fill all details...', 'danger')
  } else {
   
      let userData ={
        'name':Uname,
        'email':Uemail,
        'age':Uage,
        'contect':Ucontect,

       
      }

      let newUser = storeData.some(el => el.email === userData.email)
      
      if(newUser){
        showAlert('User Exist 🤦‍♀️', 'danger')
      } else{

        let box = document.createElement('tr');
        box.classList.add('box')
        box.innerHTML = `
            <td class="name">${personName.value}</td>
            <td class="age">${age.value}</td>
            <td class="email">${email.value}</td>
            <td class="contectNum">${contect.value}</td>
            <td class="edit btn">Edit</td>
            <td class="delete btn" >Delete</td>
            `;
            storeBox.appendChild(box);
            showAlert('Details Added 🤞', 'sucess')
    
          
    

        storeData.push(userData)
      }
        
      let storUser = JSON.stringify(storeData);
      localStorage.setItem('userList', storUser)

      // personName.value = '';
      // email.value= '';
      // age.value = '';
      // contect.value = '';
  }
}




function editDetailes(){
  console.log('edit sucessfull...')
}

// function for delete details...
function deleteDetailes(e){
  if(deleteFile.classList.contains('delete')){
    console.log(1)
  }
  deleteFile.parentElement.remove();
  
}

//show alert when something happend...
function showAlert(message, className){
  const container = document.querySelector('.container');
  const formbox = document.querySelector('.formbox');
    let div = document.createElement('div');
    div.classList.add('alert');
    div.classList.add(`alert-${className}`)
  div.innerText = `${message}`
  container.insertBefore(div, formbox)

  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);
}