const app = document.getElementById("app");


/* =========================
   SUBJECTS
========================= */
const grade12NationalSubjects = [
    "English",
    "Mathematics",
    "Aptitude",
    "Physics",
    "Chemistry",
    "Biology"
];

const subjects = {

    Grade9: [
        "Amharic",
        "English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "History",
        "Geography",
        "Economics",
        "IT",
        "Citizen ship",
        "HP"
    ],

    Grade10: [
        "Amharic",
        "English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "History",
        "Geography",
        "Economics",
        "IT",
        "Citizen ship",
        "HP"
    ],

    Grade11: [
        "Amharic",
        "English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Agriculture",
        "IT",
        "WEB" 

    
    ],

    Grade12: [
        "Amharic",
        "English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Agriculture",
        "IT",
        "Aptitude" 
    ]

};


/* =========================
   HOME
========================= */

function showHome() {

    app.innerHTML = `

        <div class="page-title">

            <h2>Select your grade</h2>

            <p>
                Choose a grade to browse its past examinations.
            </p>

        </div>


        <div class="card-grid">

            <div class="card"
                 onclick="showGrade('Grade9')">

                <div class="card-number">09</div>

                <div>
                    <h3>Grade 9</h3>
                    <p>Past examinations</p>
                </div>

                <div class="arrow">→</div>

            </div>


            <div class="card"
                 onclick="showGrade('Grade10')">

                <div class="card-number">10</div>

                <div>
                    <h3>Grade 10</h3>
                    <p>Past examinations</p>
                </div>

                <div class="arrow">→</div>

            </div>


            <div class="card"
                 onclick="showGrade('Grade11')">

                <div class="card-number">11</div>

                <div>
                    <h3>Grade 11</h3>
                    <p>Past examinations</p>
                </div>

                <div class="arrow">→</div>

            </div>


            <div class="card"
                 onclick="showGrade('Grade12')">

                <div class="card-number">12</div>

                <div>
                    <h3>Grade 12</h3>
                    <p>Past examinations</p>
                </div>

                <div class="arrow">→</div>

            </div>

        </div>
    `;
}


/* =========================
   GRADE
========================= */

function showGrade(grade) {

    let pretest = "";
let model = "";

if (grade === "Grade12") {
    pretest = `
        <div class="card" onclick="showPretest()">
            <div class="card-number">P</div>
            <div><h3>Pre-test</h3><p>Grade 12 pre-test</p></div>
            <div class="arrow">→</div>
        </div>
    `;

    model = `
        <div class="card" onclick="showModel()">
            <div class="card-number">M</div>
            <div><h3>Model Exam</h3><p>Grade 12 model examination</p></div>
            <div class="arrow">→</div>
        </div>
    `;
}


    app.innerHTML = `

        <button class="back-button"
                onclick="showHome()">

            ← Back to grades

        </button>


        <div class="page-title">

            <h2>${grade}</h2>

            <p>
                Choose a semester.
            </p>

        </div>


        <div class="card-grid">

            <div class="card"
                 onclick="showSemester('${grade}', 'Semester1')">

                <div class="card-number">01</div>

                <div>
                    <h3>Semester 1</h3>
                    <p>Mid 1, Mid 2 and Final</p>
                </div>

                <div class="arrow">→</div>

            </div>


            <div class="card"
                 onclick="showSemester('${grade}', 'Semester2')">

                <div class="card-number">02</div>

                <div>
                    <h3>Semester 2</h3>
                    <p>Mid 1, Mid 2 and Final</p>
                </div>

                <div class="arrow">→</div>

            </div>


            ${pretest}
            ${model}


        </div>

    `;
}


/* =========================
   SEMESTER
========================= */

function showSemester(grade, semester) {

    app.innerHTML = `

        <button class="back-button"
                onclick="showGrade('${grade}')">

            ← Back

        </button>


        <div class="page-title">

            <h2>${semester}</h2>

            <p>${grade}</p>

        </div>


        <div class="card-grid">

            <div class="card"
                 onclick="showExamType('${grade}', '${semester}', 'Mid1')">

                <div class="card-number">M1</div>

                <div>
                    <h3>Mid 1</h3>
                    <p>First midterm</p>
                </div>

                <div class="arrow">→</div>

            </div>


            <div class="card"
                 onclick="showExamType('${grade}', '${semester}', 'Mid2')">

                <div class="card-number">M2</div>

                <div>
                    <h3>Mid 2</h3>
                    <p>Second midterm</p>
                </div>

                <div class="arrow">→</div>

            </div>


            <div class="card"
                 onclick="showExamType('${grade}', '${semester}', 'Final')">

                <div class="card-number">F</div>

                <div>
                    <h3>Final</h3>
                    <p>Final examination</p>
                </div>

                <div class="arrow">→</div>

            </div>

        </div>

    `;
}


/* =========================
   EXAM TYPE
========================= */

function showExamType(grade, semester, exam) {

    app.innerHTML = `

        <button class="back-button"
                onclick="showSemester('${grade}', '${semester}')">

            ← Back

        </button>


        <div class="page-title">

            <h2>${exam}</h2>

            <p>
                ${grade} • ${semester}
            </p>

        </div>


        <div class="card-grid">

            ${createSubjects(grade, semester, exam)}

        </div>

    `;
}


/* =========================
   PRETEST
========================= */

function showPretest() {

    app.innerHTML = `

        <button class="back-button"
                onclick="showGrade('Grade12')">

            ← Back

        </button>


        <div class="page-title">

            <h2>Pre-test</h2>

            <p>Grade 12</p>

        </div>


        <div class="card-grid">

            ${createNationalSubjects("Pretest")}

        </div>

    `;
}
function createNationalSubjects(exam) {
    return grade12NationalSubjects.map(function(subject) {
        return `
            <div class="card subject-card"
                 onclick="openNationalExam('${exam}', '${subject}')">
                <div class="subject-icon">📄</div>
                <div><h3>${subject}</h3><p>View exam paper</p></div>
                <div class="arrow">→</div>
            </div>
        `;
    }).join("");
}
function showModel() {
    app.innerHTML = `
        <button class="back-button" onclick="showGrade('Grade12')">← Back</button>
        <div class="page-title">
            <h2>Model Exam</h2>
            <p>Grade 12</p>
        </div>
        <div class="card-grid">
            ${createNationalSubjects("Model")}
        </div>
    `;
}
function openNationalExam(exam, subject) {
    let folder = exam === "Pretest" ? "Pretest" : "Model";

    let filePath = `exams/Grade12/${folder}/${subject}.pdf`;

    app.innerHTML = `
        <button class="back-button"
                onclick="${exam === "Pretest" ? "showPretest()" : "showModel()"}">
            ← Back
        </button>

        <div class="page-title">
            <h2>${subject}</h2>
            <p>${exam} Exam</p>
        </div>

        <div class="exam-paper">
            <iframe
                src="${filePath}"
                width="100%"
                height="700px"
                style="border: none;">
            </iframe>
        </div>
    `;
}

/* =========================
   SUBJECTS
========================= */

function createSubjects(grade, semester, exam) {

    return subjects[grade].map(function(subject) {

        return `

            <div class="card subject-card"
                 onclick="openExam(
                    '${grade}',
                    '${semester}',
                    '${exam}',
                    '${subject}'
                 )">

                <div class="subject-icon">
                    📄
                </div>

                <div>
                    <h3>${subject}</h3>
                    <p>View exam paper</p>
                </div>

                <div class="arrow">
                    →
                </div>

            </div>

        `;

    }).join("");
}


/* =========================
   OPEN EXAM
========================= */

function openExam(grade, semester, exam, subject) {

    let filePath;

    if (exam === "Pretest") {
        filePath = `exams/${grade}/Pretest/${subject}.pdf`;
    } else {
        filePath = `exams/${grade}/${semester}/${exam}/${subject}.pdf`;
    }

    app.innerHTML = `
        <button class="back-button"
                onclick="showExamType('${grade}', '${semester}', '${exam}')">
            ← Back
        </button>

        <div class="page-title">
            <h2>${subject}</h2>
            <p>Exam Paper</p>
        </div>

        <div class="exam-paper">
            <iframe
                src="${filePath}"
                width="100%"
                height="700px"
                style="border: none;">
            </iframe>
        </div>
    `;
}

showHome();