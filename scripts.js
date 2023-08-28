const list = document.getElementById('list')
const trash = document.getElementById('trash')

list.addEventListener('dragstart', (e) => {
    const itemId = e.target.getAttribute('data-id');
    e.dataTransfer.setData('text/plain', itemId)
})

trash.addEventListener('dragover',(e) => {
    e.preventDefault();
    trash.classList.add("hovered")
})

trash.addEventListener("dragleave",(e) => {
    e.preventDefault();
    trash.classList.remove("hovered")
})

trash.addEventListener("drop", (e) => {
    e.preventDefault();
    trash.classList.remove('hovered');
    const itemId = e.dataTransfer.getData("text/plain");
    const listItemRemove = list.querySelector(`li [data-id]="${itemId}"`);

    if (listItemRemove) {
        list.removeChild(listItemRemove);
    }
})