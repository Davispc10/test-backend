#!/bin/bash

# Get the container ID by container name
container_name="test_backend_postgres_container"
container_id=$(docker ps --format '{{.ID}} {{.Names}}' | grep "${container_name}" | awk '{print $1}')

if [ -z "${container_id}" ]; then
  echo "Container not found with name: ${container_name}"
  exit 1
fi

# Set your PostgreSQL container details
postgres_user="dinheirow"
postgres_password="t3st-back3nd"
postgres_database="dinheirow"
csv_file_path="./pokemon-data.csv"

# Copy the .csv file to the running PostgreSQL container
docker cp "${csv_file_path}" "${container_id}:/tmp/pokemon-data.csv"

# Run the import script inside the container
docker exec -it "${container_id}" bash -c "export PGPASSWORD=${postgres_password}; psql -h localhost -U ${postgres_user} -d ${postgres_database} -c \"\COPY pokemon FROM '/tmp/pokemon-data.csv' DELIMITER ',' CSV HEADER;\""

echo "Data import completed"
