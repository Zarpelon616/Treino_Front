import re

regex = r"^[A-Z]{3}-\d{4}$"

#ex de placa valida ABC-1234 seguindo o padrão
placa = [input("Digite uma placa")]

for pl in placa:
    if re.match(regex, pl):
        print(f"{pl} é uma placa valida")
    else:
        print(f"{pl} não é uma placa valida")