let dental = [
    'dental',
    {
        hora: '8:30',
        especialista: 'Andrea Zúñiga',
        paciente: 'Marcela Retamal',
        rut: '11123425-6',
        prevision: 'ISAPRE'
    }, {
        hora: '11:00',
        especialista: 'Maria Pia Zañartu',
        paciente: 'Angel Muñoz',
        rut: '9878789-2',
        prevision: 'ISAPRE'
    }, {
        hora: '11:30',
        especialista: 'Scarlett Witting',
        paciente: 'Mario Kast',
        rut: '7998789-5',
        prevision: 'FONASA'
    }, {
        hora: '13:00',
        especialista: 'Francisco Von Teuber',
        paciente: 'Karin Fernandez',
        rut: '18887662-K',
        prevision: 'FONASA'
    }, {
        hora: '13:30',
        especialista: 'Eduardo Viñuela',
        paciente: 'Hugo Sanchez',
        rut: '17665461-4',
        prevision: 'FONASA'
    }, {
        hora: '14:00',
        especialista: 'Raquel Villaseca',
        paciente: 'Ana Sepulveda',
        rut: '14441281-0',
        prevision: 'ISAPRE'
    }
];

let radiologia = [
    'radiologia',
    {
        hora: '11:00',
        especialista: 'Ignacio Schulz',
        paciente: 'Francisa Rojas',
        rut: '9878782-1',
        prevision: 'FONASA'
    }, {
        hora: '11:30',
        especialista: 'Federico Subercaseaux',
        paciente: 'Pamela Estrada',
        rut: '15345241-3',
        prevision: 'ISAPRE'
    }, {
        hora: '15:00',
        especialista: 'Fernando Wurthz',
        paciente: 'Armando Luna',
        rut: '16445345-9',
        prevision: 'ISAPRE'
    }, {
        hora: '15:30',
        especialista: 'Ana Maria Godoy',
        paciente: 'Manuel Godoy',
        rut: '17666419-0',
        prevision: 'FONASA'
    }, {
        hora: '16:00',
        especialista: 'Patricia Suazo',
        paciente: 'Ramon Ulloa',
        rut: '14989389-K',
        prevision: 'FONASA'
    }
];

let traumatologia = [
    'traumatologia',
    {
        hora: '8:00',
        especialista: 'Maria Paz Altuzarra',
        paciente: 'Paula Sanchez',
        rut: '15554774-4',
        prevision: 'FONASA'
    }, {
        hora: '10:00',
        especialista: 'Raul Araya',
        paciente: 'Angélica Navas',
        rut: '15444147-9',
        prevision: 'ISAPRE'
    }, {
        hora: '10:30',
        especialista: 'Maria Arriagada',
        paciente: 'Ana Klapp',
        rut: '17879423-9',
        prevision: 'ISAPRE'
    }, {
        hora: '11:00',
        especialista: 'Alejandro Badilla',
        paciente: 'Felipe Mardones',
        rut: '1547423-6',
        prevision: 'ISAPRE'
    }, {
        hora: '11:30',
        especialista: 'Cecilia Budnik',
        paciente: 'Diego Marre',
        rut: '16554741-K',
        prevision: 'FONASA'
    }, {
        hora: '12:00',
        especialista: 'Arturo Cavagnaro',
        paciente: 'Cecilia Mendez',
        rut: '9747535-8',
        prevision: 'ISAPRE'
    }, {
        hora: '12:30',
        especialista: 'Andres Kanacri',
        paciente: 'Marcial Suazo',
        rut: '11254785-5',
        prevision: 'ISAPRE'
    }
];

/* La funcion trabaja correctamente,
 * solo falta conectar un listener en el elemento li o a,
 * para completar los campos al clickear en el elemento.
 */

let vistaActual = traumatologia;
document.querySelector('#especialidad').textContent = vistaActual[0];
document.querySelector('#first-last').textContent = `Primera atención: ${vistaActual[1].paciente} - ${vistaActual[1].prevision}  |  Última atención: ${vistaActual[vistaActual.length - 1].paciente}  ${vistaActual[vistaActual.length - 1].prevision}`;
for (j = 1; j < 8; j++) {
    if (j > vistaActual.length - 1) {
        document.querySelector(`#fila-${j}`).innerHTML = `
        <th scope="row">${j}</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>`;
    } else {
        document.querySelector(`#fila-${j}`).innerHTML = `
        <th scope="row">${j}</th>
        <td>${vistaActual[j].hora}</td>
        <td>${vistaActual[j].especialista}</td>
        <td>${vistaActual[j].paciente}</td>
        <td>${vistaActual[j].rut}</td>
        <td>${vistaActual[j].prevision}</td>`;
    }
}