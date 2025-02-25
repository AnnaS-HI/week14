//Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. 
// Для генерации случайных оценок, используйте функцию Math.random().
const grades = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 1);

//Рассчитайте и выведите средний балл студентов, используя методы массивов.
const averageGrade = grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
document.getElementById('averageGrade').textContent = "Средний балл студентов: " + averageGrade;

// Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
const maxGrade = Math.max(...grades);
document.getElementById('maxGrade').textContent = "Максимальный балл: " + maxGrade;

// Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
const minGrade = Math.min(...grades);
document.getElementById('minGrade').textContent = "Минимальный балл: " + minGrade;

//Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60).
//  Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию.
//  Затем посчитайте количество оставшихся оценок и выведите результат.
const positivGradesCount = grades.filter(grade => grade >= 60).length;
document.getElementById('positiveGradesCount').textContent = "Количество студентов с положительной оценкой: " + positivGradesCount;

// Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60).
const negativGradesCount = grades.filter(grade => grade < 60).length;
document.getElementById('negativeGradesCount').textContent = "Количество студентов с отрицательной оценкой: " + negativGradesCount;

// Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E
const letterGrades = grades.map(grade => {
    if (grade >= 80) return 'A';
    if (grade >= 60) return 'B';
    if (grade >= 40) return 'C';
    if (grade >= 20) return 'D';
    return 'E';
});
document.getElementById('letterGrades').textContent = "Буквенные оценки: " + letterGrades.join(', ');
