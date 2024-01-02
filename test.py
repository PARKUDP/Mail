import smtplib

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_email(user, password, recipient, subject, body):
    msg = MIMEMultipart()
    msg['From'] = user
    msg['To'] = recipient
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(user, password)
    text = msg.as_string()
    server.sendmail(user, recipient, text)
    server.quit()
    
user = input("ID入力>")
password = input("password入力>")
send_user = input("送信先>")
subject = input("件名>")
body = input("本文>")

send_email(user, password, send_user, subject, body)
