export const getCookie = () => {
    const cookie = document.cookie;
    if (!cookie) return null;
    const userCookie = JSON.parse(cookie.split('=')[1]);

    return userCookie;
};

export const setCookie = (dataUser) => {
    document.cookie = `user=${JSON.stringify(dataUser)}`;
};

export const destroyCookie = () => {
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    window.location.href = '/login';
};
