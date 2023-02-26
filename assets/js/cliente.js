const btnGuardar = document.getElementById("guardar");
console.log("escuchando");
btnGuardar.addEventListener("click", guardarCliente);

// Cargar datos al iniciar la página
mostrarClientes();

function guardarCliente() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const nitcc = document.getElementById("nitcc").value;
  const direccion = document.getElementById("direccion").value;
  const ciudad = document.getElementById("ciudad").value;
  const telefono = document.getElementById("telefono").value;
  const estado = document.getElementById("estado").value;
  const cupoTotal = document.getElementById("cupoTotal").value;

  // Validar campos obligatorios
  if (
    !nombre ||
    !apellido ||
    !nitcc ||
    !direccion ||
    !ciudad ||
    !telefono ||
    !estado ||
    !cupoTotal
  ) {
    alert("Por favor, complete todos los campos obligatorios");
    return;
  }

  const cliente = {
    nombre,
    apellido,
    nitcc,
    direccion,
    ciudad,
    telefono,
    estado,
    cupoTotal,
  };

  let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  clientes.push(cliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));

  mostrarClientes();
}

function mostrarClientes() {
  let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  const clientesTabla = document.getElementById("Tclientes");

  // Limpiar tabla antes de mostrar datos actualizados
  clientesTabla.innerHTML = "";

  clientes.forEach((cliente, indice) => {
    const fila = clientesTabla.insertRow();

    const celdaNumero = fila.insertCell();
    celdaNumero.innerHTML = indice + 1;

    const celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = cliente.nombre;

    const celdaApellido = fila.insertCell();
    celdaApellido.innerHTML = cliente.apellido;

    const celdaNitCc = fila.insertCell();
    celdaNitCc.innerHTML = cliente.nitcc;

    const celdaDireccion = fila.insertCell();
    celdaDireccion.innerHTML = cliente.direccion;

    const celdaCiudad = fila.insertCell();
    celdaCiudad.innerHTML = cliente.ciudad;

    const celdaTelefono = fila.insertCell();
    celdaTelefono.innerHTML = cliente.telefono;

    const celdaCupoTotal = fila.insertCell();
    celdaCupoTotal.innerHTML = cliente.cupoTotal;

    const celdaEstado = fila.insertCell();
    celdaEstado.innerHTML = cliente.estado;

    const celdaAcciones = fila.insertCell();
    celdaAcciones.innerHTML = `
    <button class="btn btn-warning btnEditar" onclick="editarCliente(clientes, ${indice})" data-indice="${indice}">Editar</button>
        <button class="btn btn-danger" onclick="eliminarCliente(${indice})">Eliminar</button>                
    `;
  });
}
function editarCliente(clientes, indice) {
  // Obtener el cliente a editar por su índice
  const cliente = clientes[indice];

  // Obtener los campos del modal de edición por su ID
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const nitcc = document.getElementById("nitcc");
  const direccion = document.getElementById("direccion");
  const ciudad = document.getElementById("ciudad");
  const telefono = document.getElementById("telefono");
  const estado = document.getElementById("estado");
  const cupoTotal = document.getElementById("cupoTotal");
  const cupoDisponible = document.getElementById("cupoDisponible");
  const diasGracia = document.getElementById("diasGracia");

  // Establecer los valores de los campos del modal de edición
  nombre.value = cliente.nombre;
  apellido.value = cliente.apellido;
  nitcc.value = cliente.nitcc;
  direccion.value = cliente.direccion;
  ciudad.value = cliente.ciudad;
  telefono.value = cliente.telefono;
  estado.value = cliente.estado;
  cupoTotal.value = cliente.cupoTotal;
  cupoDisponible.value = cliente.cupoDisponible;
  diasGracia.value = cliente.diasGracia;

  // Mostrar el modal de edición
  $("#exampleModal").modal("show");

  // Actualizar el objeto cliente con los nuevos valores
  const guardarCliente = document.getElementById("guardarCliente");
  guardarCliente.onclick = function () {
    cliente.nombre = nombre.value;
    cliente.apellido = apellido.value;
    cliente.nitcc = nitcc.value;
    cliente.direccion = direccion.value;
    cliente.ciudad = ciudad.value;
    cliente.telefono = telefono.value;
    cliente.estado = estado.value;
    cliente.cupoTotal = cupoTotal.value;
    cliente.cupoDisponible = cupoDisponible.value;
    cliente.diasGracia = diasGracia.value;

    // Guardar el arreglo de clientes actualizado en el localStorage
    localStorage.setItem("clientes", JSON.stringify(clientes));

    // Actualizar la tabla de clientes mostrada en pantalla
    mostrarClientes();
  };
}

function eliminarCliente(indice) {
  // Obtener el arreglo de clientes del localStorage
  let clientes = JSON.parse(localStorage.getItem("clientes"));

  // Encontrar el cliente correspondiente en el arreglo de clientes y eliminarlo
  clientes.splice(indice, 1);

  // Guardar el arreglo de clientes actualizado en el localStorage
  localStorage.setItem("clientes", JSON.stringify(clientes));

  // Actualizar la tabla de clientes mostrada en pantalla
  mostrarClientes();
}

function buscarClientes() {
  const inputBusqueda = document.getElementById("busqueda");
  const filtro = inputBusqueda.value.toUpperCase();

  // Obtener el arreglo de clientes desde el localStorage
  const clientes = JSON.parse(localStorage.getItem("clientes"));

  // Filtrar los clientes que coincidan con la búsqueda
  const clientesFiltrados = clientes.filter(
    (cliente) =>
      cliente.nombre.toUpperCase().includes(filtro) ||
      cliente.nitcc.toUpperCase().includes(filtro)
  );

  // Mostrar los clientes filtrados en la tabla
  const tablaClientes = document.getElementById("Tclientes");
  let tablaClientesHTML = "";
    // Agregar cada cliente filtrado al contenido HTML de la tabla
    clientesFiltrados.forEach((cliente, indice) => {
        tablaClientesHTML += `
          <tr>
            <td>${cliente.nombre} ${cliente.apellido}</td>
            <td>${cliente.nitcc}</td>
            <td>${cliente.direccion}</td>
            <td>${cliente.telefono}</td>
            <td>${cliente.estado}</td>
            <td>${cliente.cupoTotal}</td>
            <td>${cliente.cupoDisponible}</td>
            <td>${cliente.diasGracia}</td>
            <td>
              <button class="btn btn-primary" onclick="editarCliente(clientes, ${indice})">Editar</button>
              <button class="btn btn-danger" onclick="eliminarCliente(${indice})">Eliminar</button>
            </td>
          </tr>
        `;
      });
    
      // Asignar el contenido HTML de la tabla a la propiedad innerHTML
      tablaClientes.innerHTML = tablaClientesHTML;
    
    
    
    
}
