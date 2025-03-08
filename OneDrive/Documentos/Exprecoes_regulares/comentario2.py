import re

regex = r"^/[*]?[a-z]*[*]?/$"

comentario = [input("Digite um comentario de multiplas linhas")]

for com in comentario:
    if re.match(regex, com):
        print(f"{com} é um comentario de multiplas linhas")
    else:
        print(f"{com} não é um comentario de multiplas linhas")