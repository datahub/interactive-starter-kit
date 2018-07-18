import loremIpsum from '../static/lorem-ipsum.json';

function helloWorld(id) {
    const root = document.getElementById(id);

    root.innerHTML = `
        <section>
            <h1>Hello World!</h1>
            <p>
                ${loremIpsum.text}
            </p>
        </section>
    `;
}

export default helloWorld;
