# VM-Software---Caixa-de-supermercado

📦 Guia Básico de Comandos Git do Projeto

Este guia apresenta os comandos principais do Git utilizados durante o desenvolvimento do projeto, facilitando o controle de versões e o trabalho em equipe.

📥 Clonar o repositório (primeiro acesso)

Utilize esse comando quando você ainda não possui o projeto no seu computador.

git clone URL_DO_REPOSITORIO

Depois acesse a pasta do projeto:

cd nome-do-projeto
🔄 Atualizar o projeto local

Esse comando baixa as alterações mais recentes que estão no repositório remoto.

git pull

É recomendado executá-lo antes de começar a programar, evitando conflitos com alterações feitas por outros membros da equipe.

📁 Verificar o estado dos arquivos

Mostra quais arquivos foram modificados, adicionados ou removidos no projeto.

git status
➕ Preparar arquivos para commit

Adicionar todos os arquivos alterados:

git add .

Adicionar um arquivo específico:

git add nome-do-arquivo
💾 Registrar alterações (commit)

Salva as mudanças feitas no projeto no histórico local do Git.

git commit -m "Descrição da alteração"

Exemplo:

git commit -m "Implementa componente de pagamento"
🚀 Enviar alterações para o GitHub

Depois de fazer o commit, envie as alterações para o repositório remoto.

git push origin main
🔁 Fluxo de trabalho recomendado

Durante o desenvolvimento, o fluxo mais comum é:

git pull
git add .
git commit -m "descrição da alteração"
git push
🛠 Comando adicional

Visualizar o histórico de commits do projeto:

git log
