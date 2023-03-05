FROM python:3.9-alpine

WORKDIR /app

COPY . .

RUN apk add gcc g++ make libffi-dev openssl-dev git

# RUN pip install --upgrade pip

RUN pip3 install -r requirements.txt --no-cache-dir

CMD ["gunicorn", "joy_app.wsgi:application", "--bind", "0:8000" ] 