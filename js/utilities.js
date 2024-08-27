function getTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementVal = parseInt(elementString);
    return elementVal;
}

function setText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getInputFieldValue(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    element.value = '';
    return elementValueString;
}

function settingDiscountAndTotal(numberPercentage, discountPriceField) {
    const total = getTextById("total-price");
    const discountPrice = total * (numberPercentage / 100);
    setText(discountPriceField, discountPrice);
    const grandTotal = total - discountPrice;
    setText("grand-total", grandTotal);
}