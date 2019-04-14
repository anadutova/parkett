const linkNetlify = 'https://parkett-klub-netlify.herokuapp.com/';
const linkLocalhost = 'https://parkett-klub.herokuapp.com/';
let link = linkLocalhost;
if (typeof window !== 'undefined' && window.location.href.includes('netlify')) link = linkNetlify;

export function isLoggedIn() {
    if (typeof window !== 'undefined') {
        const last = localStorage.getItem('date');
        if (!last) {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('date');
            localStorage.removeItem('id');
            return false;
        }
        if ((new Date()).getTime() - (new Date(last)).getTime() > 10000000) {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('date');
            localStorage.removeItem('id');
            return false;
        }
        return !!localStorage.getItem('token');
    }
    return false;
}

export function getID() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('id');
    }
    return null;
}

export function getToken() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
}

async function fetchMe() {
    if (isLoggedIn()) {
        const response = await fetch(`${link}users/me?token=${getToken()}`);
        return response.json();
    }
    return { name: 'Példa Béla', role: 'főszerep', email: 'barb@ra.com' };
}

export function setToken() {
    if (!getToken()) {
        const token = new URL(window.location.href).searchParams.get('token');
        if (token) {
            if (typeof window !== 'undefined') {
                localStorage.setItem('token', token);
                localStorage.setItem('date', new Date());
                fetchMe().then((response) => {
                    localStorage.setItem('role', response.role);
                    localStorage.setItem('id', response.id);
                });
            }
        }
    }
}

export function getRole() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('role');
    }
    return null;
}

export function isAdmin() {
    if (typeof window !== 'undefined') {
        return getRole() === 'admin';
    }
    return true;
}

export function isEditor() {
    if (typeof window !== 'undefined') {
        return getRole() === 'admin' || getRole() === 'editor';
    }
    return true;
}

export function logOut() {
    if (isLoggedIn() && typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('date');
        localStorage.removeItem('id');
    }
}

export const getAuthHeader = token => ['Authorization', `Bearer ${token}`];

const AUTH_URL = 'http://auth.sch.bme.hu/site/login/';

const PARAMS = {
    client_id: '74854237956044948092',
    response_type: 'code',
    grant_type: 'authorization_code',
    scope: 'basic',
};

export function getLoginUrl() {
    const searchParams = new URLSearchParams(PARAMS);
    return `${AUTH_URL}?${searchParams.toString()}+displayName+sn+givenName+mail+eduPersonEntitlement+linkedAccounts`;
}
