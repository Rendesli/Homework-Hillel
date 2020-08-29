function type(a) {
    if (typeof a === "number") {
        return ("1");
    } else if (typeof a === "string") {
        return ("0");
    } else {
        return ("-1");
    }
}

type(Boolean);
