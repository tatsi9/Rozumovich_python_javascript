def enter_number():
    num = int(input("Введите число: "))
    if num > 7:
        print("Привет")

def enter_name():
    name = input("Введите имя: ")
    if name == "Вячеслав":
        print (f"Привет, {name}")
    else:
        print("Нет такого имени")


def div_three_from_input():
    num_list = input("Введите последовательность чисел в формате [num1, num2, num3, ...]: ")
    while not (len(num_list) > 2 and num_list[0] == '[' and num_list[-1] == ']'):
        num_list = input("Введите данные в указанном в условии формате: ")
    num_list = [i for i in num_list.strip("[]").split(',')]
    div_by_three = []
    for i in num_list:
        if i.isdigit():
            if int(i) % 3 == 0:
                div_by_three.append(i)
    if len(div_by_three):
        print(f"Из {num_list} кратными 3 являются: ")
        print(*div_by_three, sep=', ')
    else:
        print('Введенные данные не содержат чисел, кратных 3')

print()
enter_number()
print()

enter_name()
print()

div_three_from_input()
