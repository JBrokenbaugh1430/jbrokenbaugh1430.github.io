const Button = document.getElementById("PloobieButton")
function ShowPloobie(){

    const Ploobie = document.getElementById("PloobieImg")
    Ploobie.src = "https://raw.githubusercontent.com/JBrokenbaugh1430/sharing/refs/heads/main/ploobie.png"
    Ploobie.width = 755
    Ploobie.height = 743

    setTimeout(() => {
        
        Ploobie.width = 0
    Ploobie.height = 0
    }, 500);
}   

Button.onclick = ShowPloobie