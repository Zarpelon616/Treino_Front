#A biblioteca 're' é usada para trabalhar com expressões regulares
import re

#Expressão regular para números binários pares
regex = r"^[01]*0$"

#determina a variavel interativa
#Só funciona entre []
teste = [input("digite um número binário")]

#true ou false, que determina se é par ou não
for test in teste:
    #a função re.match verifica se a variavel 'teste', corresponde com o padrão 
    # determinado pela 'regex' e retorna um valor
    if re.match(regex, test):
        print(f"{test} é um número binário par.")
    else:
        print(f'{test} é um número binário impar.')