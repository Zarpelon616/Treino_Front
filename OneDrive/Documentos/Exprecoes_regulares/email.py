import re

regex = r"^[a-z]*.br$"

email = [input("Digite seu e-mail")]

for em in email:
    if re.match(regex, em):
        print("E-mail valido")
    else:
        print("O email não é valido")