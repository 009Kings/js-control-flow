var grade = "89";
switch (true) {
    case (grade>=90):
        console.log("You got an A, great job!");
        break;
    case (grade>=80):
        console.log("You got an B");
        break;
    case (grade>=70):
        console.log("You got an C");
        break;
    case (grade>=60):
        console.log("You got an D, see a teacher for support");
        break;
    case (60>grade):
        console.log("You got an F, see a teacher for support");
        break;
    default:
        console.log("invalid entry")
}