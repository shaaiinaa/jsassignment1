function main() {
  const input = Number(prompt("Enter number of inputs"));
  if (Number.isNaN(input)) {
    alert("Invalid number");
    return;
  }
  const arr = [];
  for (let i = 0; i < input; i++) {
    const obj = prompt("Enter input");
    //   name: prompt(`Enter name ${i + 1}`),
    //   math: Number(prompt("Enter math marks")),
    //   science: Number(prompt("Enter science marks")),
    //   arts: Number(prompt("Enter arts marks")),

    //doubt that how to check for 3 numbers
    // arr.push(obj); can we directly push like this
    let details = obj.split(",");
    arr.push({
      studentName: details[0],
      studentMath: details[1],
      studentScience: details[2],
      studentArts: details[3],
      //totalMarks: studentMath + studentScience + studentArts,
      totalMarks: Number(details[1]) + Number(details[2]) + Number(details[3]),
    });
  }
  arr.sort((a, b) => {
    if (a.totalMarks > b.totalMarks) return -1;
    else if (a.totalMarks > b.totalMarks) return 1;
    if (a.totalMarks == b.totalMarks) {
      if (a.studentMath > b.studentMath) return -1;
      else if (a.studentMath > b.studentMath) return 1;
    }
    if (a.studentMath == b.studentMath) {
      if (a.studentName > b.studentName) return 1;
      else if (a.studentName < b.studentName) return -1;
    }
  });
  for (let i = 0; i < arr.length; i++) {
    const name = arr[i].studentName;
    const mathMarks = arr[i].studentMath;
    const scienceMarks = arr[i].studentScience;
    const artsMarks = arr[i].studentArts;
    document.write(
      `<h3>${name} ${mathMarks} ${scienceMarks} ${artsMarks}</h3>`
    );
  }
}
main();
