<script>
    let { form } = $props();
</script>

<main class="container login-container">
    <section class="card login-card">
        <h2 class="text-center">Crear Cuenta Nueva</h2>
        <p class="text-center subtitle">Regístrate para gestionar el inventario</p>
        
        {#if form?.error}
            <div class="alert alert-danger">{form.error}</div>
        {/if}

        <form method="POST" class="stack-form">
            <div class="input-group">
                <label for="reg-usuario">Elige un Usuario</label>
                <input id="reg-usuario" type="text" name="usuario" placeholder="Nuevo usuario" required>
            </div>
            
            <div class="input-group">
                <label for="reg-password">Crea una Contraseña</label>
                <input id="reg-password" type="password" name="password" placeholder="Nueva contraseña" required>
            </div>
            
            <button type="submit" class="btn btn-success full-width">Registrarme</button>
        </form>
        <div class="register-link"><p>¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a></p></div>
    </section>
</main>

<style>
    /* ... (mantén tus estilos actuales) ... */
    .login-container { display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
    .login-card { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); width: 100%; max-width: 400px; }
    .text-center { text-align: center; margin: 0; }
    h2 { color: #2f855a; margin-bottom: 5px; }
    .subtitle { color: #718096; font-size: 0.9em; margin-bottom: 25px; }
    .stack-form { display: flex; flex-direction: column; gap: 15px; }
    .input-group { display: flex; flex-direction: column; }
    label { font-size: 0.85em; font-weight: 600; color: #4a5568; margin-bottom: 5px; }
    input { padding: 12px; border: 1px solid #cbd5e0; border-radius: 6px; font-size: 1em; }
    input:focus { outline: none; border-color: #38a169; box-shadow: 0 0 0 3px rgba(56,161,105,0.2); }
    .btn { padding: 12px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; font-size: 1em; }
    .btn-success { background-color: #38a169; color: white; }
    .btn-success:hover { background-color: #2f855a; }
    .full-width { width: 100%; margin-top: 10px; }
    .alert-danger { background-color: #fed7d7; color: #c53030; padding: 10px; border-radius: 6px; margin-bottom: 20px; text-align: center; font-weight: bold; }
    .register-link { text-align: center; margin-top: 25px; font-size: 0.9em; border-top: 1px solid #edf2f7; padding-top: 20px; }
    .register-link a { color: #38a169; text-decoration: none; font-weight: bold; }
    .register-link a:hover { text-decoration: underline; }
</style>