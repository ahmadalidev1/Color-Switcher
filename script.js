    alert("Welcome To Color-switcher-project")


const body = document.querySelector("body")
const parent = document.querySelector(".mainparent")
const child = document.querySelector(".child")
const secchild = document.querySelector(".second-child")
const secParent = document.querySelector(".second-parent")
const gear = document.querySelector(".fa-gear")
const allBtnsdiv = document.querySelector(".all-btns")
const allbtn = document.querySelectorAll(".btn")


secchild.addEventListener("click", () => {

    const isclass = secParent.classList.contains("right")

    if(isclass){
        secParent.classList.remove("right")
        gear.style.animation = "none"
    }else{
        secParent.classList.add("right")
        gear.style.animation = "spin 2s linear infinite"
    }
})

allbtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
       const val = e.target.value
       console.log(val);
       body.style.background = val
       gear.style.color = val
       body.style.color = val
       child.style.color = val
    })
})

