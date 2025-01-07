function doStuff() {
    console.log("Halli Hallo");
    document.addEventListener("change", (e) => {
        e.preventDefault();
        console.log("Hallo?");
        const form = e.target;
        switch (form.id) {
            case "clickyClick":
                console.log("radio button clicked");
                break;
        }
    })
}

document.addEventListener("DOMContentLoaded", doStuff());