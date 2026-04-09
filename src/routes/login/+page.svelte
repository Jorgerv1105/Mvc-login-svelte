<script>
    let { form } = $props();
</script>

<main class="container login-container">
    <section class="card login-card">
        <h2 class="text-center">Iniciar Sesión</h2>
        <p class="text-center subtitle">Ingresa al panel de control</p>
        
        {#if form?.error}
            <div class="alert alert-danger">{form.error}</div>
        {/if}

        <form method="POST" class="stack-form">
            <div class="input-group">
                <label for="l-usuario">Usuario</label>
                <input id="l-usuario" type="text" name="usuario" placeholder="Tu usuario" required>
            </div>
            
            <div class="input-group">
                <label for="l-password">Contraseña</label>
                <input id="l-password" type="password" name="password" placeholder="Tu contraseña" required>
            </div>
            
            <button type="submit" class="btn btn-primary full-width">Entrar al Sistema</button>
        </form>

        <div class="register-link">
            <p>¿Eres nuevo? <a href="/registro">Crea una cuenta aquí</a></p>
        </div>
    </section>
</main>

<style>
    :global(body) { font-family: 'Segoe UI', sans-serif; background-color: #f0f4f8; margin: 0; }
    .login-container { display: flex; justify-content: center; align-items: center; min-height: 100vh; }
    .login-card { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); width: 350px; }
    .text-center { text-align: center; }
    h2 { color: #1a365d; }
    .subtitle { color: #718096; font-size: 0.9em; margin-bottom: 20px; }
    .stack-form { display: flex; flex-direction: column; gap: 15px; }
    .input-group { display: flex; flex-direction: column; gap: 5px; }
    label { font-size: 0.85em; font-weight: bold; }
    input { padding: 10px; border: 1px solid #cbd5e0; border-radius: 6px; }
    .btn { padding: 12px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
    .btn-primary { background-color: #3182ce; color: white; }
    .full-width { width: 100%; }
    .alert-danger { background-color: #fed7d7; color: #c53030; padding: 10px; border-radius: 6px; text-align: center; margin-bottom: 15px; }
    .register-link { text-align: center; margin-top: 20px; font-size: 0.9em; border-top: 1px solid #eee; padding-top: 15px; }
</style>