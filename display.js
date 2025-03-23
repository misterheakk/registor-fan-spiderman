let mainBox = document.getElementById('main-box');
renderUserFromLocal();
function renderUserFromLocal() {
  mainBox.innerHTML = '';
    let lists = getUserFromLocalStorage();
    lists.forEach(function(item, index) {
        let newDataOfRow = document.createElement('div');
        newDataOfRow.classList.add('col-3')
        newDataOfRow.innerHTML = `
            <div class="col mt-4">
              <div class="card" style="width: 100%">
              <center>
              <img src="${item.profile}" style="width:250px;height:250px; object-fit:cover;
              border-radius: 50%;" class="card-img-top" alt="${item.profile}" />
              
                <div class="card-body">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-text">${item.email}</p>
                </div>
              </div>
              </center>
            </div>
        `;
        mainBox.appendChild(newDataOfRow);
    });
}
function getUserFromLocalStorage() {
    let storedUsers = localStorage.getItem('UserLists');
    return storedUsers ? JSON.parse(storedUsers) : [];
}