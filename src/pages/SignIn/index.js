import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
	email: Yup.string()
		.email('Insira um e-mail válido')
		.required('O e-mail é obrigatório'),
	password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
	function handleSubmit(data) {
		console.tron.log(data);
	}

	return (
		<>
			<Form schema={schema} onSubmit={handleSubmit}>
				<Input name="email" type="email" placeholder="Seu e-mail" />
				<Input
					name="password"
					type="password"
					placeholder="Sua senha secreta"
				/>

				<button type="submit"> Acessar</button>
				<Link to="/register">Criar conta gratuita</Link>
			</Form>
		</>
	);
}
