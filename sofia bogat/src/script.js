let answer = []
questions = [
     'Как ваше имя?',
     'Какая ваша фамилия?',
    'Сколько вам лет?',
    'Ваш эмаил?',
    'Ваш пароль?'
]

for(let i = 0;i< questions.length; i++){
      answer[i] = prompt(questions[i])}

      document.write(answer)