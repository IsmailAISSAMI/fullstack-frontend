import React, { useState } from "react"; 
import authService from "../../services/auth.service";
import TitlePage from '../../components/UI/Title/TitlePage';
import Input from '../../components/UI/Input/Input';
import styles from "./index.module.scss";
const Index = () => {
    const [user, setUser] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        authService.login(user)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <TitlePage title="Login page" />
            <form className={styles.form__login} onSubmit={(e) => handleSubmit(e)}>
                <Input
                    type="email"
                    label="Email"
                    id="email"
                    name="email"
                    placeholder="Mon email"
                    required={true}
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value })
                    }}
                />
                <Input
                    type="password"
                    label="Mot de passe"
                    id="password"
                    name="password"
                    placeholder="Mon mot de passe"
                    required={true}
                    onChange={(e) => {
                        setUser({ ...user, password: e.target.value })
                    }}
                />
                <input className="btn btn-black" type="submit" value="Connection" />
            </form>
        </div>
    );
}

export default Index;