<script>
    import '$lib/styles/auth.css';
    let { form } = $props();
</script>

<main class="auth-container">
    <article class="auth-card">
        <header>
            <h2>Iniciar Sesión</h2>
            <p>Ingresa al panel de control</p>
        </header>
        
        {#if form?.error}
            <p class="error-msg" role="alert">{form.error}</p>
        {/if}

        <form method="POST" class="auth-form">
            <label for="l-usuario">Usuario</label>
            <input id="l-usuario" type="text" name="usuario" required>
            
            <label for="l-password">Contraseña</label>
            <input id="l-password" type="password" name="password" required>
            
            <button type="submit" class="btn-submit">Entrar</button>
        </form>

        <footer>
            <p>¿Eres nuevo? <a href="/registro">Crea una cuenta</a></p>
        </footer>
    </article>
</main>