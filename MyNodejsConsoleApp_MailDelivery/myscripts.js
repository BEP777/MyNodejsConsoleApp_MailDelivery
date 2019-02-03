function chooseDay() {
    var e = document.getElementById("day_pick");
    var dayUser = e.options[e.selectedIndex].text;
    console.log(`var=${dayUser}`);
}

function chooseMonth() {
    var e = document.getElementById("month_pick");
    var monthUser = e.options[e.selectedIndex].text;
    console.log(`var=${monthUser}`);
}

function chooseNumOfLessons() {
    var e = document.getElementById("num_of_lessons_pick");
    var dayUser = e.options[e.selectedIndex].text;
    console.log(`var=${dayUser}`);
}

function getLessomContent() {
    var content = document.getElementById("lesson_matirial").value;
    console.log(`var=${content}`);
}

function getComments() {
    var comments = document.getElementById("lesson_comments").value;
    console.log(`var=${comments}`);
}

//function WriteFile() {
//    //C:\Users\avsha\Source\Repos\LessonsProject\LessonsProject
//    var fh = fopen("C:\Users\avsha\Source\Repos\LessonsProject\LessonsProject\MyFile.txt", 3); // Open the file for writing

//    if (fh != -1) // If the file has been successfully opened
//    {
//        var str = "Some text goes here...";
//        fwrite(fh, str); // Write the string to a file
//        fclose(fh); // Close the file 
//    }

//}