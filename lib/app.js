
        let formularioNuevaReparacion = document.getElementById('formularioNuevaReparacion');
        let formularioActualizarReparacion = document.getElementById('formularioActualizarReparacion');
        var tabla = document.getElementById('tablaDisplay');
        $('#MenuButton2').click(function(e){
            e.preventDefault();
            let datos = new FormData(formularioNuevaReparacion);
            if (datos.get('matricula')!=="" && datos.get('fecha')!=="" && datos.get('desrepara')!==""){
                console.log('aqui');
                fetch('http://localhost:8000/api/reparaciones', {
                    method: 'POST',
                    body: datos
                })
                .then(res => res.json())
                .then(data => {
                    crearBusca();
                });


            }


        })

        function actualizarReparacion(id) {

            let dates = new FormData(formularioActualizarReparacion);

            fetch('http://localhost:8000/api/reparaciones/' + id, {
                    method: 'POST',
                    body: dates
                })
                .then(res => res.json())
                .then(data => {
                    crearBusca();
                });
        };

        function guardarNuevaReparacion() {

            let datos = new FormData(formularioNuevaReparacion);
            if (datos.get('matricula')!=="" && datos.get('fecha')!=="" && datos.get('desrepara')!==""){
                fetch('http://localhost:8000/api/reparaciones', {
                    method: 'POST',
                    body: datos
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

            fetch('http://localhost:8000/api/reparaciones/' + datos.get('matricula') + "/fecha/" + datos.get('fecha') +
                    "/desrepara/" + datos.get('desrepara'))
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

            fetch('http://localhost:8000/api/reparaciones/' + datos.get('matricula') + "/fecha/" + datos.get('fecha'))
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

            fetch('http://localhost:8000/api/reparaciones/' + datos.get('matricula') + "/desrepara/" + datos.get(
                    'desrepara'))
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

            fetch('http://localhost:8000/api/reparaciones/fecha/' + datos.get('fecha') + "/desrepara/" + datos.get(
                    'desrepara'))
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

            fetch('http://localhost:8000/api/reparaciones/' + datos.get('matricula'))
                .then((response) => {
                    return response.json();
                })
                .then((recurso) => {
                    mostrarSalida(recurso);
                });
        }

        function buscaPorFecha(datos) {

            fetch('http://localhost:8000/api/reparaciones/fecha/' + datos.get('fecha'))
                .then((response) => {
                    return response.json();
                })
                .then((recurso) => {
                    mostrarSalida(recurso);
                });
        }

        function buscaPorReparacion(datos) {

            fetch('http://localhost:8000/api/reparaciones/desrepara/' + datos.get('desrepara'))
                .then((response) => {
                    return response.json();
                })
                .then((recurso) => {
                    mostrarSalida(recurso);
                });
        }

        function llamarTodas() {
            fetch('http://localhost:8000/api/reparaciones')
                .then((response) => {
                    return response.json();
                })
                .then((recurso) => {
                    mostrarSalida(recurso);
                });
        };

        function borrarReparacion(data) {

            fetch('http://localhost:8000/api/reparaciones/delete/' + data)
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
            $('#tablaDisplay').after('<div id="nav"></div>');
            var rowsShown = 7;
            var rowsTotal = count;
            var numPages = rowsTotal / rowsShown;
            for (i = 0; i < numPages; i++) {
                var pageNum = i + 1;
                $('#nav').append('<a href="#" rel="' + i + '">' + pageNum + '</a> ');
            }
            $('#tablaDisplay tbody tr').hide();
            $('#tablaDisplay tbody tr').slice(0, rowsShown).show();
            $('#nav a:first').addClass('active');
            $('#nav a').bind('click', function () {

                $('#nav a').removeClass('active');
                console.log($(this));
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                var startItem = currPage * rowsShown;
                var endItem = startItem + rowsShown;
                $('#tablaDisplay tbody tr').css('opacity', '1').hide().slice(startItem, endItem).
                css('display', 'table-row');
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
                        ${reparacion.fecha}
                    </td>
                    <td >
                        ${reparacion.desrepara}
                    </td>
                    <td>
                    <i class="fas fa-snowplow " onclick="borrarReparacion(${reparacion.id})"></i>
                    <i class="fas fa-pen-fancy" onclick="modalActualizarReparacion('${reparacion.id}','${reparacion.matricula}','${reparacion.fecha}','${reparacion.desrepara}')" data-toggle="modal" data-target="#exampleModal"></i></td>
                </tr>
                `
                contenido.innerHTML += rowTemplate;

            });
            paginar(count);

        }
    