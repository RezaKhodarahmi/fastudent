#!/bin/bash
# Path to your application directory
APP_DIR="/var/www/student/fastudent"

# Name of the file where the server's PID will be stored
PID_FILE="$APP_DIR/server.pid"

# Stop the currently running server
if [ -f $PID_FILE ]; then
    kill -9 $(cat $PID_FILE) && rm -f $PID_FILE
    echo "Stopped existing server."
fi

# Start the server
cd $APP_DIR
nohup node server.js & echo $! > $PID_FILE
echo "Started new server."

