const items = []

function addItem(){
    const itemName = document.querySelector("#item").value

    const item = {
        name: itemName,
        checked: false
    }

    items.push(item)

    document.querySelector("#item").value = ""

    showItemsList()
}

function showItemsList (){
    const sectionList = document.querySelector(".list")
    sectionList.textContent =""

    items.map((item, index) => {
        sectionList.innerHTML += `
         <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-${index}">
                    <div class="custom-checkbox" onclick="checkItem('${item.name}')">
                        <img src="./assets-20250531T174048Z-1-001/assets/checked.svg" alt="imagem do check">
                    </div>
                    <label for="item-${index}" onclick="checkItem('${item.name}')">${item.name}</label>
                </div>

                <button onclick="removeItem('${item.name}')">
                    <img src="./assets-20250531T174048Z-1-001/assets/trash-icon.svg" alt="trash icon">
                </button>
            </div>
            
        `
    })
}

function removeItem(itemName){7
    const itemIndex = items.findIndex((item)=> item.name === itemName)
    const divWarning = document.querySelector(".warning") 

    divWarning.classList.remove("hide-warning")

    setTimeout(() => {
        divWarning.classList.add("hide-warning")
    }, 4000)

    if(itemIndex !== -1){
        items.splice(itemIndex, 1)
    }

    showItemsList()
}

function checkItem (itemName){
    const item = items.find((item) => item.name === itemName)
    
    /* if(item.checked === true) {
        item.checked = false
    } else {
        item.checked = true
    }*/

   // item.checked === true ? item.checked = false : item.checked = true

    item.checked = !item.checked
    showItemsList()
}