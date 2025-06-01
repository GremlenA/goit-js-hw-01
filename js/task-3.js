function getElementWidth (content,padding,border) 
{
       const overallWidth = parseFloat(content) + parseFloat(padding) + parseFloat(border);
       return overallWidth;
}

console.log(getElementWidth("50", "8", "4")); // 74
console.log(getElementWidth("60", "12", "8.5")); // 101
console.log(getElementWidth("200", "0", "0")); // 200
