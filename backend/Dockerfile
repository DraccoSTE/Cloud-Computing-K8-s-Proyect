FROM python:3.10-slim

WORKDIR /usr/src/mvp/backend

COPY requirements.txt /usr/src/mvp/backend/

RUN pip install --no-cache-dir -r requirements.txt

COPY . /usr/src/mvp/backend/

CMD ["tail", "-f", "/dev/null"]