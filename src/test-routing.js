
const push = (event) => {
    event.preventDefault();

    const { target: { id } } = event;

    const url = event.target.getAttribute("href");

    window.history.pushState({ id }, "", url);
}

