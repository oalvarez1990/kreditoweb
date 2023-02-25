const btnGuardar = document.getElementById("btnguardar");
btnGuardar.addEventListener("click", guardarCliente);

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
  const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  const clientesTabla = document.getElementById("clientes-tabla");

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

    const celdaEstado = fila.insertCell();
    celdaEstado.innerHTML = cliente.estado;

    const celdaCupoTotal = fila.insertCell();
    celdaCupoTotal.innerHTML = cliente.cupoTotal;
  });
}
