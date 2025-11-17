function showStudent() {
    document.getElementById("studentForm").style.display = "block";
    document.getElementById("adminForm").style.display = "none";

    document.getElementById("studentBtn").classList.add("active");
    document.getElementById("adminBtn").classList.remove("active");
}

function showAdmin() {
    document.getElementById("studentForm").style.display = "none";
    document.getElementById("adminForm").style.display = "block";

    document.getElementById("adminBtn").classList.add("active");
    document.getElementById("studentBtn").classList.remove("active");
}


function studentLogin() {
    let prn = document.getElementById("studentPRN").value;
    let pass = document.getElementById("studentPass").value;

    if (prn === "20250802351" && pass === "123456") {
        window.location.href = "student.html";
    } else {
        document.getElementById("errorMsg").innerText = "Invalid Student Credentials";
    }
}

function adminLogin() {
    let user = document.getElementById("adminUser").value;
    let pass = document.getElementById("adminPass").value;

    if (user === "admin" && pass === "123456") {
        window.location.href = "admin.html";
    } else {
        document.getElementById("errorMsg").innerText = "Invalid Admin Credentials";
    }
}
