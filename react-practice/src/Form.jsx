function Form() {

    function signUpForm(formData) {
        const email = formData.get("email")
        const password = formData.get("password")
        console.log(email)
        console.log(password)
    }
    return (
        <section>
            <h1>Signup Form</h1>
            <form action={signUpForm}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="ayomide@gmail.com" id="email"/>
                <br/>

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="Enter password" id="password" />
                <br/>

                <button>Submit</button>
            </form>
        </section>
    )
}

export default Form
// the imperative way
// function handleSubmit(event) {
//     event.preventTarget()
//     const formEL = event.currentTarget
//     const formData = new FormData(formEL)
//     const email = formData.get("email")
//     console.log(email)
//     formEL.reset()
// }