#!/bin/bash

npm run install
npm run typeorm migration:run
npm run dev
