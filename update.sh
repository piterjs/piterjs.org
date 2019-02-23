wget -O ./meetup/meetup.data.json "https://api.airtable.com/v0/app23d1bSu43arYuu/Events?fields[]=Date%20from&fields[]=Event%20number&fields[]=Place&fields[]=Speakers&fields[]=Speeches&api_key=$AIRTABLE_KEY"
wget -O ./speech/speech.data.json "https://api.airtable.com/v0/app23d1bSu43arYuu/Speeches?fields[]=Description&fields[]=Name&fields[]=Slides&fields[]=Video&fields[]=Speakers&fields[]=Topics&api_key=$AIRTABLE_KEY"
wget -O ./speaker/speaker.data.json "https://api.airtable.com/v0/app23d1bSu43arYuu/Speakers?fields[]=Company%20%26%20position&fields[]=Name&fields[]=Notes&fields[]=Photo&api_key=$AIRTABLE_KEY"
git commit -a -m "Data updated $( date )"
