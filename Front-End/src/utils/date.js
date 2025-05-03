export function formatDate(date) {
    const formattedDate = new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);

    return formattedDate;
}

export function getCurrentDate() {
    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(today);

    return formattedDate;
}
