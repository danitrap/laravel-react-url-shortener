export const validateUrl = url => {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
};
