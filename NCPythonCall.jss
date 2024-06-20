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

Run ("C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe python C:\\Users\\Matheus\\ncat.py")
EndScript