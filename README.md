# sistema_gerenciamento_tarefas
Aplicação simples para gerenciar tarefas com back-end e front-end.

## Tecnologias Utilizadas

### Back-end
- **Java** - Linguagem para o desenvolvimento do back-end
- **Spring Framework** - Para mapeamento de Get, Post, Put, Delete direcionados para o localhost:8080/tarefas, além de permitir a conexão do código Java com o Banco de tarefas.
- **Eclipse IDE** - Para conectar os recursos spring com o banco de dados e editar/rodar código Java.
- **Postman** - Um framework que acessa o localhost e testa, através de métodos como o POST, o funcionamento do back-end.

### Front-End
- **html e css** - Para criar a interface do usuário (Para incrementos como arrendodamento dos campos do formulário e centralização, foi usado CSS).
- **Javascript** - para direcionar um POST e enviar dados para o banco de dados controlado através do back-end.
- **Live Server** - Uma extensão do VSCode que abre um servidor no navegador, onde se consegue conferir em tempo real como está ficando a interface.
- **VSCode**

### Banco de Dados
- **MySQL Server** - Servidor banco de dados.
- **MySQL Workbench** - Editar, criar a tabela de banco de dados necessária.

## Executando o projeto
### Criando o banco de dados
- Instale o MySQL Server para criar o banco de dados, nomeie o host e crie uma senha para acessá-lo.
- Instale o MySQL Workbench, abra-o e inicie a conexão com o localhost através da senha.
- Quando acessar o workspace, abra o SQL File `banco_tarefas.sql`, disponível na raíz deste repositório.
- Execute o script para criar o banco `banco_de_tarefas` e, dentro dele, a tabela `tarefa`.
### Back-end
- Baixe o arquivo `projetoapi.zip` disponível na pasta back-end do repositório.
- Extraia o arquivo.
- Abra o Eclipse ou IDE Java e importe a pasta resultante da extração: `projetoapi`.
- Você verá o projeto java com as classes desenvolvidas com dependências do Springboot.
- Execute o código para que o Spring se conecte com o banco.
- Baixe e abra o Postman.
- No Postman, digite o link do servidor e da tabela: `localhost:8080/tarefas`.
- Alterne de GET para POST, para adicionar uma tarefa nova.
- CLique em `body` e depois em `raw`.
- Escreva em JSON os dados. EX.:
     ```
     {   
        "titulo": "Trabalhar",
        "descricao": "sair"
     }
- Clique em `Send`.Observe que a descrição precisa ter 10 caracteres ou mais, ou então, uma mensagem de invalidação será exibida. Caso o título esteja em branco, o mesmo acontece. Isto mostra o código Java em ação, através de bibliotecas de validação.
- Depois de criar a tarefa, alterne para GET e clique em `Send`.
- Esta é a lista de todas as tarefas, acessadas pelo GetMapping do Spring.
- Para deletar uma tarefa, alterne para DELETE no postman e especifique o id da lista no localhost. EX.: `localhost:8080/tarefas/5` (Isto deletará a tarefa de ID `5`).
- Experimente criar tarefas através do postman.

### Front - End 
- Baixe o VSCode e abra os arquivos presentes na pasta `front-end` deste repositório.
- Instale a extensão LiveServer. Ela permitirá vermos como está a interface a medida que estilizamos.
- Em `index.html` ,no explorer do VScode, clique com o botão direito e clique em *Open with Live server*.
- Uma janela no navegador se abrirá com a interface do usuário em formulário.
- Digite os campos da tarefa e clique em `Criar Tarefa`.
- Para conferir, volte no postman e mande um GET para ver a tarefa adicionada pelo Front, ou simplesmente digite o link `localhost:8080/tarefas` no navegador.

  



