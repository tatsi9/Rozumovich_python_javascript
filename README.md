# Rozumovich_python_javascript
Technical task for Andersen QA Automation Internship

The task is implemented both on *Python* and *Javascript*. The files can be run through the *console* (terminal) (cmd.exe in Windows)

! *Python 3* and *Node.js* and *npm* should be installed on your device.

+ To run rozumovich_python.py use 'python rozumovich_python.py' command
+ To run rozumovich-javascript.js use 'node rozumovich-javascript.js' command

> ## Задание
> ### Составьте алгоритм
> *Если введенное число больше 7, то вывести “Привет”*
> *Если введенное имя совпадает с “Вячеслав”, то вывести “Привет, Вячеслав”, если нет, то вывести "Нет такого имени"*
> *На входе есть числовой массив, необходимо вывести элементы массива кратные 3*

> ### Ответьте на вопросы
> *Дана скобочная последовательность: [((())()(())]]*
> *Можно ли считать эту последовательность правильной?*

**ОТВЕТ**: Нет, учитывая определение [правильной скобочной последовательности](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D1%81%D0%BA%D0%BE%D0%B1%D0%BE%D1%87%D0%BD%D0%B0%D1%8F_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C). 

> *Если ответ на предыдущий вопрос “нет”, то что необходимо в ней изменить, чтобы она стала правильной?*

**ОТВЕТ**: Превратить данную последовательность в правильную можно следующими способами:
1) Добавить 1 открывающую '[' и 1 закрывающую ')'. Результат: [[((()))()(())]]    
2) Убрать лишнюю закрывающую ']' в конце и открывающую '(' в начале. Результат: [(())()(())]
