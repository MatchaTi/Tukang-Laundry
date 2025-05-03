export const getCookie = () => {
    const dataUser = {
        id: 1,
        name: 'Raana Matcha',
        role: 'admin',
    };
    document.cookie = `user=${JSON.stringify(dataUser)}`;
    const cookie = document.cookie;
    const userCookie = JSON.parse(cookie.split('=')[1]);

    return userCookie;
};

export const destroyCookie = () => {
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    window.location.href = '/login';
};
