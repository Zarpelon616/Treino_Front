import re

regex = r"^[01]*00$"

frase = [input("Digite uma palavra binaria")]

for fra in frase:
    if re.match(regex, fra):
        print(f"A frase {fra} termina com 00.")
    else:
        print(f"A frase {fra} não termia com 00.")