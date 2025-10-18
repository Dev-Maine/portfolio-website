


const theme = document.querySelectorAll(`#theme`);
const themeText = document.querySelectorAll(`#theme-text`);
const themeIcon = document.querySelectorAll(`#theme-icon`);
const header = document.querySelector(`.header`);

window.addEventListener(`scroll`,() => {
    if(window.scrollY >= 20) {
        header.classList.add(`header-float`);
        
        
    } else {
         header.classList.remove(`header-float`);
         
    }
})

window.addEventListener(`scroll`,() => {
    const scrollBtn = document.querySelector(`#scroll-up`)

    if(window.scrollY > 300) {
        scrollBtn.style.display = `flex`
    } else {
        scrollBtn.style.display = `none`
    }
})


if(localStorage.getItem(`theme`) === `dark`){
        document.body.classList.add(`dark-theme`)
        for(i of themeIcon) {
            if(document.body.classList.contains(`dark-theme`)){
            i.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#020202ff"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q10 0 20.5.67 10.5.66 24.17 2-37.67 31-59.17 77.83T444-660q0 90 63 153t153 63q53 0 99.67-20.5 46.66-20.5 77.66-56.17 1.34 12.34 2 21.84.67 9.5.67 18.83 0 150-105 255T480-120Zm0-66.67q102 0 179.33-61.16Q736.67-309 760.67-395.67q-23.34 9-49.11 13.67-25.78 4.67-51.56 4.67-117.46 0-200.06-82.61-82.61-82.6-82.61-200.06 0-22.67 4.34-47.67 4.33-25 14.66-55-91.33 28.67-150.5 107-59.16 78.34-59.16 175.67 0 122 85.66 207.67Q358-186.67 480-186.67Zm-6-288Z"/></svg>`
            } else {
                i.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#F19E39"><path d="M446.67-766.67V-920h66.66v153.33h-66.66ZM706-659.33l-46.33-46.34 108-109.66 46.66 47.66L706-659.33Zm60.67 212.66v-66.66H920v66.66H766.67ZM446.67-40v-153.33h66.66V-40h-66.66ZM253.33-660.67l-108-107 47-46.66L300.67-706l-47.34 45.33ZM768-145.33l-108.33-109L705-299.67l110 106-47 48.34ZM40-446.67v-66.66h153.33v66.66H40Zm153 301.34-47.33-47L253-299.67l24.33 22.34L301.67-254 193-145.33ZM480-240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-66.67q72 0 122.67-50.66Q653.33-408 653.33-480t-50.66-122.67Q552-653.33 480-653.33t-122.67 50.66Q306.67-552 306.67-480t50.66 122.67Q408-306.67 480-306.67ZM480-480Z"/></svg>`
            }
        }
        } 

 

 for (i of theme) {
    i.addEventListener(`click`, function () {
       document.body.classList.toggle(`dark-theme`)
       for(icon of themeIcon) {
            if(document.body.classList.contains(`dark-theme`)){
            icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#060606ff"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q10 0 20.5.67 10.5.66 24.17 2-37.67 31-59.17 77.83T444-660q0 90 63 153t153 63q53 0 99.67-20.5 46.66-20.5 77.66-56.17 1.34 12.34 2 21.84.67 9.5.67 18.83 0 150-105 255T480-120Zm0-66.67q102 0 179.33-61.16Q736.67-309 760.67-395.67q-23.34 9-49.11 13.67-25.78 4.67-51.56 4.67-117.46 0-200.06-82.61-82.61-82.6-82.61-200.06 0-22.67 4.34-47.67 4.33-25 14.66-55-91.33 28.67-150.5 107-59.16 78.34-59.16 175.67 0 122 85.66 207.67Q358-186.67 480-186.67Zm-6-288Z"/></svg>`
            } else {
                icon.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#F19E39"><path d="M446.67-766.67V-920h66.66v153.33h-66.66ZM706-659.33l-46.33-46.34 108-109.66 46.66 47.66L706-659.33Zm60.67 212.66v-66.66H920v66.66H766.67ZM446.67-40v-153.33h66.66V-40h-66.66ZM253.33-660.67l-108-107 47-46.66L300.67-706l-47.34 45.33ZM768-145.33l-108.33-109L705-299.67l110 106-47 48.34ZM40-446.67v-66.66h153.33v66.66H40Zm153 301.34-47.33-47L253-299.67l24.33 22.34L301.67-254 193-145.33ZM480-240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-66.67q72 0 122.67-50.66Q653.33-408 653.33-480t-50.66-122.67Q552-653.33 480-653.33t-122.67 50.66Q306.67-552 306.67-480t50.66 122.67Q408-306.67 480-306.67ZM480-480Z"/></svg>`
            }
        }
        
        if(document.body.classList.contains(`dark-theme`)) {
            localStorage.setItem(`theme`,`dark`);
            
        }else {
            localStorage.setItem(`theme`,`light`);
        }


  } )}



const sidebar = document.querySelector(`.sidebar`);
const opensidebar = document.querySelector(`#opensidebar`);
const closesidebar = document.querySelector(`#closesidebar`);

opensidebar.addEventListener(`click`, 
    function  () {
    sidebar.style.display = `flex`
})

closesidebar.addEventListener(`click`,
    function  () {
    sidebar.style.display = `none`
} )
const nameError = document.querySelector(`#name-error`);
const emailError = document.querySelector(`#email-error`);

function validatename () {
       const name = document.querySelector(`#name`).value;

       if(name.length == 0 ) {
        nameError.innerHTML = `name required`
        return false;
       } else if (!name.match(/^[A-Za-z]{3,40}[\s]{1}[A-Za-z]{3,30}/)) {
                nameError.innerHTML = `enter full name `
                return false
       } else {
                nameError.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#7d5edcff"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>`
                return true;
       }

}

function validateemail () {
       const email = document.querySelector(`#email`).value;

       if(email.length == 0 ) {
               emailError.innerHTML = `email required`
        return false;

       } else if (!email.match(/^[A-Za-z0-9]{3,50}[\@]{1}[A-Za-z]{3,10}[\.][A-Za-z]{2,3}/)) {
                emailError.innerHTML = `enter valid email `
        return false

       } else {
                emailError.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#7d5edcff"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>`
        return true;
       }

}

     




