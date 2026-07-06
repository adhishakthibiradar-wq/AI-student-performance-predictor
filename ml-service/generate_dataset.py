import random
import pandas as pd

rows = []

for _ in range(500):

    attendance = random.randint(10, 100)
    internal = random.randint(20, 100)
    assignment = random.randint(20, 100)

    # Marks are more important than attendance
    if internal < 40 or assignment < 40:
        result = "Fail"
    elif attendance < 20 and (internal < 50 or assignment < 50):
        result = "Fail"
    else:
        result = "Pass"

    rows.append({
        "attendance": attendance,
        "internal_marks": internal,
        "assignment_marks": assignment,
        "result": result
    })

df = pd.DataFrame(rows)

df.to_csv("student_data.csv", index=False)

print("✅ New dataset generated successfully!")