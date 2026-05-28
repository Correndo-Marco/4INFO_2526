export const only_upper = (s) => {
    return s.split("").filter((el) => (el.match("[A-Z]")));
};
