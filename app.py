# /mon_journal_de_progression/app.py
from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

quotes = [
    "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute. - Confucius",
    "Le succès, c'est se promener d'échec en échec tout en restant motivé. - Winston Churchill",
    "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre. - Albert Einstein",
    "Ce qui ne nous tue pas nous rend plus forts. - Friedrich Nietzsche"
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-quote', methods=['GET'])
def get_quote():
    quote = random.choice(quotes)
    return jsonify({'quote': quote})

if __name__ == '__main__':
    app.run(debug=True)
