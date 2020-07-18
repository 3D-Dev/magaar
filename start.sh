!/bin/bash
cd /var/www/advanced-merng-starter
# Demo
yarn run build
# Production
# yarn run build -- --release
node build/server.js
