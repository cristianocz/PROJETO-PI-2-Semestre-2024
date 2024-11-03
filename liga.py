from flask import Flask, request, jsonify

app = Flask(__name__)

# Exemplo de status no servidor (poderia estar em um banco de dados)
status_do_conserto = {
    'etapa': 'Recebimento da Máquina'
}

@app.route('/atualizar-status', methods=['POST'])
def atualizar_status():
    global status_do_conserto
    dados = request.get_json()
    status_do_conserto['etapa'] = dados['etapa']
    return 'Status atualizado', 200

@app.route('/status', methods=['GET'])
def status():
    return jsonify(status_do_conserto)

if __name__ == '__main__':
    app.run(debug=True)
