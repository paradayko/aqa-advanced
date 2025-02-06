// мій варіант, але я перепровірив себе через чат GPT і він сказав що ми не можемо використовувати порівняння в самих кейсах 
// (як ти намагаєшся зробити з умовами типу averageGrade <= 91 && averageGrade >= 100). Конструкція switch перевіряє конкретне значення, а не умови.


let averageGrade = Math.floor(Math.random() * 100) + 1;
console.log(`Середня оцінка студента: ${averageGrade}`);

switch (averageGrade) {
    case (averageGrade <=91 && averageGrade >=100):
        console.log('Відмінно');
        break;
    case (averageGrade <=81 && averageGrade >=90):
        console.log('Дуже добре');
        break;
    case (averageGrade <=71 && averageGrade >=80):
        console.log('Добре');
        break;
    case (averageGrade <=60 && averageGrade >=70):
        console.log('Задовільно');
        break;
    default:
        console.log('Незадовільно');
}



// Ось варіант який запропонував мені чат GPT
let averageGrade2 = Math.floor(Math.random() * 100) + 1;
console.log(`Середня оцінка студента: ${averageGrade2}`);

// Перетворюємо середню оцінку на категорію для switch
let gradeCategory = Math.floor(averageGrade2 / 10);

switch (gradeCategory) {
    case 10: // оцінки 91-100
        console.log('Відмінно');
        break;
    case 9: // оцінки 81-90
        console.log('Дуже добре');
        break;
    case 8: // оцінки 71-80
        console.log('Добре');
        break;
    case 7: // оцінки 60-70
        console.log('Задовільно');
        break;
    default: // оцінки нижче 60
        console.log('Незадовільно');
}
