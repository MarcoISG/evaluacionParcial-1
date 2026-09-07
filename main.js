/**
 * Ferretería Los Maestros - Sistema Web y Tienda Online
 * Asignatura: DSY1104 - Desarrollo Fullstack II
 * Evaluación Parcial N° 1
 */

// ==========================================
// 1. CATÁLOGO BASE DE PRODUCTOS (Desde Excel Forma E)
// ==========================================
const PRODUCTOS_INICIALES = [
    {
        codigo: "MC001",
        categoria: "Mat. Construcción",
        subcategoria: "Cementos",
        nombre: "Cemento Polpaico gris 25 kg",
        marca: "Polpaico",
        unidad: "Saco",
        precio: 5990,
        stock: 80,
        stockCritico: 20,
        descripcion: "Cemento tradicional de alta resistencia para todo tipo de obras de construcción y albañilería.",
        imagen: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80"
    },
    {
        codigo: "MC002",
        categoria: "Mat. Construcción",
        subcategoria: "Cementos",
        nombre: "Cemento Melón blanco 25 kg",
        marca: "Melón",
        unidad: "Saco",
        precio: 7490,
        stock: 40,
        stockCritico: 10,
        descripcion: "Cemento blanco estructural ideal para terminaciones estéticas, estucos finos y prefabricados.",
        imagen: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=600&auto=format&fit=crop&q=80"
    },
    {
        codigo: "MC003",
        categoria: "Mat. Construcción",
        subcategoria: "Morteros",
        nombre: "Mortero cola cerámica 25 kg",
        marca: "Volcán",
        unidad: "Saco",
        precio: 5200,
        stock: 50,
        stockCritico: 15,
        descripcion: "Adhesivo en polvo de base cementicia formulado para la instalación de revestimientos cerámicos.",
        imagen: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80"
    },
    {
        codigo: "MC007",
        categoria: "Mat. Construcción",
        subcategoria: "Ladrillos",
        nombre: "Ladrillo fiscal N°5",
        marca: "Local",
        unidad: "Unidad",
        precio: 380,
        stock: 500,
        stockCritico: 100,
        descripcion: "Ladrillo cerámico macizo hecho a mano para muros estructurales y divisiones interiores.",
        imagen: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80"
    },
    {
        codigo: "PT001",
        categoria: "Pinturas",
        subcategoria: "Látex",
        nombre: "Pintura látex interior 1 galón blanco",
        marca: "Sipa",
        unidad: "Galón",
        precio: 9990,
        stock: 40,
        stockCritico: 10,
        descripcion: "Pintura látex base agua de excelente poder cubridor y secado rápido para muros y cielos interiores.",
        imagen: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80"
    },
    {
        codigo: "HM001",
        categoria: "Herramientas",
        subcategoria: "Manuales",
        nombre: "Martillo carpintero 500g mango fibra",
        marca: "Stanley",
        unidad: "Unidad",
        precio: 7990,
        stock: 20,
        stockCritico: 5,
        descripcion: "Martillo de uña curva con mango de fibra de vidrio ergonómico antigolpes.",
        imagen: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&auto=format&fit=crop&q=80"
    },
    {
        codigo: "HM002",
        categoria: "Herramientas",
        subcategoria: "Manuales",
        nombre: "Alicate universal 8 pulgadas",
        marca: "Stanley",
        unidad: "Unidad",
        precio: 7290,
        stock: 15,
        stockCritico: 5,
        descripcion: "Alicate de acero forjado con aislación bicomponente para sujeción y corte de cables.",
        imagen: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80"
    },
    {
        codigo: "GS001",
        categoria: "Gasfitería",
        subcategoria: "Tuberías",
        nombre: "Cañería PVC 1/2 pulgada x 6m",
        marca: "Tigre",
        unidad: "Unidad",
        precio: 5490,
        stock: 30,
        stockCritico: 10,
        descripcion: "Tubo PVC clase 10 para conducción de agua fría a presión en instalaciones domiciliarias.",
        imagen: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&auto=format&fit=crop&q=80"
    },
    {
        codigo: "EL001",
        categoria: "Electricidad",
        subcategoria: "Conductores",
        nombre: "Cable unipolar 1.5mm² (por metro)",
        marca: "Condulac",
        unidad: "Metro",
        precio: 590,
        stock: 100,
        stockCritico: 30,
        descripcion: "Conductor de cobre electrolítico aislado con PVC termoplástico antichispas.",
        imagen: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&auto=format&fit=crop&q=80"
    },
    {
        codigo: "TR001",
        categoria: "Tornillería",
        subcategoria: "Tornillos",
        nombre: "Tornillo autoperforante 8x1 caja 100u",
        marca: "Hilti",
        unidad: "Caja",
        precio: 2990,
        stock: 40,
        stockCritico: 12,
        descripcion: "Tornillos autoperforantes punta broca cincados para fijación en perfiles metálicos y planchas.",
        imagen: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80"
    },
    {
        codigo: "MD001",
        categoria: "Madera",
        subcategoria: "Pino cepillado",
        nombre: "Pino cepillado 1x3 pulgadas x 3m",
        marca: "Local",
        unidad: "Unidad",
        precio: 4290,
        stock: 40,
        stockCritico: 12,
        descripcion: "Madera de pino insigne seca en cámara y cepillada por 4 caras para carpintería general.",
        imagen: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=600&auto=format&fit=crop&q=80"
    },
    {
        codigo: "SE001",
        categoria: "Seguridad",
        subcategoria: "EPP",
        nombre: "Casco seguridad con arnés blanco",
        marca: "3M",
        unidad: "Unidad",
        precio: 6990,
        stock: 15,
        stockCritico: 5,
        descripcion: "Casco de polietileno de alta densidad certificado con ajuste tipo rachet para faenas de construcción.",
        imagen: "https://images.unsplash.com/photo-1578873375969-d65fae067c29?w=600&auto=format&fit=crop&q=80"
    }
];

// Inicializar inventario en localStorage si no existe
function obtenerProductos() {
    const data = localStorage.getItem("productos");
    if (!data) {
        localStorage.setItem("productos", JSON.stringify(PRODUCTOS_INICIALES));
        return PRODUCTOS_INICIALES;
    }
    try {
        return JSON.parse(data);
    } catch {
        return PRODUCTOS_INICIALES;
    }
}

function guardarProductos(lista) {
    localStorage.setItem("productos", JSON.stringify(lista));
}

// Formateador de moneda chilena
function formatearCLP(valor) {
    return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0
    }).format(valor);
}

// ==========================================
// 2. GESTIÓN DEL CARRITO (localStorage)
// ==========================================
function obtenerCarrito() {
    try {
        return JSON.parse(localStorage.getItem("carrito")) || [];
    } catch {
        return [];
    }
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarIndicadorCarrito();
}

function actualizarIndicadorCarrito() {
    const carrito = obtenerCarrito();
    const totalCantidad = carrito.reduce((sum, item) => sum + (item.cantidad || 1), 0);
    const badge = document.querySelector(".cart-count");
    const link = document.querySelector(".cart-link");

    if (badge) {
        badge.textContent = totalCantidad;
    }
    if (link) {
        link.setAttribute("aria-label", `Ver carrito, ${totalCantidad} productos agregados`);
    }
}

function mostrarToast(mensaje, tipo = "success") {
    let contenedor = document.getElementById("toast-container");
    if (!contenedor) {
        contenedor = document.createElement("div");
        contenedor.id = "toast-container";
        contenedor.className = "position-fixed bottom-0 end-0 p-3";
        contenedor.style.zIndex = "1100";
        document.body.appendChild(contenedor);
    }

    const toast = document.createElement("div");
    toast.className = `toast align-items-center text-bg-${tipo} border-0 show mb-2 shadow-lg`;
    toast.setAttribute("role", "alert");
    toast.setAttribute("aria-live", "assertive");
    toast.setAttribute("aria-atomic", "true");
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body d-flex align-items-center gap-2">
                <i class="bi ${tipo === "success" ? "bi-check-circle-fill" : "bi-info-circle-fill"} fs-5"></i>
                <span>${mensaje}</span>
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Cerrar"></button>
        </div>
    `;
    contenedor.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function agregarAlCarrito(codigo, cantidad = 1) {
    const productos = obtenerProductos();
    const producto = productos.find(p => p.codigo === codigo);

    if (!producto) {
        mostrarToast("Producto no encontrado en inventario", "danger");
        return;
    }

    if (producto.stock <= 0) {
        mostrarToast(`Sin stock disponible de ${producto.nombre}`, "warning");
        return;
    }

    const carrito = obtenerCarrito();
    const itemExistente = carrito.find(item => item.codigo === codigo);

    const cantidadActual = itemExistente ? itemExistente.cantidad : 0;
    const nuevaCantidad = cantidadActual + cantidad;

    if (nuevaCantidad > producto.stock) {
        mostrarToast(`Stock máximo disponible para este producto: ${producto.stock} unidades`, "warning");
        return;
    }

    if (itemExistente) {
        itemExistente.cantidad = nuevaCantidad;
    } else {
        carrito.push({
            codigo: producto.codigo,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            categoria: producto.categoria,
            unidad: producto.unidad,
            cantidad: cantidad
        });
    }

    guardarCarrito(carrito);
    mostrarToast(`¡${producto.nombre} agregado al carrito!`, "success");
}

function actualizarCantidadCarrito(codigo, nuevaCantidad) {
    const carrito = obtenerCarrito();
    const item = carrito.find(i => i.codigo === codigo);
    if (!item) return;

    const productos = obtenerProductos();
    const producto = productos.find(p => p.codigo === codigo);

    if (nuevaCantidad <= 0) {
        eliminarDelCarrito(codigo);
        return;
    }

    if (producto && nuevaCantidad > producto.stock) {
        mostrarToast(`Stock máximo disponible: ${producto.stock}`, "warning");
        return;
    }

    item.cantidad = nuevaCantidad;
    guardarCarrito(carrito);
    renderizarCarrito();
}

function eliminarDelCarrito(codigo) {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(item => item.codigo !== codigo);
    guardarCarrito(carrito);
    renderizarCarrito();
    mostrarToast("Producto eliminado del carrito", "info");
}

function vaciarCarrito() {
    if (confirm("¿Estás seguro de que deseas vaciar el carrito de compras?")) {
        localStorage.removeItem("carrito");
        actualizarIndicadorCarrito();
        renderizarCarrito();
        mostrarToast("Carrito vaciado correctamente", "info");
    }
}

// ==========================================
// 3. RENDERIZADO DEL CARRITO
// ==========================================
function renderizarCarrito() {
    const tbody = document.getElementById("cart-table-body");
    const emptyMsg = document.getElementById("cart-empty-message");
    const summaryCard = document.getElementById("cart-summary-card");
    const subtotalEl = document.getElementById("cart-subtotal");
    const totalEl = document.getElementById("cart-total");

    if (!tbody) return;

    const carrito = obtenerCarrito();

    if (carrito.length === 0) {
        tbody.innerHTML = "";
        if (emptyMsg) emptyMsg.classList.remove("d-none");
        if (summaryCard) summaryCard.classList.add("d-none");
        return;
    }

    if (emptyMsg) emptyMsg.classList.add("d-none");
    if (summaryCard) summaryCard.classList.remove("d-none");

    let subtotal = 0;
    tbody.innerHTML = "";

    carrito.forEach(item => {
        const itemTotal = item.precio * item.cantidad;
        subtotal += itemTotal;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="align-middle">
                <div class="d-flex align-items-center gap-3">
                    <img src="${item.imagen}" alt="${item.nombre}" class="rounded border" style="width: 58px; height: 58px; object-fit: cover;">
                    <div>
                        <h6 class="mb-0 fw-bold text-navy">${item.nombre}</h6>
                        <small class="text-muted">Cód: ${item.codigo} | ${item.unidad || "Unidad"}</small>
                    </div>
                </div>
            </td>
            <td class="align-middle text-nowrap">${formatearCLP(item.precio)}</td>
            <td class="align-middle">
                <div class="input-group input-group-sm" style="width: 120px;">
                    <button class="btn btn-outline-secondary" type="button" onclick="actualizarCantidadCarrito('${item.codigo}', ${item.cantidad - 1})">-</button>
                    <input type="text" class="form-control text-center" value="${item.cantidad}" readonly>
                    <button class="btn btn-outline-secondary" type="button" onclick="actualizarCantidadCarrito('${item.codigo}', ${item.cantidad + 1})">+</button>
                </div>
            </td>
            <td class="align-middle fw-bold text-nowrap">${formatearCLP(itemTotal)}</td>
            <td class="align-middle text-center">
                <button class="btn btn-sm btn-outline-danger" title="Eliminar producto" onclick="eliminarDelCarrito('${item.codigo}')">
                    <i class="bi bi-trash-fill"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    if (subtotalEl) subtotalEl.textContent = formatearCLP(subtotal);
    if (totalEl) totalEl.textContent = formatearCLP(subtotal);
}

// ==========================================
// 4. RENDERIZADO DEL CATÁLOGO DE PRODUCTOS
// ==========================================
function renderizarProductos(filtroCategoria = "todas", busqueda = "") {
    const contenedor = document.getElementById("products-container");
    if (!contenedor) return;

    const productos = obtenerProductos();
    const query = busqueda.toLowerCase().trim();

    const filtrados = productos.filter(p => {
        const coincideCat = (filtroCategoria === "todas" || p.categoria === filtroCategoria);
        const coincideBusq = (!query || p.nombre.toLowerCase().includes(query) || p.codigo.toLowerCase().includes(query) || p.categoria.toLowerCase().includes(query));
        return coincideCat && coincideBusq;
    });

    if (filtrados.length === 0) {
        contenedor.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-search text-muted fs-1 mb-2 d-block"></i>
                <h5 class="text-navy">No se encontraron productos</h5>
                <p class="text-muted">Prueba con otra palabra clave o selecciona otra categoría.</p>
            </div>
        `;
        return;
    }

    contenedor.innerHTML = "";
    filtrados.forEach(p => {
        const esCritico = p.stock <= p.stockCritico;
        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-4 col-lg-3 d-flex";
        col.innerHTML = `
            <div class="card product-card w-100 shadow-sm border-0 d-flex flex-column">
                <div class="position-relative">
                    <img src="${p.imagen}" class="card-img-top product-img" alt="${p.nombre}">
                    <span class="badge bg-navy position-absolute top-0 start-0 m-2">${p.categoria}</span>
                    ${esCritico ? `<span class="badge bg-danger position-absolute top-0 end-0 m-2">Stock Bajo (${p.stock})</span>` : ""}
                </div>
                <div class="card-body d-flex flex-column p-3">
                    <small class="text-muted mb-1">${p.marca || "Los Maestros"} • Cód: ${p.codigo}</small>
                    <h6 class="card-title text-navy fw-bold mb-2 flex-grow-1">${p.nombre}</h6>
                    <p class="card-text text-muted small mb-2">${p.descripcion ? p.descripcion.substring(0, 75) + "..." : "Material de calidad garantizada."}</p>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="fs-5 fw-bold text-navy">${formatearCLP(p.precio)}</span>
                        <small class="text-muted">${p.stock} en stock</small>
                    </div>
                    <div class="mt-auto d-flex gap-2">
                        <a href="producto-detalle.html?codigo=${p.codigo}" class="btn btn-outline-brand btn-sm flex-grow-1">
                            <i class="bi bi-eye"></i> Detalle
                        </a>
                        <button class="btn btn-brand btn-sm flex-grow-1" onclick="agregarAlCarrito('${p.codigo}')">
                            <i class="bi bi-cart-plus"></i> Añadir
                        </button>
                    </div>
                </div>
            </div>
        `;
        contenedor.appendChild(col);
    });
}

// ==========================================
// 5. DETALLE DE PRODUCTO
// ==========================================
function inicializarDetalleProducto() {
    const contenedor = document.getElementById("detalle-producto-container");
    if (!contenedor) return;

    const params = new URLSearchParams(window.location.search);
    const codigo = params.get("codigo");

    const productos = obtenerProductos();
    const p = productos.find(item => item.codigo === codigo) || productos[0];

    if (!p) {
        contenedor.innerHTML = `
            <div class="text-center py-5">
                <h3>Producto no encontrado</h3>
                <a href="productos.html" class="btn btn-brand mt-3">Volver al catálogo</a>
            </div>
        `;
        return;
    }

    document.title = `${p.nombre} | Ferretería Los Maestros`;

    const esCritico = p.stock <= p.stockCritico;
    contenedor.innerHTML = `
        <nav aria-label="breadcrumb" class="mb-4">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Inicio</a></li>
                <li class="breadcrumb-item"><a href="productos.html">Productos</a></li>
                <li class="breadcrumb-item active" aria-current="page">${p.nombre}</li>
            </ol>
        </nav>
        <div class="row g-4 align-items-center">
            <div class="col-md-6">
                <div class="bg-white p-3 rounded shadow-sm border text-center">
                    <img src="${p.imagen}" alt="${p.nombre}" class="img-fluid rounded" style="max-height: 420px; object-fit: cover;">
                </div>
            </div>
            <div class="col-md-6">
                <span class="badge bg-warning text-dark mb-2 px-3 py-1 fs-6">${p.categoria}</span>
                <h1 class="display-6 fw-bold text-navy">${p.nombre}</h1>
                <p class="text-muted">Código de referencia: <strong>${p.codigo}</strong> | Marca: <strong>${p.marca || "General"}</strong></p>
                <div class="my-3">
                    <span class="display-5 fw-bold text-navy">${formatearCLP(p.precio)}</span>
                    <span class="text-muted fs-6">/ ${p.unidad || "Unidad"} (IVA incl.)</span>
                </div>
                <div class="p-3 bg-light rounded border mb-4">
                    <p class="mb-1"><strong>Disponibilidad:</strong> 
                        <span class="badge ${p.stock > 0 ? (esCritico ? "bg-warning text-dark" : "bg-success") : "bg-danger"}">
                            ${p.stock > 0 ? `${p.stock} unidades en bodega La Serena` : "Sin stock disponible"}
                        </span>
                    </p>
                    ${esCritico && p.stock > 0 ? `<small class="text-danger"><i class="bi bi-exclamation-triangle-fill"></i> ¡Stock crítico! Pocas unidades disponibles para entrega inmediata.</small>` : ""}
                </div>
                <p class="text-muted leading-relaxed">${p.descripcion || "Producto indispensable para trabajos de albañilería, construcción y mejoramiento del hogar."}</p>
                
                <div class="d-flex align-items-center gap-3 mt-4">
                    <div class="input-group" style="width: 140px;">
                        <button class="btn btn-outline-secondary" type="button" id="btn-dec">-</button>
                        <input type="number" id="detalle-cantidad" class="form-control text-center" value="1" min="1" max="${p.stock}">
                        <button class="btn btn-outline-secondary" type="button" id="btn-inc">+</button>
                    </div>
                    <button class="btn btn-brand btn-lg flex-grow-1" id="btn-agregar-detalle">
                        <i class="bi bi-cart-plus me-2"></i> Añadir al Carrito
                    </button>
                </div>
                <div class="mt-4 pt-3 border-top d-flex gap-4 text-muted small">
                    <div><i class="bi bi-truck text-navy fs-5 d-block"></i> Despacho en La Serena y Coquimbo</div>
                    <div><i class="bi bi-shield-check text-navy fs-5 d-block"></i> Garantía y boleta/factura</div>
                    <div><i class="bi bi-shop text-navy fs-5 d-block"></i> Retiro sin costo en tienda</div>
                </div>
            </div>
        </div>
    `;

    const inputCant = document.getElementById("detalle-cantidad");
    document.getElementById("btn-dec")?.addEventListener("click", () => {
        let val = parseInt(inputCant.value) || 1;
        if (val > 1) inputCant.value = val - 1;
    });
    document.getElementById("btn-inc")?.addEventListener("click", () => {
        let val = parseInt(inputCant.value) || 1;
        if (val < p.stock) inputCant.value = val + 1;
    });
    document.getElementById("btn-agregar-detalle")?.addEventListener("click", () => {
        const cant = parseInt(inputCant.value) || 1;
        agregarAlCarrito(p.codigo, cant);
    });
}

// ==========================================
// 6. VALIDACIONES EN JAVASCRIPT
// (Reglas exigidas en Anexo 1 - Páginas 13-16)
// ==========================================

// Validador de correo con dominios permitidos: @duoc.cl, @profesor.duoc.cl, @gmail.com
function esCorreoValido(correo) {
    if (!correo || correo.length > 100) return false;
    const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
    const regexFormato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexFormato.test(correo)) return false;
    const lower = correo.toLowerCase().trim();
    return dominiosPermitidos.some(d => lower.endsWith(d));
}

// Validador de RUN Chileno (Módulo 11 sin puntos ni guión: 19011022K, min 7 max 9)
function esRunValido(run) {
    if (!run) return false;
    const limpio = run.toString().trim().toUpperCase().replace(/[\.\-]/g, "");
    if (limpio.length < 7 || limpio.length > 9) return false;

    const cuerpo = limpio.slice(0, -1);
    const dv = limpio.slice(-1);

    if (!/^\d+$/.test(cuerpo)) return false;

    let suma = 0;
    let multiplo = 2;
    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo[i]) * multiplo;
        multiplo = multiplo === 7 ? 2 : multiplo + 1;
    }

    const resto = 11 - (suma % 11);
    let dvEsperado = "0";
    if (resto === 11) dvEsperado = "0";
    else if (resto === 10) dvEsperado = "K";
    else dvEsperado = resto.toString();

    return dv === dvEsperado;
}

// Helper para marcar inputs inválidos o válidos en Bootstrap
function marcarCampo(input, esValido, mensajeError = "") {
    const contenedor = input.closest(".form-group") || input.parentElement;
    let feedback = contenedor.querySelector(".invalid-feedback");

    if (!feedback) {
        feedback = document.createElement("div");
        feedback.className = "invalid-feedback";
        contenedor.appendChild(feedback);
    }

    if (esValido) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedback.textContent = "";
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedback.textContent = mensajeError;
    }
}

// ==========================================
// 7. REGIONES Y COMUNAS DE CHILE (Select dependiente)
// ==========================================
const REGIONES_CHILE = [
    {
        region: "Región de Coquimbo",
        comunas: ["La Serena", "Coquimbo", "Ovalle", "Vicuña", "Illapel", "Salamanca", "Los Vilos", "Andacollo"]
    },
    {
        region: "Región de Valparaíso",
        comunas: ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana", "Quillota", "San Antonio"]
    },
    {
        region: "Región Metropolitana",
        comunas: ["Santiago", "Providencia", "Las Condes", "Maipú", "Puente Alto", "Ñuñoa", "La Florida"]
    },
    {
        region: "Región de Antofagasta",
        comunas: ["Antofagasta", "Calama", "Tocopilla", "Mejillones"]
    },
    {
        region: "Región del Biobío",
        comunas: ["Concepción", "Talcahuano", "San Pedro de la Paz", "Coronel", "Los Ángeles"]
    }
];

function cargarRegionesYComunas(selectRegionId = "select-region", selectComunaId = "select-comuna") {
    const selRegion = document.getElementById(selectRegionId);
    const selComuna = document.getElementById(selectComunaId);
    if (!selRegion || !selComuna) return;

    selRegion.innerHTML = `<option value="">Selecciona tu región...</option>`;
    REGIONES_CHILE.forEach((item, idx) => {
        const opt = document.createElement("option");
        opt.value = item.region;
        opt.textContent = item.region;
        selRegion.appendChild(opt);
    });

    selRegion.addEventListener("change", () => {
        const regionElegida = selRegion.value;
        selComuna.innerHTML = `<option value="">Selecciona tu comuna...</option>`;
        if (!regionElegida) return;

        const encontrada = REGIONES_CHILE.find(r => r.region === regionElegida);
        if (encontrada) {
            encontrada.comunas.forEach(comuna => {
                const opt = document.createElement("option");
                opt.value = comuna;
                opt.textContent = comuna;
                selComuna.appendChild(opt);
            });
        }
    });
}

// ==========================================
// 8. MANEJO DE FORMULARIOS ESPECÍFICOS
// ==========================================

// Formulario de Contacto
function inicializarFormularioContacto() {
    const form = document.getElementById("form-contacto");
    if (!form) return;

    const inputNombre = document.getElementById("contacto-nombre");
    const inputCorreo = document.getElementById("contacto-correo");
    const inputMensaje = document.getElementById("contacto-mensaje");
    const contadorChar = document.getElementById("contador-caracteres");

    if (inputMensaje && contadorChar) {
        inputMensaje.addEventListener("input", () => {
            const restantes = 500 - inputMensaje.value.length;
            contadorChar.textContent = `${inputMensaje.value.length}/500 caracteres`;
            if (restantes < 0) {
                contadorChar.classList.add("text-danger");
            } else {
                contadorChar.classList.remove("text-danger");
            }
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let esValido = true;

        // Nombre: Requerido, max 100
        const nombre = inputNombre.value.trim();
        if (!nombre) {
            marcarCampo(inputNombre, false, "El nombre es requerido.");
            esValido = false;
        } else if (nombre.length > 100) {
            marcarCampo(inputNombre, false, "El nombre no debe superar los 100 caracteres.");
            esValido = false;
        } else {
            marcarCampo(inputNombre, true);
        }

        // Correo: Requerido, max 100, dominios permitidos
        const correo = inputCorreo.value.trim();
        if (!correo) {
            marcarCampo(inputCorreo, false, "El correo electrónico es requerido.");
            esValido = false;
        } else if (!esCorreoValido(correo)) {
            marcarCampo(inputCorreo, false, "Permitido solo correos @duoc.cl, @profesor.duoc.cl o @gmail.com.");
            esValido = false;
        } else {
            marcarCampo(inputCorreo, true);
        }

        // Comentario: Requerido, max 500
        const mensaje = inputMensaje.value.trim();
        if (!mensaje) {
            marcarCampo(inputMensaje, false, "El comentario o mensaje es requerido.");
            esValido = false;
        } else if (mensaje.length > 500) {
            marcarCampo(inputMensaje, false, "El comentario no debe superar los 500 caracteres.");
            esValido = false;
        } else {
            marcarCampo(inputMensaje, true);
        }

        if (esValido) {
            mostrarToast("¡Gracias por comunicarte! Tu mensaje ha sido enviado a Ferretería Los Maestros.", "success");
            form.reset();
            if (contadorChar) contadorChar.textContent = "0/500 caracteres";
            form.querySelectorAll(".is-valid").forEach(el => el.classList.remove("is-valid"));
        }
    });
}

// Formulario de Inicio de Sesión
function inicializarFormularioLogin() {
    const form = document.getElementById("form-login");
    if (!form) return;

    const inputCorreo = document.getElementById("login-correo");
    const inputPassword = document.getElementById("login-password");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let esValido = true;

        const correo = inputCorreo.value.trim();
        if (!correo) {
            marcarCampo(inputCorreo, false, "El correo es requerido.");
            esValido = false;
        } else if (!esCorreoValido(correo)) {
            marcarCampo(inputCorreo, false, "Correo no válido. Solo dominios @duoc.cl, @profesor.duoc.cl o @gmail.com");
            esValido = false;
        } else {
            marcarCampo(inputCorreo, true);
        }

        const pass = inputPassword.value;
        if (!pass) {
            marcarCampo(inputPassword, false, "La contraseña es requerida.");
            esValido = false;
        } else if (pass.length < 4 || pass.length > 10) {
            marcarCampo(inputPassword, false, "La contraseña debe tener entre 4 y 10 caracteres.");
            esValido = false;
        } else {
            marcarCampo(inputPassword, true);
        }

        if (esValido) {
            // Asignar rol de prueba según correo
            let rol = "Cliente";
            if (correo.includes("admin")) rol = "Administrador";
            else if (correo.includes("vendedor")) rol = "Vendedor";

            const sesion = { correo, rol, timestamp: new Date().toISOString() };
            localStorage.setItem("usuario_sesion", JSON.stringify(sesion));
            mostrarToast(`Sesión iniciada con éxito como ${rol}`, "success");

            setTimeout(() => {
                if (rol === "Administrador" || rol === "Vendedor") {
                    window.location.href = "admin.html";
                } else {
                    window.location.href = "index.html";
                }
            }, 1200);
        }
    });
}

// Formulario de Registro
function inicializarFormularioRegistro() {
    const form = document.getElementById("form-registro");
    if (!form) return;

    cargarRegionesYComunas("registro-region", "registro-comuna");

    const inputRun = document.getElementById("registro-run");
    const inputNombre = document.getElementById("registro-nombre");
    const inputApellidos = document.getElementById("registro-apellidos");
    const inputCorreo = document.getElementById("registro-correo");
    const inputFecha = document.getElementById("registro-fecha");
    const selectRegion = document.getElementById("registro-region");
    const selectComuna = document.getElementById("registro-comuna");
    const inputDireccion = document.getElementById("registro-direccion");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let esValido = true;

        // RUN: Requerido, sin puntos ni guion, min 7 max 9, validación modulo 11
        const run = inputRun.value.trim().toUpperCase();
        if (!run) {
            marcarCampo(inputRun, false, "El RUN es requerido.");
            esValido = false;
        } else if (!esRunValido(run)) {
            marcarCampo(inputRun, false, "RUN inválido. Ingresa sin puntos ni guión (ej: 19011022K).");
            esValido = false;
        } else {
            marcarCampo(inputRun, true);
        }

        // Nombre: Requerido, max 50
        const nombre = inputNombre.value.trim();
        if (!nombre) {
            marcarCampo(inputNombre, false, "El nombre es requerido.");
            esValido = false;
        } else if (nombre.length > 50) {
            marcarCampo(inputNombre, false, "Máximo 50 caracteres.");
            esValido = false;
        } else {
            marcarCampo(inputNombre, true);
        }

        // Apellidos: Requerido, max 100
        const apellidos = inputApellidos.value.trim();
        if (!apellidos) {
            marcarCampo(inputApellidos, false, "Los apellidos son requeridos.");
            esValido = false;
        } else if (apellidos.length > 100) {
            marcarCampo(inputApellidos, false, "Máximo 100 caracteres.");
            esValido = false;
        } else {
            marcarCampo(inputApellidos, true);
        }

        // Correo: Requerido, max 100, dominios permitidos
        const correo = inputCorreo.value.trim();
        if (!correo) {
            marcarCampo(inputCorreo, false, "El correo es requerido.");
            esValido = false;
        } else if (!esCorreoValido(correo)) {
            marcarCampo(inputCorreo, false, "Solo correos con @duoc.cl, @profesor.duoc.cl y @gmail.com");
            esValido = false;
        } else {
            marcarCampo(inputCorreo, true);
        }

        // Región y Comuna
        if (selectRegion && !selectRegion.value) {
            marcarCampo(selectRegion, false, "Debes seleccionar una región.");
            esValido = false;
        } else if (selectRegion) {
            marcarCampo(selectRegion, true);
        }

        if (selectComuna && !selectComuna.value) {
            marcarCampo(selectComuna, false, "Debes seleccionar una comuna.");
            esValido = false;
        } else if (selectComuna) {
            marcarCampo(selectComuna, true);
        }

        // Dirección: Requerido, max 300
        const direccion = inputDireccion.value.trim();
        if (!direccion) {
            marcarCampo(inputDireccion, false, "La dirección es requerida.");
            esValido = false;
        } else if (direccion.length > 300) {
            marcarCampo(inputDireccion, false, "Máximo 300 caracteres.");
            esValido = false;
        } else {
            marcarCampo(inputDireccion, true);
        }

        if (esValido) {
            mostrarToast("¡Registro exitoso en Ferretería Los Maestros! Ahora puedes iniciar sesión.", "success");
            form.reset();
            form.querySelectorAll(".is-valid").forEach(el => el.classList.remove("is-valid"));
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1500);
        }
    });
}

// ==========================================
// 9. PANEL ADMINISTRATIVO (Productos y Usuarios)
// ==========================================
function inicializarPanelAdmin() {
    const adminRoot = document.getElementById("admin-dashboard");
    if (!adminRoot) return;

    // Verificar sesión o asignar rol por defecto para prueba
    let sesion = JSON.parse(localStorage.getItem("usuario_sesion") || "null");
    if (!sesion) {
        sesion = { correo: "admin@duoc.cl", rol: "Administrador" };
        localStorage.setItem("usuario_sesion", JSON.stringify(sesion));
    }

    const badgeRol = document.getElementById("admin-current-role");
    if (badgeRol) badgeRol.textContent = sesion.rol;

    // Control de vista según rol:
    // Administrador: todo.
    // Vendedor: solo productos y órdenes, sin usuarios.
    const navUsuarios = document.getElementById("admin-nav-usuarios");
    if (sesion.rol === "Vendedor" && navUsuarios) {
        navUsuarios.classList.add("d-none");
    }

    // Renderizar tabla de productos del admin
    renderizarTablaAdminProductos();
    inicializarFormularioAdminProducto();

    // Renderizar usuarios
    if (sesion.rol === "Administrador") {
        cargarRegionesYComunas("usuario-region", "usuario-comuna");
        inicializarFormularioAdminUsuario();
        renderizarTablaAdminUsuarios();
    }
}

function renderizarTablaAdminProductos() {
    const tbody = document.getElementById("admin-products-table");
    if (!tbody) return;

    const productos = obtenerProductos();
    tbody.innerHTML = "";

    productos.forEach(p => {
        const esCritico = p.stock <= p.stockCritico;
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="fw-bold">${p.codigo}</td>
            <td>${p.nombre}</td>
            <td><span class="badge bg-secondary">${p.categoria}</span></td>
            <td>${formatearCLP(p.precio)}</td>
            <td>
                <span class="badge ${esCritico ? "bg-danger" : "bg-success"}">
                    ${p.stock} un. ${esCritico ? "(Crítico)" : ""}
                </span>
            </td>
            <td>${p.stockCritico || 0}</td>
            <td class="text-end">
                <button class="btn btn-sm btn-outline-danger" onclick="eliminarProductoAdmin('${p.codigo}')">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function inicializarFormularioAdminProducto() {
    const form = document.getElementById("form-admin-producto");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let esValido = true;

        const inputCodigo = document.getElementById("prod-codigo");
        const inputNombre = document.getElementById("prod-nombre");
        const inputPrecio = document.getElementById("prod-precio");
        const inputStock = document.getElementById("prod-stock");
        const inputStockCritico = document.getElementById("prod-stock-critico");
        const selectCategoria = document.getElementById("prod-categoria");
        const inputDesc = document.getElementById("prod-descripcion");

        // Código: Requerido, min 3
        const codigo = inputCodigo.value.trim().toUpperCase();
        if (!codigo || codigo.length < 3) {
            marcarCampo(inputCodigo, false, "El código es requerido y debe tener mínimo 3 caracteres.");
            esValido = false;
        } else {
            marcarCampo(inputCodigo, true);
        }

        // Nombre: Requerido, max 100
        const nombre = inputNombre.value.trim();
        if (!nombre || nombre.length > 100) {
            marcarCampo(inputNombre, false, "El nombre es requerido (máx 100 caracteres).");
            esValido = false;
        } else {
            marcarCampo(inputNombre, true);
        }

        // Precio: Requerido, min 0, decimales permitidos
        const precio = parseFloat(inputPrecio.value);
        if (isNaN(precio) || precio < 0) {
            marcarCampo(inputPrecio, false, "Precio requerido (mínimo 0).");
            esValido = false;
        } else {
            marcarCampo(inputPrecio, true);
        }

        // Stock: Requerido, min 0, entero
        const stock = parseInt(inputStock.value);
        if (isNaN(stock) || stock < 0) {
            marcarCampo(inputStock, false, "Stock requerido (entero >= 0).");
            esValido = false;
        } else {
            marcarCampo(inputStock, true);
        }

        // Stock Crítico: Opcional, min 0, entero
        let stockCritico = 0;
        if (inputStockCritico.value) {
            stockCritico = parseInt(inputStockCritico.value);
            if (isNaN(stockCritico) || stockCritico < 0) {
                marcarCampo(inputStockCritico, false, "Stock crítico debe ser entero >= 0.");
                esValido = false;
            } else {
                marcarCampo(inputStockCritico, true);
            }
        }

        // Categoría: Requerido select
        if (!selectCategoria.value) {
            marcarCampo(selectCategoria, false, "Selecciona una categoría.");
            esValido = false;
        } else {
            marcarCampo(selectCategoria, true);
        }

        if (esValido) {
            const productos = obtenerProductos();
            const index = productos.findIndex(p => p.codigo === codigo);

            const nuevo = {
                codigo,
                nombre,
                categoria: selectCategoria.value,
                subcategoria: "General",
                precio,
                stock,
                stockCritico,
                descripcion: inputDesc ? inputDesc.value.trim() : "",
                imagen: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80"
            };

            if (index >= 0) {
                productos[index] = nuevo;
                mostrarToast(`Producto ${codigo} actualizado correctamente`, "success");
            } else {
                productos.unshift(nuevo);
                mostrarToast(`Nuevo producto ${codigo} registrado con éxito`, "success");
            }

            guardarProductos(productos);
            renderizarTablaAdminProductos();
            form.reset();
            form.querySelectorAll(".is-valid").forEach(el => el.classList.remove("is-valid"));
        }
    });
}

function eliminarProductoAdmin(codigo) {
    if (confirm(`¿Seguro que deseas eliminar el producto ${codigo}?`)) {
        let productos = obtenerProductos();
        productos = productos.filter(p => p.codigo !== codigo);
        guardarProductos(productos);
        renderizarTablaAdminProductos();
        mostrarToast(`Producto ${codigo} eliminado`, "info");
    }
}

// Usuarios de prueba en Admin
const USUARIOS_INICIALES = [
    { run: "111111111", nombre: "Administrador", apellidos: "General", correo: "admin@duoc.cl", rol: "Administrador", region: "Región de Coquimbo", comuna: "La Serena", direccion: "Av. Balmaceda 1234" },
    { run: "222222222", nombre: "Pedro", apellidos: "Pérez", correo: "vendedor@duoc.cl", rol: "Vendedor", region: "Región de Coquimbo", comuna: "Coquimbo", direccion: "Calle Los Carrera 456" },
    { run: "19011022K", nombre: "Carlos", apellidos: "González", correo: "cliente@gmail.com", rol: "Cliente", region: "Región de Coquimbo", comuna: "La Serena", direccion: "Pampa Baja 789" }
];

function obtenerUsuarios() {
    const data = localStorage.getItem("usuarios_sistema");
    if (!data) {
        localStorage.setItem("usuarios_sistema", JSON.stringify(USUARIOS_INICIALES));
        return USUARIOS_INICIALES;
    }
    try {
        return JSON.parse(data);
    } catch {
        return USUARIOS_INICIALES;
    }
}

function renderizarTablaAdminUsuarios() {
    const tbody = document.getElementById("admin-users-table");
    if (!tbody) return;

    const usuarios = obtenerUsuarios();
    tbody.innerHTML = "";

    usuarios.forEach(u => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><code>${u.run}</code></td>
            <td>${u.nombre} ${u.apellidos}</td>
            <td>${u.correo}</td>
            <td><span class="badge ${u.rol === "Administrador" ? "bg-danger" : (u.rol === "Vendedor" ? "bg-warning text-dark" : "bg-primary")}">${u.rol}</span></td>
            <td>${u.comuna || "La Serena"}</td>
            <td>${u.direccion || "No registrada"}</td>
        `;
        tbody.appendChild(tr);
    });
}

function inicializarFormularioAdminUsuario() {
    const form = document.getElementById("form-admin-usuario");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let esValido = true;

        const inputRun = document.getElementById("usuario-run");
        const inputNombre = document.getElementById("usuario-nombre");
        const inputApellidos = document.getElementById("usuario-apellidos");
        const inputCorreo = document.getElementById("usuario-correo");
        const selectRol = document.getElementById("usuario-rol");
        const selectRegion = document.getElementById("usuario-region");
        const selectComuna = document.getElementById("usuario-comuna");
        const inputDireccion = document.getElementById("usuario-direccion");

        const run = inputRun.value.trim().toUpperCase();
        if (!run || !esRunValido(run)) {
            marcarCampo(inputRun, false, "RUN no válido (sin puntos ni guión).");
            esValido = false;
        } else {
            marcarCampo(inputRun, true);
        }

        const nombre = inputNombre.value.trim();
        if (!nombre || nombre.length > 50) {
            marcarCampo(inputNombre, false, "Nombre requerido (máx 50 car.)");
            esValido = false;
        } else {
            marcarCampo(inputNombre, true);
        }

        const apellidos = inputApellidos.value.trim();
        if (!apellidos || apellidos.length > 100) {
            marcarCampo(inputApellidos, false, "Apellidos requeridos (máx 100 car.)");
            esValido = false;
        } else {
            marcarCampo(inputApellidos, true);
        }

        const correo = inputCorreo.value.trim();
        if (!correo || !esCorreoValido(correo)) {
            marcarCampo(inputCorreo, false, "Correo válido requerido (@duoc.cl, @profesor.duoc.cl o @gmail.com)");
            esValido = false;
        } else {
            marcarCampo(inputCorreo, true);
        }

        if (!selectRol.value) {
            marcarCampo(selectRol, false, "Selecciona un rol.");
            esValido = false;
        } else {
            marcarCampo(selectRol, true);
        }

        const direccion = inputDireccion.value.trim();
        if (!direccion || direccion.length > 300) {
            marcarCampo(inputDireccion, false, "Dirección requerida (máx 300 car.)");
            esValido = false;
        } else {
            marcarCampo(inputDireccion, true);
        }

        if (esValido) {
            const usuarios = obtenerUsuarios();
            usuarios.push({
                run,
                nombre,
                apellidos,
                correo,
                rol: selectRol.value,
                region: selectRegion.value,
                comuna: selectComuna.value,
                direccion
            });
            localStorage.setItem("usuarios_sistema", JSON.stringify(usuarios));
            mostrarToast(`Usuario ${nombre} agregado con perfil ${selectRol.value}`, "success");
            renderizarTablaAdminUsuarios();
            form.reset();
            form.querySelectorAll(".is-valid").forEach(el => el.classList.remove("is-valid"));
        }
    });
}

// ==========================================
// 10. INICIALIZACIÓN GLOBAL AL CARGAR EL DOM
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Año dinámico en el footer
    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Actualizar contador del carrito
    actualizarIndicadorCarrito();

    // Botón volver arriba
    const backToTop = document.getElementById("back-to-top");
    if (backToTop) {
        const toggleBtn = () => {
            backToTop.classList.toggle("show", window.scrollY > 250);
        };
        window.addEventListener("scroll", toggleBtn, { passive: true });
        toggleBtn();
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Inicializar vistas específicas si sus contenedores existen
    renderizarCarrito();
    inicializarDetalleProducto();
    inicializarFormularioContacto();
    inicializarFormularioLogin();
    inicializarFormularioRegistro();
    inicializarPanelAdmin();

    // Si estamos en la página de productos (catálogo)
    if (document.getElementById("products-container")) {
        renderizarProductos();

        const selectCat = document.getElementById("filtro-categoria");
        const inputBusq = document.getElementById("busqueda-producto");

        if (selectCat) {
            selectCat.addEventListener("change", () => {
                renderizarProductos(selectCat.value, inputBusq ? inputBusq.value : "");
            });
        }

        if (inputBusq) {
            inputBusq.addEventListener("input", () => {
                renderizarProductos(selectCat ? selectCat.value : "todas", inputBusq.value);
            });
        }
    }

    // Si estamos en el home (productos destacados)
    const featuredContainer = document.getElementById("featured-products");
    if (featuredContainer) {
        const productos = obtenerProductos().slice(0, 4);
        featuredContainer.innerHTML = "";
        productos.forEach(p => {
            const col = document.createElement("div");
            col.className = "col-sm-6 col-lg-3 d-flex";
            col.innerHTML = `
                <div class="card product-card w-100 shadow-sm border-0 d-flex flex-column">
                    <img src="${p.imagen}" class="card-img-top product-img" alt="${p.nombre}">
                    <div class="card-body d-flex flex-column p-3">
                        <span class="badge bg-secondary mb-2 align-self-start">${p.categoria}</span>
                        <h6 class="card-title text-navy fw-bold mb-2 flex-grow-1">${p.nombre}</h6>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="fs-5 fw-bold text-navy">${formatearCLP(p.precio)}</span>
                            <small class="text-success fw-bold">Stock: ${p.stock}</small>
                        </div>
                        <div class="d-flex gap-2">
                            <a href="producto-detalle.html?codigo=${p.codigo}" class="btn btn-outline-brand btn-sm flex-grow-1">Detalle</a>
                            <button class="btn btn-brand btn-sm flex-grow-1" onclick="agregarAlCarrito('${p.codigo}')">Añadir</button>
                        </div>
                    </div>
                </div>
            `;
            featuredContainer.appendChild(col);
        });
    }
});
