function doStuff() {
    document.addEventListener("change", (e) => {
        e.preventDefault();
        const form = e.target;
        switch (form.id) {
            case "clickyClick":
                console.log("radio button clicked");
                break;
        }
    })
}

document.addEventListener("DOMContentLoaded", doStuff());