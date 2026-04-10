<script>
    import '$lib/styles/auth.css';
    let { form } = $props();
</script>

<main class="auth-container">
    <article class="auth-card">
        <header>
            <h2>Crear Cuenta</h2>
            <p>Regístrate para gestionar el inventario</p>
        </header>
        
        {#if form?.error}
            <p class="error-msg" role="alert">{form.error}</p>
        {/if}

        <form method="POST" class="auth-form">
            <label for="reg-usuario">Usuario</label>
            <input id="reg-usuario" type="text" name="usuario" required>
            
            <label for="reg-password">Contraseña</label>
            <input id="reg-password" type="password" name="password" required>
            
            <button type="submit" class="btn-submit">Registrarme</button>
        </form>
        
        <footer>
            <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
        </footer>
    </article>
</main>