function checkPassword(input) {
    const correctPassword = "s3cr3t!P@ssw0rd";

    if (input === correctPassword) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

checkPassword("s3cr3t!P@ssw0rd");