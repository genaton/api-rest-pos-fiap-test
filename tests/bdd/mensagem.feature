# language: pt
Funcionalidade: Gestionar Mensagem

    Cenario: Cadastrar mensagem
        Dado que eu tenha uma mensagem valida
        Quando enviar a mensagem para cadastrar
        Entao a mensagem deve ser registrada com sucesso
    
    Cenario: Ao cadastrar mensagem sem usuario deve gerar um erro
        Dado que eu tenha uma mensagem sem o campo usuario
        Quando enviar a mensagem para cadastrar 
        Entao a mensagem não é cadastrada
        E deve apresentar erro indicando que o campo 'usuario' é obrigatório
