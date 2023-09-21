const navBtn = document.querySelector(".hamburger")
const navSmallDevice = document.querySelector(".btn-nav")
const close = navSmallDevice.querySelector(".close")
const allNavLinks = navSmallDevice.querySelectorAll(".nav-link")

const form = document.querySelector("form")
const email = form.querySelector('#email')
const msg = form.querySelector('#message')
const btnSend = form.querySelector('.send')

const showNav = () => {
	navSmallDevice.style.display = "flex"
}
const closeNav = () => {
	navSmallDevice.style.display = "none"
	allNavLinks.forEach(item => {
		item.addEventListener("click", () => {
			navSmallDevice.style.display = "none"
		})
	})
}

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorText = formBox.querySelector(".errortext")

	formBox.classList.add("error")
	errorText.textContent = input.id + msg
}
const clearError = input => {
	const formBox = input.parentElement
	const errorText = formBox.querySelector(".errortext")

	formBox.classList.remove("error")
	errorText.textContent = ""
}
const clearAllErrors = input => {
	input.forEach(el => {
		clearError(el)
	})
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === "") {
			showError(el, " cannot be empty")
		} else {
			clearError(el)
		}
	})
}

const checkEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, " is not an email")
	}
}

const formValidation = (input, form) => {
	let errors = 0
	input.forEach(el => {
		if (el.parentElement.classList.contains("error")) {
			errors++
		}
	})
	if (errors == 0) {
		form.submit()
	}
}
const clearInput = input => {
    input.forEach(el => {
    el.value = ""
})
}

btnSend.addEventListener("click", e => {
    e.preventDefault()
    checkForm([email, message])
    checkEmail(email)
    formValidation([email, message], form)
})

navBtn.addEventListener("click", showNav)
close.addEventListener("click", closeNav)
