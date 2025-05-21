export function formatDate(date) {
    if (!(date instanceof Date) || isNaN(date)) {
        throw new Error('Parameter harus berupa objek Date yang valid.');
    }

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
