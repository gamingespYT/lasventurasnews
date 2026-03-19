// ========================================
// MÓDULO DE AUTENTICACIÓN — Las Venturas News
// ========================================

const Auth = (() => {
    const STORAGE_KEY = 'lvn_auth_token';
    const USER_KEY = 'lvn_auth_user';

    // Usuarios válidos del sistema
    const USUARIOS = [
        { id: 1, usuario: 'jarias', password: 'lasventurasnews', nombre: 'Josep Arias', rol: 'Admin' }
    ];

    /**
     * Genera un token UUID v4
     */
    function generarToken() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    /**
     * Intenta iniciar sesión con las credenciales dadas
     * @param {string} usuario
     * @param {string} password
     * @returns {{ success: boolean, error?: string }}
     */
    function login(usuario, password) {
        if (!usuario || !password) {
            return { success: false, error: 'Por favor, completa todos los campos.' };
        }

        const user = USUARIOS.find(
            u => u.usuario.toLowerCase() === usuario.toLowerCase() && u.password === password
        );

        if (!user) {
            return { success: false, error: 'Usuario o contraseña incorrectos.' };
        }

        const token = generarToken();
        const sesion = {
            id: user.id,
            nombre: user.nombre,
            usuario: user.usuario,
            rol: user.rol,
            loginAt: new Date().toISOString()
        };

        localStorage.setItem(STORAGE_KEY, token);
        localStorage.setItem(USER_KEY, JSON.stringify(sesion));

        return { success: true, token, user: sesion };
    }

    /**
     * Cierra la sesión actual
     */
    function logout() {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(USER_KEY);
    }

    /**
     * Comprueba si hay una sesión activa
     * @returns {boolean}
     */
    function isAuthenticated() {
        const token = localStorage.getItem(STORAGE_KEY);
        const user = localStorage.getItem(USER_KEY);
        return !!(token && user);
    }

    /**
     * Devuelve los datos del usuario logueado
     * @returns {object|null}
     */
    function getUsuario() {
        if (!isAuthenticated()) return null;
        try {
            return JSON.parse(localStorage.getItem(USER_KEY));
        } catch {
            return null;
        }
    }

    /**
     * Devuelve el token actual
     * @returns {string|null}
     */
    function getToken() {
        return localStorage.getItem(STORAGE_KEY);
    }

    /**
     * Protege una página: redirige al login si no hay sesión
     */
    function protegerPagina() {
        if (!isAuthenticated()) {
            window.location.href = 'index.html';
        }
    }

    /**
     * Si ya está logueado, redirige al dashboard
     */
    function redirigirSiLogueado() {
        if (isAuthenticated()) {
            window.location.href = 'dashboard.html';
        }
    }

    return {
        login,
        logout,
        isAuthenticated,
        getUsuario,
        getToken,
        protegerPagina,
        redirigirSiLogueado
    };
})();
