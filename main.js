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
                    <div class="custom-checkbox">
                        <img src="./assets-20250531T174048Z-1-001/assets/checked.svg" alt="imagem do check">
                    </div>
                    <label for="item-${index}">${item.name}</label>
                </div>

                <button onclick="removeItem('${item.name}')">
                    <img src="./assets-20250531T174048Z-1-001/assets/trash-icon.svg" alt="trash icon">
                </button>
            </div>
            
        `
    })
}

function removeItem(itemName){
    const itemIndex = items.findIndex((item)=> item.name === itemName)

    if(itemIndex !== -1){
        items.splice(itemIndex, 1)
    }

    showItemsList()
}