var misCabeceras = new Headers();

var miInit = { 
               headers: misCabeceras,
               mode: 'no-cors' };

let formularioNuevaReparacion = document.getElementById('formularioNuevaReparacion');
let formularioActualizarReparacion = document.getElementById('formularioActualizarReparacion');
var tabla = document.getElementById('tablaDisplay');
$('#MenuButton2').click(function (e) {
	e.preventDefault();
	let datos = new FormData(formularioNuevaReparacion);
	if (datos.get('matricula') !== "" && datos.get('fecha') !== "" && datos.get('desrepara') !== "") {
		console.log(datos.get('fecha'));
		fetch('http://Taller-env.bx2b37ydhk.eu-west-1.elasticbeanstalk.com/api/reparaciones', {
				method: 'POST',
				body: datos,
				headers: misCabeceras,
               	mode: 'no-cors'
			})
			.then(res => res.json())
			.then(data => {
				crearBusca();
			});


	}


})

function actualizarReparacion(id) {

	let dates = new FormData(formularioActualizarReparacion);

	fetch('http://Taller-env.bx2b37ydhk.eu-west-1.elasticbeanstalk.com/api/reparaciones/' + id, {
			method: 'POST',
			body: dates,
			headers: misCabeceras,
            mode: 'no-cors'
		})
		.then(res => res.json())
		.then(data => {
			crearBusca();
		});
};

function guardarNuevaReparacion() {

	let datos = new FormData(formularioNuevaReparacion);
	if (datos.get('matricula') !== "" && datos.get('fecha') !== "" && datos.get('desrepara') !== "") {
		fetch('http://Taller-env.bx2b37ydhk.eu-west-1.elasticbeanstalk.com/api/reparaciones', {
				method: 'POST',
				body: datos,
				headers: misCabeceras,
               	mode: 'no-cors'
			})
			.then(res => res.json())
			.then(data => {
				crearBusca();
			});


	}


};

function borraFormulario() {
	let casillaMatricula = document.getElementById("matricula");
	let casillaFecha = document.getElementById("fecha");
	let casillaDesrepara = document.getElementById("desrepara");
	casillaMatricula.value = "";
	casillaFecha.value = "";
	casillaDesrepara.value = "";
}

function crearBusca() {
	let datos = new FormData(formularioNuevaReparacion);
	if (datos.get("matricula") !== '' && datos.get("fecha") !== '' && datos.get("desrepara") !== '') {
		buscaPorMatriculaFechaReparacion(datos);
	} else if (datos.get("matricula") !== '' && datos.get("fecha") !== '') {
		buscaPorMatriculaFecha(datos);
	} else if (datos.get("matricula") !== '' && datos.get("desrepara") !== '') {
		buscaPorMatriculaReparacion(datos);
	} else if (datos.get("fecha") !== '' && datos.get("desrepara") !== '') {
		buscaPorFechaReparacion(datos);
	} else if (datos.get("matricula") !== '') {
		buscaPorMatricula(datos);
	} else if (datos.get("fecha") !== '') {
		buscaPorFecha(datos);
	} else if (datos.get("desrepara") !== '') {
		buscaPorReparacion(datos);
	} else llamarTodas();
}

function buscaPorMatriculaFechaReparacion(datos) {

	fetch('http://Taller-env.bx2b37ydhk.eu-west-1.elasticbeanstalk.com/api/reparaciones/' + datos.get('matricula') + "/fecha/" + datos.get('fecha') +
			"/desrepara/" + datos.get('desrepara'), miInit)
		.then((response) => {
			return response.json();
		})
		.then((recurso) => {
			mostrarSalida(recurso);
		})
		.catch(function (error) {
			console.log('Hubo un problema con la petición Fetch:' + error.message);
		});;
}

function buscaPorMatriculaFecha(datos) {

	fetch('http://Taller-env.bx2b37ydhk.eu-west-1.elasticbeanstalk.com/api/reparaciones/' + datos.get('matricula') + "/fecha/" + datos.get('fecha'), miInit)
		.then((response) => {
			return response.json();
		})
		.then((recurso) => {
			mostrarSalida(recurso);
		})
		.catch(function (error) {
			console.log('Hubo un problema con la petición Fetch:' + error.message);
		});;
}

function buscaPorMatriculaReparacion(datos) {

	fetch('http://Taller-env.bx2b37ydhk.eu-west-1.elasticbeanstalk.com/api/reparaciones/' + datos.get('matricula') + "/desrepara/" + datos.get(
			'desrepara'), miInit)
		.then((response) => {
			return response.json();
		})
		.then((recurso) => {
			mostrarSalida(recurso);
		})
		.catch(function (error) {
			console.log('Hubo un problema con la petición Fetch:' + error.message);
		});;
}

function buscaPorFechaReparacion(datos) {

	fetch('http://Taller-env.bx2b37ydhk.eu-west-1.elasticbeanstalk.com/api/reparaciones/fecha/' + datos.get('fecha') + "/desrepara/" + datos.get(
			'desrepara'), miInit)
		.then((response) => {
			return response.json();
		})
		.then((recurso) => {
			mostrarSalida(recurso);
		})
		.catch(function (error) {
			console.log('Hubo un problema con la petición Fetch:' + error.message);
		});;
}

function buscaPorMatricula(datos) {

	fetch('http://Taller-env.bx2b37ydhk.eu-west-1.elasticbeanstalk.com/api/reparaciones/' + datos.get('matricula'), miInit)
		.then((response) => {
			return response.json();
		})
		.then((recurso) => {
			mostrarSalida(recurso);
		});
}

function buscaPorFecha(datos) {

	fetch('http://Taller-env.bx2b37ydhk.eu-west-1.elasticbeanstalk.com/api/reparaciones/fecha/' + datos.get('fecha') , miInit)
		.then((response) => {
			return response.json();
		})
		.then((recurso) => {
			mostrarSalida(recurso);
		});
}

function buscaPorReparacion(datos) {

	fetch('http://Taller-env.bx2b37ydhk.eu-west-1.elasticbeanstalk.com/api/reparaciones/desrepara/' + datos.get('desrepara'), miInit)
		.then((response) => {
			return response.json();
		})
		.then((recurso) => {
			mostrarSalida(recurso);
		});
}

function llamarTodas() {
	fetch('http://Taller-env.bx2b37ydhk.eu-west-1.elasticbeanstalk.com/api/reparaciones')
		.then((response) => {
			return response.json();
		})
		.then((recurso) => {
			mostrarSalida(recurso);
		});
};

function borrarReparacion(data) {

	fetch('http://Taller-env.bx2b37ydhk.eu-west-1.elasticbeanstalk.com/api/reparaciones/delete/' + data, miInit)
		.then((response) => {
			return response.json();
		})
		.then((recurso) => {
			crearBusca();
		});
}

function modalActualizarReparacion(id, matricula, fecha, desrepara) {
	let modalId = document.getElementById('modalId');
	let modalMatricula = document.getElementById('modalMatricula');
	let modalFecha = document.getElementById('modalFecha');
	let modalDesrepara = document.getElementById('modalDesrepara');

	modalId.value = id;
	modalMatricula.value = matricula;
	modalFecha.value = fecha;
	modalDesrepara.value = desrepara;
}

function borraTabla() {
	let contenido = document.getElementById('todas');
	contenido.innerHTML = "";
}

function paginar(count) {
	$('#nav').remove();
	$('#navfooter').remove();
	$('#tablaDisplay').before('<div id="nav"></div>');

	var rowsShown = 7;
	var rowsTotal = count;
	var numPages = rowsTotal / rowsShown;
	$('#nav').append('<a href="#" rel="0"> << </a> ');
	$('#tablaDisplay').after('<div id="navfooter">Pagina 1 de ' + Math.ceil(numPages) + '</div>');

	for (i = 0; i < numPages; i++) {
		var pageNum = i + 1;
		$('#nav').append('<a href="#" rel="' + i + '">' + pageNum + '</a> ');
	}

	$('#nav').append('<a href="#" rel="' + Math.ceil(numPages - 1) + '"> >> </a> ')

	$('#tablaDisplay tbody tr').hide();
	$('#tablaDisplay tbody tr').slice(0, rowsShown).show();


	$('#nav a').bind('click', function () {

		$('#nav a').removeClass('h5');

		$(this).addClass('h5');
		var currPage = $(this).attr('rel');

		var startItem = currPage * rowsShown;
		var endItem = startItem + rowsShown;
		var actual = parseInt(currPage)+1;
		$('#tablaDisplay tbody tr').css('opacity', '1').hide().slice(startItem, endItem).
		css('display', 'table-row');
		$('#navfooter').remove();
		$('#tablaDisplay').after('<div id="navfooter">Pagina ' + actual +' de ' + Math.ceil(numPages) + '</div>');

	});


}




function mostrarSalida(data) {
	let contenido = document.getElementById('todas');
	var count = Object.keys(data).length;
	contenido.innerHTML = "";

	data.forEach(reparacion => {
		var rowTemplate = `
                <tr>
                    <td>
                        ${reparacion.matricula}
                    </td>
                    <td>
                        ${reparacion.fecha.toLocaleString()}
                    </td>
                    <td >
                        ${reparacion.desrepara}
                    </td>
                    <td>
                    <i class="fas fa-backspace text-danger" onclick="borrarReparacion(${reparacion.id})"></i>
                    <i class="fas fa-pen-fancy" onclick="modalActualizarReparacion('${reparacion.id}','${reparacion.matricula}','${reparacion.fecha}','${reparacion.desrepara}')" data-toggle="modal" data-target="#exampleModal"></i></td>
                </tr>
                `
		contenido.innerHTML += rowTemplate;

	});
	paginar(count);

}
