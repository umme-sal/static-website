# static-website
static website

while creating bucket Uncheck:
 Block all public access 

 upload all the file

 # Enable Static Hosting

 Properties → Static website hosting

 Enable
 
Index document: index.html

# Make Files Public

Permissions → Bucket Policy

{
  "Version": "2012-10-17",
  
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
    
  ]
}

# Open Website

Properties → Static website hosting

url like http://diabetes-app-123.s3-website-ap-south-1.amazonaws.com


# AZURE

web app

open web app go to resource

under deployment -> deployment center -> source github  -> basic authentication  -> save 
