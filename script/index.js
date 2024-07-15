document.addEventListener("DOMContentLoaded", () => {
    let dom_age = document.getElementById("age");
    const DATE_BIRTHS = new Date("2004/01/29"); 
    let age = CurrentAge(DATE_BIRTHS);
    dom_age.innerText = `${age} ${GetAgeSuffix(age)}`;
});


function CurrentAge (date_births) {
    let now = new Date(); 
    let difference = now - date_births;  
    let age = new Date(difference).getUTCFullYear() - 1970;
    return age;
}


function GetAgeSuffix(age) {
    let lastDigit = age % 10;
    let lastTwoDigits = age % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return "лет";
    }
    if (lastDigit === 1) {
        return "год";
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return "года";
    }
    return "лет";
}