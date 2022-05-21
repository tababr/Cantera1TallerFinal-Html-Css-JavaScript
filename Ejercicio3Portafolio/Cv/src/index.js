const main = () => {
    accordion();
    const color0 = document.getElementById("default");
    const color1 = document.getElementById("cian");
    const color2 = document.getElementById("salmon");
    const color3 = document.getElementById("mostaza");

    color0.addEventListener("click", themeDefault);
    color1.addEventListener("click", themeCian);
    color2.addEventListener("click", themeSalmon);
    color3.addEventListener("click", themeMostaza);
}

const themeDefault = () => {
    document.body.style.backgroundColor = "#cddff6";
    document.body.style.color = "#000";
    localStorage.setItem("Theme0", "themeDefault");
    localStorage.removeItem("Theme1");
    localStorage.removeItem("Theme2");
    localStorage.removeItem("Theme3");
}

const themeCian = () => {
    document.body.style.backgroundColor = "#52c0cb";
    document.body.style.color = "#F4F6F6";
    localStorage.setItem("Theme1", "themeCian");
    localStorage.removeItem("Theme0");
    localStorage.removeItem("Theme2");
    localStorage.removeItem("Theme3");

}

const themeSalmon = () => {
    document.body.style.backgroundColor = "#F1948A";
    document.body.style.color = "#FDFEFE";
    localStorage.setItem("Theme2", "themeSalmon");
    localStorage.removeItem("Theme0");
    localStorage.removeItem("Theme1");
    localStorage.removeItem("Theme3");
}

const themeMostaza = () => {
    document.body.style.backgroundColor = "#FFF59D";
    document.body.style.color = "#000";
    localStorage.setItem("Theme3", "themeMostaza");
    localStorage.removeItem("Theme0");
    localStorage.removeItem("Theme1");
    localStorage.removeItem("Theme2");
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("Theme0") === "themeDefault") {
        themeDefault();
    }

    if (localStorage.getItem("Theme1") === "themeCian") {
        themeCian();
    }

    if (localStorage.getItem("Theme2") === "themeSalmon") {
        themeSalmon();
    }

    if (localStorage.getItem("Theme3") === "themeMostaza") {
        themeMostaza();
    }
});

const accordion = () => {

    let btnItems = document.querySelectorAll(".item .btn-item");

    for (let i = 0; i < btnItems.length; i++) {
        btnItems[i].addEventListener("click", (e) => {
            let btn = e.target;

            if (btn.className == "btn-item active") {
                removeClase();
            } else {
                removeClase();
                btn.classList.add("active")
            }
        })
    }

    const removeClase = () => {
        for (let i = 0; i < btnItems.length; i++) {
            btnItems[i].classList.remove("active");
        }
    }
}


