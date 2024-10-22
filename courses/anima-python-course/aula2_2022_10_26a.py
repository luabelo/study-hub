# comando input(): quero permitir que o usuário digite algo
nome = input("Digite o seu nome: ")

# comando de saída = exibir na tela
print(f"\nSeja bem vindo(a) {nome}!")

# teste
idade = int(input ("Qual a sua idade? "))
print(f"Entendi, você tem {idade} anos")
genero = input(f"\nQual o seu gênero, {nome}?\nF - Feminino\nM - Masculino\n")

# e se eu quiser mostrar o dobro da idade informada
#dobro = idade * 2
#print(f"O dobro da idade de {nome} é {dobro}")

# estrutura condicional o "SE" (if)
if (idade >= 18):
  print("\nVocê é maior de idade, ótimo! Já pode beber ou dirigir...")
else:
  print("\nVocê ainda não pode beber e nem dirigir!")

# se eu quisessem perguntar o gênero (M = Masculino e F = Feminino)
if (idade >= 18 and genero == "M"):
  print("E você também precisa/precisou prestar o serviço militar obrigatório!")
