let averageGrade = Math.floor(Math.random() * 100) + 1;
console.log(`Середня оцінка студента: ${averageGrade}`);
if (averageGrade >= 91 && averageGrade <= 100){
    console.log('Відмінно');
} else if (averageGrade >= 81 && averageGrade <= 90){
    console.log('Дуже добре');
} else if (averageGrade >= 71 && averageGrade <= 80){
    console.log('Добре');
} else if (averageGrade >= 60 && averageGrade <= 70){
    console.log('Задовільно');
} else {
    console.log("Незадовільно");
}

