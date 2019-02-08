const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector("span.fontweight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

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

// when I change my select for typeface, update the font family

typefaceTag.addEventListener("input", function() {
    outputTag.style.fontFamily = this.value
})

// when I change my type size slider, update the text next to it in the span
// and change the outputTag's font size

typesizeTag.addEventListener("input", function() {
    outputTag.style.fontSize = this.value + "px"
    typesizeOutput.innerHTML = this.value + "px"
})

fontweightTag.addEventListener("input", function() {
    outputTag.style.fontWeight = this.value
    fontweightOutput.innerHTML = this.value
})

lineheightTag.addEventListener("input", function() {
    outputTag.style.lineHeight = this.value
    lineheightOutput.innerHTML = this.value
})

// when I change my italic checkbox, update the font style to either normal or italic if it's checked or not

italicTag.addEventListener("change", function() {
    if (this.checked) {
        outputTag.style.fontStyle = "italic"
    }
    else {
        outputTag.style.fontStyle = ""
    }
})

