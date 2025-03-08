import re

#nesse cenário vamos considerar que os números em sc começam com 49
regex = r"^49[0-9]*$"

numero = [input("Digite um número de telefone INCLUINDO O CÓDIGO DE AREA")]

for num in numero:
    if re.match(regex, num):
        print(f"{num} é um número de SC")
    else:
        print(f"{num} não é um número de SC")