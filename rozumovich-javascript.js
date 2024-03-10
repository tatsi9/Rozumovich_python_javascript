'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const task1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('\nВведите число: ', (inNum) => {
        if (inNum > 7) {
            console.log('Привет\n');
        }
        resolve()
    })
  })
}

const task2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите имя: ', (inName) => {
        if (inName == 'Вячеслав') {
            console.log(`Привет, ${inName} \n`);
        }
        else {
            console.log(`Нет такого имени \n`)
        }
        resolve()
    })    
  })
}

const task3 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Введите последовательность чисел в виде массива [num1, num2, num3, ...]: ', (numInput) => {

            let numList = numInput.replace(/[\[\]]/g, '').split(', ')
            const divByThree = []
            for (let num of numList) {
                parseInt(num);
                if (num % 3 == 0) {
                    divByThree.push(num);
                }
            }
            if (divByThree.length == 0) {
                console.log('Введенные данные не содержат чисел, кратных 3')
            }
            else {
                console.log(`Из ${numInput} числами, кратными 3, являются: ${divByThree.join(', ')}`);
            }
            resolve()
        })
    })
}


const main = async () => {
  await task1()
  await task2()
  await task3()
  rl.close()
}

main()