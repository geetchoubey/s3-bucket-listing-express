# S3 Bucket Listing

To list and access objects stored in your S3 bucket

## Usage

1. Heroku
        
        $ npm i -g heroku
        $ heroku create <<app name>>
        
        Go to Heroku Dashboard and configure variables in project settings
        Required vars:
            - BUCKET_NAME
            - AWS_ACCESS_KEY_ID
            - AWS_SECRET_ACCESS_KEY
            - AWS_DEFAULT_REGION

2. Docker

        $ docker build -t <<image_name>> .
        $ docker run -p <port>:<port> -e "AWS_ACCESS_KEY_ID=<<access_key_id>>" -e "AWS_SECRET_ACCESS_KEY=<<secret_key>>" -e "BUCKET_NAME=<<bucket_name>>" <<image_name>> -d


