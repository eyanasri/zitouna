from flask import Flask, request, jsonify
from flask_pymongo import PyMongo

COLLECTION_NAME = 'STANDARD_SELECTION'



app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/temenos24"
mongodb_client = PyMongo(app)
db = mongodb_client.db


#db.init_app(app)

def to_json(self):
    return {"_id": self._id,
            "sys_field_name": self.sys_field_name}

@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


@app.route('/findAll', methods=['GET'])
def query_records():
    #name = request.args.get('name')
    documents = db.STANDARD_SELECTION.find()
    return jsonify([document for document in documents])


@app.route("/find/<tablename>")
def find_table(tablename):
    table = db.STANDARD_SELECTION.find_one_or_404({"_id": tablename})
    return jsonify(table)

if __name__ == '__main__':
    app.run(debug=True)
