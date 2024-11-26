const Question = require('./models/Question');
const Consultant = require('./models/Consultant');

const consultant1 = new Consultant(crypto.randomUUID(), 'Иван Иванов');
const consultant2 = new Consultant(crypto.randomUUID(), 'Петр Петров');

const question1 = new Question(crypto.randomUUID(), 'Как установить программу?');
const question2 = new Question(crypto.randomUUID(), 'Как настроить VPN?');
const question3 = new Question(crypto.randomUUID(), 'Как обновить операционную систему?');

consultant1.answerQuestion(
    question1,
    'Пожалуйста, следуйте инструкции по установке.'
);
consultant2.answerQuestion(
    question2,
    'Для настройки VPN обратитесь к руководству пользователя.'
);
consultant1.answerQuestion(
    question3,
    'Обновите операционную систему через системные настройки.'
);
consultant2.answerQuestion(
    question1,
    'Также убедитесь, что у вас есть все необходимые права администратора.'
);

question2.close();

console.log('Информация о вопросах:');
console.log(question1.toString());
console.log(question2.toString());
console.log(question3.toString());

console.log('\nИнформация о консультантах:');
console.log(consultant1.toString());
console.log(consultant2.toString());

console.log('\nОтветы на вопрос 1:');
question1.answers.forEach(answer => console.log(answer.toString()));

console.log('\nОтветы на вопрос 2:');
question2.answers.forEach(answer => console.log(answer.toString()));

console.log('\nОтветы на вопрос 3:');
question3.answers.forEach(answer => console.log(answer.toString()));

console.log('\nВопросы, на которые ответил консультант 1:');
consultant1.answeredQuestions.forEach(question => console.log(question.toString()));

console.log('\nВопросы, на которые ответил консультант 2:');
consultant2.answeredQuestions.forEach(question => console.log(question.toString()));