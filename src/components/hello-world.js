function helloWorld() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello World!';
    element.classList.add('hello-world');

    return element;
}

export default helloWorld;
