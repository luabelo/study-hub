contador = 1
# Exibir de 1 até 10 repetidamente
while(contador <= 10):
  print(contador)
  contador = contador+1 # Contador += 1

# Laço for (python for = for each)
fruta = "morango"
print(fruta)
fruta1 = "morango"
fruta2 = "laranja"
fruta3 = "pêra"

# Lista
frutas = ["morango", "laranja", "pêra"]

print(frutas)

# Como exibir apenas uma das frutas da listagem
print(frutas[2]) 
# Vai mostrar a 3º fruta (pêra), pois, a contagem começa em zero

# Exibir quantas frutas tem na listagem
print(len(frutas)) 
# Len (Length) = tamanho

#Quero incluir uma fruta nova
frutas.append("manga")

print(len(frutas)) 
print(frutas)

print(frutas[0])
print(frutas[1])
print(frutas[2])
print(frutas[3])
#print(frutas[4])

print ("\nExemplo das frutas com o while...\n")

i=0
while(i<len(frutas)):
  print(frutas[i])
  i = i + 1

print("\nExemplo das frutas com FOR\n")
for fruta in frutas:
  print(fruta)