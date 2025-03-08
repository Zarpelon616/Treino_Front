import re

regex = r"^'[a-z]*'$"

frase = [input("Digite uma frase (entre aspas simples ou não)")]

for fra in frase:
    if re.match(regex, fra):
        print(f"A frase {fra} esta entre aspas")
    else:
        print(f"A frase {fra} não esta entre aspas")