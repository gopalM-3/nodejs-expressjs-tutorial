const {readFile, writeFile} = require("fs").promises

const start = async () => {
    try {
        const data1 = await readFile("./content/file1.txt", "utf8")
        const data2 = await readFile("./content/file2.txt", "utf8")
        await writeFile("./content/file3.txt", `Combination of ${data1} and ${data2}`, {flag: 'a'})
        console.log("Done!");
    }
    catch (error) {
        console.log(error);
    }
}

start()
console.log("Start!");