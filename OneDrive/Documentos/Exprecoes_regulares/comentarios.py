import re

regex = r"^//[a-z]*$"

comentario = [input("Digite um comentario no estilo JS")]

for com in comentario:
    if re.match(regex, com):
        print(f"{com} segue o padrão JS")
    else:
        print(f"{com} não segue o padrão JS")