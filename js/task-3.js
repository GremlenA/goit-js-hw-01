function getElementWidth(content, padding, border)
{
    const c = parseFloat(content);
    const p = parseFloat(padding);
    const b = parseFloat(border);

    return c + 2 * p + 2 * b;
}

console.log(getElementWidth("50", "8", "4"));
console.log(getElementWidth("60", "12", "8.5"));
console.log(getElementWidth("200", "0", "0"));
