#!/bin/bash

# Set your PostgreSQL container details
container_id="378e5970f8d9"
postgres_user="dinheirow"
postgres_password="t3st-back3nd"
postgres_database="dinheirow"
csv_file_path="./pokemon-data.csv"

# Copy the .csv file to the running PostgreSQL container
docker cp "${csv_file_path}" "${container_id}:/tmp/pokemon-data.csv"

# Run the import script inside the container
docker exec -it "${container_id}" bash -c "export PGPASSWORD=${postgres_password}; psql -h localhost -U ${postgres_user} -d ${postgres_database} -c \"\COPY pokemon FROM '/tmp/pokemon-data.csv' DELIMITER ',' CSV HEADER;\""

echo "Data import completed"
