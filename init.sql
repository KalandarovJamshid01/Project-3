Drop Table IF EXISTS connections;

CREATE TABLE connections (
    id SERIAL PRIMARY KEY,
    mail TEXT,
    title TEXT,
    short_description TEXT,
    long_description TEXT,
    contact TEXT,
    img_url TEXT,
    created_at TIMESTAMP
);
Drop Table IF EXISTS connections;

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    img_url TEXT,
    title TEXT,
    context TEXT,
    file_name TEXT,
    width INT,
    height INT,
    format TEXT,
    folder TEXT,
    bytes INT,
    created_at TIMESTAMP
);