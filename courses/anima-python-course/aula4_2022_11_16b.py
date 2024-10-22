#1º passo: importar a biblioteca sqlite3
import sqlite3

#2º passo: estabelecer uma conexão com o banco
conexao = sqlite3.connect("dc_universe.db")

#3º passo: criar um objeto do tipo cursor
cursor =  conexao.cursor()

#4º passo: comando para inserir um herói/vilãobject
sql = "INSERT INTO pessoas (pessoa_id, nome, nome_civil, tipo) VALUES (12, 'Punchline', 'Alexis Kaye', 'Vilã(o)')"

#5º passo: executar o comando SQL
cursor.execute(sql)

#6º passo: confirmar o INSERT com commit() e fechar o banco
conexao.commit()
conexao.close()