#1º passo: importar a biblioteca sqlite3
import sqlite3

#passos 2 e 3 virarão função conectar()
def conectar():
  #2º passo: estabelecer uma conexão com o banco
  conexao = sqlite3.connect("dc_universe.db")

  #3º passo: criar um objeto do tipo cursor
  cursor =  conexao.cursor()
  
  return conexao, cursor