const chatBox = document.querySelector('.chatBox');
const roundVisible = document.querySelector(".roundVisible")
const crossSign = document.querySelector(".crossSign")


roundVisible.addEventListener("click", () => {
    chatBox.classList.toggle("show")
    roundVisible.classList.toggle("show")
})

crossSign.addEventListener("click", () => {
    chatBox.classList.toggle("show")
    roundVisible.classList.toggle("show")
})