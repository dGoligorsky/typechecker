const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

// when I type in the sentence tag (input), update the output tag accordingly
// if there's not value, put in the original text

sentenceTag.addEventListener("keyup", function() {
    if (this.value) {
        outputTag.value = this.value
    }
    else {
        outputTag.value = originalText
    }
})

// when I type in the output tag, update the input tag

outputTag.addEventListener("keyup", function() {
    sentenceTag.value = this.value
})

// when I change my type size slider, update the text next to it in the span
// and change the outputTag's font size

typesizeTag.addEventListener("input", function() {
    outputTag.style.fontSize = this.value + "px"
    typesizeOutput.innerHTML = this.value + "px"
})

lineheightTag.addEventListener("input", function() {
    outputTag.style.lineHeight = this.value
    lineheightOutput.innerHTML = this.value
})