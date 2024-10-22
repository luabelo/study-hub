#1º passo: importar a biblioteca sqlite3
import sqlite3

#2º passo: estabelecer uma conexão com o banco
conexao = sqlite3.connect("dc_universe.db")

#3º passo: criar um objeto do tipo cursor
cursor =  conexao.cursor()

#4º passo: comando SQL do banco
sql = "SELECT pessoa_id, nome, nome_civil, tipo FROM pessoas"

#5º passo: executar o comando SQL no SQLlite (no cursor)
cursor.execute(sql)

#6º passo: exibir a consulta com todos os nomes de heróis e vilões do banco de dados
pessoas = cursor.fetchall()
for pessoa in pessoas:
  print(pessoa)

for pessoa in pessoas:
  print(f"Nome: {pessoa[1]} ({pessoa[3]})")