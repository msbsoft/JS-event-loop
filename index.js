// Import stylesheets
import './style.css';
import $ from 'jquery'

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>
<p>
  <pre>
    const foo = fetch("https://www.google.com/search?q=foo");
    const bar = fetch("https://www.google.com/search?q=bar")
    const zut = fetch("https://www.google.com/search?q=zut")

    console.log(foo);
    console.log(bar);
    console.log(zut);
  </pre>
  <input type="button" id="btnRun" value="Run!"></input>
</p>
`;

const run = () => {
  const foo = $.ajax("https://www.google.com/search?q=foo", {async: false});
  const bar = $.ajax("https://www.google.com/search?q=bar", {async: false})
  const zut = $.ajax("https://www.google.com/search?q=zut", {async: false})

  console.log(foo);
  console.log(bar);
  console.log(zut);
}

document
  .querySelector('#btnRun')
  .addEventListener('click', run);