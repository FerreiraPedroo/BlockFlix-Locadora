import { Formik, ErrorMessage } from "formik";
import { 
    ContainerPage, ContainerLogin, ContainerRemember, 
    ButtonLogin, 
    TextLoginTitle, TextLoginEntrar, TextLoginError, TextLoginRemember,
    InputText, InputPassword, InputCheckbox,
    Form
    } from "../styles/login.style";



export default function Login() {
    const initialValues = {
        user: "",
        password: "",
        remember: 0,
    }
    const validate = values => {
        const errors = {};
        if (!values.user) {
            errors.user = "Informe o seu usuário";
        }
        if (!values.password) {
            errors.password = "Digite a senha";
        }

        return errors;
    }
    const onSubmit = values => {
        console.log("ON SUBMIT SEND", values);
    }

    return (
        <ContainerPage>
            <ContainerLogin>

                <TextLoginTitle>BLOCKFLIX</TextLoginTitle>
                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={onSubmit}
                >{(props) => (
                    <Form onSubmit={props.handleSubmit} >

                        <TextLoginEntrar>Entrar</TextLoginEntrar>
                        <InputText
                            id="user"
                            name="user"
                            type="text"
                            placeholder="Usuário"
                            onChange={props.handleChange}
                        />
                        <TextLoginError><ErrorMessage name="user" />&nbsp;</TextLoginError>

                        <InputPassword
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Senha"
                            onChange={props.handleChange}
                        />
                        <TextLoginError><ErrorMessage name="password" />&nbsp;</TextLoginError>
                        <ButtonLogin type="submit" model="login">Entrar</ButtonLogin>

                        <ContainerRemember>
                            <InputCheckbox model="checkbox-login" />
                            <TextLoginRemember>Lembrar usuário</TextLoginRemember>
                        </ContainerRemember>


                    </Form>
                )}
                </Formik>


            </ContainerLogin>
        </ContainerPage>
    )
}