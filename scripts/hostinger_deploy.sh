
cd ..
#ng build -prod
echo "ftp hostinger deploy v1.0"
HOST=ftp.yashgajera.com
USER=u152615618
PASS=Yash...9274
#try{
ftp -i $HOST <<EOF
$USER 
$PASS
mkdir v2
cd v2
lcd dist
mput *	
bye
EOF
echo "Press enter to exit..!"
read temp
exit;

