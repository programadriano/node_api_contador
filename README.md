# node-api-contador
Projeto criado para demonstrar como fazer deploy no Azure e como escalar uma API desenvolvida em Node.js no Azure AKS

## Baixar os pacotes

npm install 

## Rodar o Projeto

npm start 

O projeto está com o pacote nodemon

## Para escalar a API foram criados dois arquivos 

* deployment: Os deployments são os objetos do K8S que controlam e fazer o deploy dos Pod;
* service: O service pode ser visto como um serviço que agrega os pods. Por exemplo, no seu deployment você pode inserir a tag: "app: XPTO". E no seu service, na sessão de Selector você pode adicionar a tag "app: XPTO" também. Assim, todos os Pods que contiverem esta tag serão agregados e expostos pelo service.

Comando para criação do POD:
kubectl apply -f .\deployment.yaml

Comando para criar o service:
kubectl apply -f .\service.yaml