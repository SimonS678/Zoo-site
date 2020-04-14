const inputpasswort = document.querySelector('#passwort');
const button = document.querySelector('#button');
const output = document.querySelector('#output');
const inputbenutzername = document.querySelector('#benutzername')

function setpasswort() {
    const passwort = inputpasswort.value;
    const benutzername = inputbenutzername.value;

    if (passwort == 'RoterKeks' && benutzername == 'Simon') {
        output.innerHTML = 'Benutzername und Passwort korrekt';
    } else {
        output.innerHTML = 'Benutzername oder Passwort falsch';
    }
}

button.addEventListener('click', setpasswort);