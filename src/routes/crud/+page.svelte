<script>
    import '$lib/styles/crud.css';
    let { data } = $props();
    
    let modalEditar; 
    let productoEditando = $state(null);

    function abrirModal(producto) {
        productoEditando = producto;
        modalEditar.showModal();
    }
</script>

<main class="inventory-container">
    <nav class="top-nav">
        <h2>Gestión de Inventario</h2>
        <form method="POST" action="?/cerrar_sesion">
            <button class="btn-logout">Cerrar Sesión</button>
        </form>
    </nav>

    <aside class="stats-bar">
        <p>Productos registrados: <strong>{data.productos.length}</strong></p>
    </aside>

    <section class="form-section">
        <h3>Nuevo Producto</h3>
        <form method="POST" action="?/crear" class="horizontal-form">
            <input type="text" name="nombre" placeholder="Nombre" required>
            <input type="number" step="0.01" name="precio" placeholder="Precio" required>
            <input type="text" name="categoria" placeholder="Categoría" required>
            <input type="number" name="stock" placeholder="Stock" required>
            <button class="btn-add">Guardar</button>
        </form>
    </section>

    <section class="table-section">
        <table class="minimal-table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {#each data.productos as p}
                    <tr>
                        <td>{p.nombre}</td>
                        <td>${p.precio}</td>
                        <td class={p.stock < 5 ? 'low' : ''}>{p.stock}</td>
                        <td class="actions">
                            <button onclick={() => abrirModal(p)}>Editar</button>
                            <form method="POST" action="?/eliminar">
                                <input type="hidden" name="id" value={p.id}>
                                <button class="delete">Eliminar</button>
                            </form>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </section>
</main>

<dialog bind:this={modalEditar} class="simple-modal">
    {#if productoEditando}
        <form method="POST" action="?/actualizar">
            <h3>Editar Producto</h3>
            <input type="hidden" name="id" value={productoEditando.id}>
            <input type="text" name="nombre" value={productoEditando.nombre}>
            <input type="number" name="precio" value={productoEditando.precio}>
            <input type="number" name="stock" value={productoEditando.stock}>
            <footer>
                <button type="button" onclick={() => modalEditar.close()}>Cancelar</button>
                <button type="submit">Actualizar</button>
            </footer>
        </form>
    {/if}
</dialog>