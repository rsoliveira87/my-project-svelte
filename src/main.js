import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		title: 'Sistema de Academia',
		subtitle: 'Digite o nome do equipamento no campo abaixo para ver a foto'
	}
});

export default app;