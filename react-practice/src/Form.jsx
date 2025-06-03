import "../src/form.css"

function Form() {

    function signUpForm(formData) {
        const data = Object.fromEntries(formData)
        // const dietaryData = data.dietaryRestrictions
        console.log(dietaryData)
    }
    return (
        <section>
            <h1>Signup Form</h1>
            <form action={signUpForm}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" defaultValue="ayomide@gmail.com" placeholder="ayomide@gmail.com" id="email"/>
                <br/>

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" defaultValue="password123" placeholder="Enter password" id="password" />
                <br/>

                <label htmlFor="description">Description: </label>
                <textarea id="description" name="description" defaultValue="Ayomide is a good boy!"></textarea>

                <fieldset>
                    <legend>Employment Status:</legend>
                    <label>
                        <input type="radio" name="employmentStatus" value="Unemployed"/>
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="Part-time"/>
                        Part-time
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" defaultChecked="true" value="Full-time" />
                        Full-time
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Dietary restrictions:</legend>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="kosher"/>
                        Kosher
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="vegan"/>
                        Vegan
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="glutten-free" defaultChecked="true" />
                        Glutten-free
                    </label>
                </fieldset>

                <label htmlFor="favColour">What is your Favourite Colour?</label>
                <select id="favColour" name="favColour" required>
                    <option value="">-- Choose a Colour --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
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