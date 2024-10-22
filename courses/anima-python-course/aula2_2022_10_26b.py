# pede o nome do aluno e sua nota
nome = input ("Olá! Qual o seu nome?\n")
print (f"Bem vindo(a) {nome}!\n")
nota = float(input("Qual foi sua nota nessa prova?\n"))

if (nota == 10):
  print (f"\nParabéns, {nome}! Você tirou a nota máxima!")
elif (nota >=7 and nota <10):
  print (f"\nParabéns, {nome}! Você foi aprovado(a).")
else:
  print(f"\nQue pena, {nome}... Você foi reprovado(a).")