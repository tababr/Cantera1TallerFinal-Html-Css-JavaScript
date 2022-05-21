const main = () =>{
    changeTheme();
}

const changeTheme = () => {

    const elements = document.querySelectorAll(".fruit");
    const color = document.querySelector("#btn");

    color.addEventListener('click', () => {
        
        elements.forEach(element => {
            if(!element.classList.contains('even')){
                element.classList.add('even');
                element.classList.add('odd');
            }else if (element.classList.contains('even')){
                element.classList.remove('even');
                element.classList.remove('odd');
            }
        })
    })

}