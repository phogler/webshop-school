export const capitalize = (string: string) => {
    if (string === undefined) return;
    return string[0].toUpperCase() + string.substring(1);
};
