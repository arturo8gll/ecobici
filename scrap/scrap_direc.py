import csv
import requests
import time
import json

API_KEY="pk.51dfc5643661b582c2948d2f41c68dd3"

direcciones = []

with open("./csv/estaciones.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        if row[9]=="location/lat":
            continue
        r = requests.get(f"https://us1.locationiq.com/v1/reverse.php?key={API_KEY}&lat={row[9]}&lon={row[10]}&format=json")
        tmp=dict(r.json())
        print(tmp)
        direcciones.append(tmp)
        time.sleep(1)
        # cont=cont+1
        # if cont == 2: 
        # break


with open('./csv/direcciones.json', 'w') as fout:
    json.dump(direcciones, fout)