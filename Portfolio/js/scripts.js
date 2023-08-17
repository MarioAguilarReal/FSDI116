const menuToggle = () => {

    let menu = document.getElementById('nav-mobile');

    if(menu.className.includes("hidden")) {
        menu.classList.remove("hidden")
    }else{
        menu.classList.add('hidden');
    }
}

//Heuristic Usability #3 User control and freedom
const cleaForm = () =>{
    document.getElementById("emailForm").reset();
}
