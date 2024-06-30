# PocAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Rodar o projeto

npm install

ng serve

## Páginas

- lista-contatos
  Nessa página tem um botão (Adcionar Contato) que redireciona para a página formulário.

- formulário
  Nessa página tem um botão (Voltar) que redireciona para a página lista-contatos.

  Para navegar tá utilizando o RouterLink, observa como ele é adicionado no .html, não esqueça de importar no arquivo .ts de cada página.

  O cabeçalho é apenas um componente da página e não precisa colocar path pra ele no app.routes.
  Também não deve usar aspas nos paths. ex: visualizarVM's.
