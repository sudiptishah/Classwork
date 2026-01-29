function calculateResult() {
  let sub1 = Number(document.getElementById("s1").value);
  let sub2 = Number(document.getElementById("s2").value);
  let sub3 = Number(document.getElementById("s3").value);
  let sub4 = Number(document.getElementById("s4").value);
  let sub5 = Number(document.getElementById("s5").value);
  let sub6 = Number(document.getElementById("s6").value);
  let sub7 = Number(document.getElementById("s7").value);
  let sub8 = Number(document.getElementById("s8").value);

  let totalMarks = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8;

  document.getElementById("total").innerText = "Total Marks: " + totalMarks;

  if (totalMarks >= 600) {
    document.getElementById("result").innerText = "Result: PASS";
  } else {
    document.getElementById("result").innerText = "Result: FAIL";
  }
}
