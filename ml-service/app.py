from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

# Load trained model
model = joblib.load("model.pkl")

@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    attendance = data["attendance"]
    internal_marks = data["internal_marks"]
    assignment_marks = data["assignment_marks"]

    input_data = pd.DataFrame([{
        "attendance": attendance,
        "internal_marks": internal_marks,
        "assignment_marks": assignment_marks
    }])

    prediction = model.predict(input_data)[0]

    return jsonify({
        "prediction": prediction
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)