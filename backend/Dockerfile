FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /backend
WORKDIR /backend
COPY . /backend/
RUN pip install -r /backend/r.txt
RUN python manage.py collectstatic




