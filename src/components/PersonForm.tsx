import { useState, FormEvent } from "react";

function Form() {
    const [person, setPerson] = useState({
        name: "",
        age: 0
    });

    const handlePersonChange = (evt: FormEvent) => {
        const { target: {name, value} } = evt;
        setPerson((prevValue) => ({ ...prevValue, [name]: value }));
    };

    return (
        <form>
            <div className="mt-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control p-3 fs-3"
                    value={person.name}
                    onChange={(e) => handlePersonChange(e)}
                />
            </div>
            <div className="mt-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    type="number"
                    id="age" // Fix: use "age" as id
                    name="age"
                    className="form-control p-3 fs-3 fs-5"
                    value={person.age}
                    onChange={(e) => handlePersonChange(e)}
                />
            </div>
            <div className="mt-3">
                <button className="btn btn-primary btn-lg">Submit</button>
            </div>
        </form>
    );
}

export default Form;


export { Form };