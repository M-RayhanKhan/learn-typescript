import React ,{ useState } from "react";

const From = () => {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
  
    const [user, setUser] = useState({name: '', email: ''})

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(user);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        // setUser({...user ,name: e.target.value})
    }

    // DRY => don't Repeat yourself

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange}
                    className="border-2"
                    type="text"
                    name="userName"
                    id="name" />
                <input
                    onChange={handleChange}
                    className="border-2"
                    type="text"
                    name="email"
                    id="email" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default From;