FROM python:3.8.0

RUN apt-get update && apt-get install -y \
    gcc \
    locales \
    xvfb \
    libfontconfig \
    wkhtmltopdf \
    --no-install-recommends && rm -rf /var/lib/apt/lists/*

# install application
COPY /backend/src/requirements.txt /prexicoin-app/requirements.txt

WORKDIR /prexicoin-app
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt

CMD ["uvicorn", "app.main:app", "--reload", "--host", "0.0.0.0", "--port", "3333"]