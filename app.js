let correctAnswers = 0
let wrongAnswers = 0
let count = 0
let rnd = Math.floor(Math.random() * 4) + 1

const questions = [
    {question:'What year did "Star Wars: Return of the Jedi" get released into theaters?', correct:"1983", 
    answer:["1971", "1984", "1989", "1983"]},
    {question:"What is the home planet Chewbacca and the Wookies?", correct:"Khashyyyk",
    answer:["Naboo", "Tatooine", "Alderaan", "Khashyyyk"]},
    {question:"What is the name of Boba Fett's spaceship called?", correct:"Slave 1",
    answer:["Death Star", "The X-Wing", "Slave 1", "Star Destroyer"]},
    {question:"What animals attach themselves to the Millennium Falcon?", correct:"Mynocks",
    answer:["Mynocks", "Wookies", "Ewok", "Gungan"]},
    {question:"Before he left the jedi, who was Count Dooku's padawan?", correct:"Qui-Gon-Jinn",
    answer:["Anakin", "Obi-Wan Kenobi", "Qui-Gon-Jinn", "Mace Windu"]},
    {question:"What do Han and Luke ride in the snow on Hoth?", correct:"Tauntaum",
    answer:["Bantha", "Tauntaum", "AT-AT", "Womp rat"]},
    {question:"Who do Obi-Wan and Yoda give Leia to?", correct:"Bail Organa",
    answer:["Palpatine", "Bail Organa", "Luke", "Kit Fisto"]},
    {question:"What color is Mace Windu's lightsaber?", correct:"Purple",
    answer:["Yellow", "Green", "Blue", "Purple"]},
    {question:"What animal did the visual effects crew study when designing the Imperial Walkers from the Empire Strikes Back?", correct:"Elephants",
    answer:["Elephants", "Penguins", "Lion", "Giraffe"]},
    {question:"What creature supposedly eats Bobba Fett?", correct:"Sarlacc",
    answer:["Dewback", "Varactyl", "Nexu", "Sarlacc"]}]

let correct = questions[count].correct
let cardMaker = () => {
        document.getElementById(`qst`).innerHTML = `${questions[count].question}`
        document.getElementById(`btn1`).innerHTML = `${questions[count].answer[0]}`
        document.getElementById(`btn2`).innerHTML = `${questions[count].answer[1]}`
        document.getElementById(`btn3`).innerHTML = `${questions[count].answer[2]}`
        document.getElementById(`btn4`).innerHTML = `${questions[count].answer[3]}`
        document.getElementById(`pic`).innerHTML = `<img src="./card${count}.jpg">`
        correct = questions[count].correct
        // console.log(count)
        count++
        if (count === 10){
            document.getElementById(`qst`).innerHTML = `${correctAnswers}`
            document.getElementById(`btn1`).innerHTML = 
            document.getElementById(`btn2`).innerHTML = ``
            document.getElementById(`btn3`).innerHTML = ``
            document.getElementById(`btn4`).innerHTML = ``
            document.getElementById(`pic`).innerHTML = `<img src="./card0.jpg">`
        }
        
    }

cardMaker()

let button = document.addEventListener(`click`, event => {
    if (event.target.innerHTML === correct){
        console.log(`correct`)
        correctAnswers++
        // console.log(correctAnswers)
    }
    if (event.target.className === `btn black`){
    console.log(event.target.innerHTML)
    cardMaker()
    }
})


