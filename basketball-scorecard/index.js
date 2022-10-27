const homePoints = document.getElementById("home-points")
const guestPoints = document.getElementById("guest-points")


function setHomePoints(value){
    homePoints.textContent = Number(homePoints.textContent) + value
    gameStatus()    
}

function setGuestPoints(value){
    guestPoints.textContent = Number(guestPoints.textContent) + value
    gameStatus()
}

function setReset(){
    homePoints.textContent = 0
    guestPoints.textContent = 0
    homePoints.className = "home-points-text"
    guestPoints.className = "guest-points-text"
}


function gameStatus(){
        if(Number(homePoints.textContent) > Number(guestPoints.textContent)){
            homePoints.className = 'lead'
            guestPoints.className = 'behind'
        }else if(Number(homePoints.textContent) === Number(guestPoints.textContent)){
            guestPoints.className = 'equal'
            homePoints.className = "equal"
        }else{
            guestPoints.className = "lead"
            homePoints.className = 'behind'
        }
}