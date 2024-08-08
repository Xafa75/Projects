import requests
import json
import re
import time
import pandas as pd

api_key = "ApiKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw=="
url = "https://api-publica.datajud.cnj.jus.br/api_publica_tjrj/_search"
headers = {'Authorization': api_key,
           'Content-Type': 'application/json'}
listaProcessos = []
def envio(sort):
    while True:
        try:
            payload = json.dumps({
            "size":5000,
            "query":{"match" : {"assuntos.codigo": 3431}},
            "sort":[{"dataAjuizamento":{ "order" : "asc" }}],
            "search_after": [ sort ]
            })
            response = requests.request("POST",url,headers=headers, data=payload,timeout=10)
        except requests.exceptions.ReadTimeout:
            df = pd.DataFrame(listaProcessos, columns=('numeroProcesso','classe','orgao','strData', 'ultimaAtualizacao','formato','assuntos','sort'))
            print(df)
            break
        dadosBrutos = response.json()   
        dados_dict = dadosBrutos['hits']['hits']
        for i in dados_dict:
            orgao = i['_source']['orgaoJulgador']['nome']
            strData = i['_source']['dataAjuizamento']
            numeroProcesso = i['_source']['numeroProcesso']
            assuntos = i['_source']['assuntos']
            formato = i['_source']['formato']['nome']
            ultimaAtualizacao = i['_source']['dataHoraUltimaAtualizacao']
            classe = i["_source"]['classe']['nome']
            padrao = re.compile(r'20[1-2]\d......')
            sort = i['sort'][0]
            print(numeroProcesso,classe,orgao,strData, ultimaAtualizacao,formato,assuntos,sort)
            listaProcessos.append([numeroProcesso,classe,orgao,strData, ultimaAtualizacao,formato,assuntos,sort])

envio(sort = 0)

