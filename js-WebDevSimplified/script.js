//Select all elements needed
const form = document.querySelector("#quiz-form")
const answer = Array.from(document.querySelectorAll(".answer"))
const question = document.querySelectorAll(".question-item")
const alert = document.querySelector("#alert")

//event listener in form
form.addEventListener("submit", (e) => {
  //prevent default behaviour
  e.preventDefault()

  //add incorrect in all questions as default so that unchecked questions are shown incorrect
  question.forEach((questions) => {
    questions.classList.add("incorrect")
    questions.classList.remove("correct")
  })

  //get all selected answers
  const submittedAnswer = answer.filter((ans) => {
    return ans.checked
  })

  //loop through selected answers and check if the value is true
  submittedAnswer.forEach((ans) => {
    const questionItem = ans.closest(".question-item")
    const isCorrect = ans.value === "true"
    if (isCorrect) {
      //add the class correct to the parent with the class question-item and remove inocrrect
      questionItem.classList.remove("incorrect")
      questionItem.classList.add("correct")
    } else {
      questionItem.classList.remove("correct")
      questionItem.classList.add("incorrect")
    }
  })
  //alert if all answers are correct
  const allTrue = submittedAnswer.every((ans) => ans.value === "true")
  const allAnswered = submittedAnswer.length === question.length
  if (allTrue && allAnswered) {
    alert.classList.add("active")
    setTimeout(() => alert.classList.remove("active"), 2000)
  }
})
