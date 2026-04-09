<script>
    let { data } = $props();
    
    // Variables para el Modal de Edición
    let modalEditar; 
    let productoEditando = $state(null);

    function abrirModal(producto) {
        productoEditando = producto;
        modalEditar.showModal();
    }
</script>

<main class="container">
    <header>
        <h2>Gestión de Inventario</h2>
        <form method="POST" action="?/cerrar_sesion">
            <button class="btn btn-danger" type="submit">Cerrar Sesión</button>
        </form>
    </header>

    <div class="stats-panel">
        <p>Total de productos registrados: <strong>{data.productos.length}</strong></p>
    </div>

    <section class="card">
        <h3>Agregar Nuevo Producto</h3>
        <form method="POST" action="?/crear" class="grid-form">
            <div class="input-group">
                <label for="c-nombre">Nombre</label>
                <input id="c-nombre" type="text" name="nombre" placeholder="Ej. Teclado" required>
            </div>
            <div class="input-group">
                <label for="c-precio">Precio ($)</label>
                <input id="c-precio" type="number" step="0.01" name="precio" placeholder="0.00" required>
            </div>
            <div class="input-group">
                <label for="c-categoria">Categoría</label>
                <input id="c-categoria" type="text" name="categoria" placeholder="Ej. Periféricos" required>
            </div>
            <div class="input-group">
                <label for="c-stock">Stock</label>
                <input id="c-stock" type="number" name="stock" placeholder="0" required>
            </div>
            <div class="input-group btn-container">
                <button class="btn btn-primary" type="submit">Guardar</button>
            </div>
        </form>
    </section>

    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {#each data.productos as producto}
                    <tr>
                        <td>{producto.id}</td>
                        <td><strong>{producto.nombre}</strong></td>
                        <td>${producto.precio}</td>
                        <td><span class="badge">{producto.categoria}</span></td>
                        <td>
                            <span class="stock {producto.stock < 5 ? 'low-stock' : ''}">
                                {producto.stock} unds.
                            </span>
                        </td>
                        <td>
                            <div class="action-buttons">
                                <button type="button" class="btn btn-primary btn-sm" onclick={() => abrirModal(producto)}>
                                    Editar
                                </button>
                                
                                <form method="POST" action="?/eliminar" style="margin: 0;">
                                    <input type="hidden" name="id" value={producto.id}>
                                    <button class="btn btn-danger btn-sm" type="submit">Eliminar</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</main>

<dialog bind:this={modalEditar} class="modal">
    {#if productoEditando}
        <div class="modal-content">
            <h3>Editar Producto #{productoEditando.id}</h3>
            
            <form method="POST" action="?/actualizar" class="grid-form">
                <input type="hidden" name="id" value={productoEditando.id}>
                
                <div class="input-group">
                    <label for="e-nombre">Nombre</label>
                    <input id="e-nombre" type="text" name="nombre" value={productoEditando.nombre} required>
                </div>
                <div class="input-group">
                    <label for="e-precio">Precio ($)</label>
                    <input id="e-precio" type="number" step="0.01" name="precio" value={productoEditando.precio} required>
                </div>
                <div class="input-group">
                    <label for="e-categoria">Categoría</label>
                    <input id="e-categoria" type="text" name="categoria" value={productoEditando.categoria} required>
                </div>
                <div class="input-group">
                    <label for="e-stock">Stock</label>
                    <input id="e-stock" type="number" name="stock" value={productoEditando.stock} required>
                </div>
                
                <div class="modal-actions">
                    <button type="button" class="btn btn-danger" onclick={() => modalEditar.close()}>Cancelar</button>
                    <button type="submit" class="btn btn-primary">Actualizar Cambios</button>
                </div>
            </form>
        </div>
    {/if}
</dialog>

<style>
    /* Estilos Globales */
    :global(body) {
        font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        background-color: #f0f4f8;
        color: #333;
        margin: 0;
        padding: 0;
    }

    .container {
        max-width: 900px;
        margin: 40px auto;
        padding: 0 20px;
    }

    header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    h2, h3 { color: #1a365d; margin: 0; }

    .stats-panel {
        background-color: #ebf8fa;
        border-left: 5px solid #3182ce;
        padding: 10px 20px;
        border-radius: 8px;
        margin-bottom: 25px;
        color: #2b6cb0;
        font-size: 1.1em;
    }

    .card, .table-container {
        background: white;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        margin-bottom: 30px;
    }

    .table-container { padding: 0; overflow: auto; }

    /* Formularios */
    .grid-form { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-top: 15px; align-items: end; }
    .input-group { display: flex; flex-direction: column; }
    label { font-size: 0.85em; font-weight: 600; color: #4a5568; margin-bottom: 5px; }
    input { padding: 10px; border: 1px solid #cbd5e0; border-radius: 6px; font-size: 0.95em; }
    input:focus { outline: none; border-color: #3182ce; box-shadow: 0 0 0 3px rgba(49,130,206,0.2); }

    /* Botones */
    .btn { padding: 10px 16px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; }
    .btn-primary { background-color: #3182ce; color: white; height: 41px; }
    .btn-primary:hover { background-color: #2b6cb0; }
    .btn-danger { background-color: #e53e3e; color: white; }
    .btn-danger:hover { background-color: #c53030; }
    .btn-sm { padding: 6px 12px; font-size: 0.85em; height: auto; }
    .action-buttons { display: flex; gap: 8px; }

    /* Tabla */
    table { width: 100%; border-collapse: collapse; text-align: left; }
    th, td { padding: 15px 20px; border-bottom: 1px solid #edf2f7; }
    th { background-color: #f7fafc; color: #4a5568; font-weight: 600; text-transform: uppercase; font-size: 0.8em; }
    tr:hover { background-color: #ebf4ff; }

    /* Badges y Stock */
    .badge { background-color: #edf2f7; color: #4a5568; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: bold; }
    .stock { font-weight: bold; color: #38a169; }
    .stock.low-stock { color: #e53e3e; }

    /* Modal */
    .modal { border: none; border-radius: 12px; padding: 0; box-shadow: 0 10px 25px rgba(0,0,0,0.2); max-width: 500px; width: 100%; }
    .modal::backdrop { background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(3px); }
    .modal-content { padding: 25px; background: white; }
    .modal-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; grid-column: 1 / -1; }
</style>