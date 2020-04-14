const page404 = () => {

    const $root = document.getElementById("root");

    const $labelCollab = titleLogin.render(`404, page not found`)

    $root.insertAdjacentHTML('beforeend', $labelCollab)
};
