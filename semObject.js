let semesterSubjects = {
    "semester1" : ["communicative English", "Engineering Maths 1", "Engineering Physics", "Engineering Chemistry",
                    "Proplem solving & Python Programming", "Engineering Graphics"],

    "semester2" : ["Technical English", "Engineering Maths 2", "Physics for information science", "BEEM", 
                     "Environmental science & Engineering", "Programming in C"],

    "semester3" : ["Digital Principles & Designs", "Discrete Mathematics","Data Structure", "Object Oriented Programming",
                    "Communication Engineering", "Interpersonal Skills / Listening & Speaking"],

    "semester4" : ["Probability & queueing Theory", "Computer Architecture", "DataBase Management System","Operating System",
                    "Design & Analysis of Algorithm", "Software Engineering"],

    "semester5" : ["Algebra & Number Theory", "Computer Networks", "Microprocessor & Microcontroller", "Theory of Computation",
                    "Object Oriented Analysis & Design", "Geographic information System"],

    "semester6" : ["Internet Programming", "Artificial Intelligence", "Mobile Computing", "Compiler Design", "Distributed System",
                    "Data Warehouse & Data Mining"],


    "semester7" : ["Principles of Management", "Cryptography & Network Security", "Cloud Computing", "Big Data Analytics",
                    "Hospital Management", "Multi Core Architecture & Programming"],
                    
    "semester8" : ["Professional Ethics Engineering", "Information Retrival Techniques"]
};

for(let value in semesterSubjects){
    console.log(value);
    console.log(semesterSubjects[value]);
}