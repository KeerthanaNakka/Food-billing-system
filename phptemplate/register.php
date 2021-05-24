<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Methods: *');

$username="root";
$password="password";
$server='172.17.0.3';
$db='users';
$c=0;
$con=mysqli_connect($server,$username,  $password,$db);
$c=$c+1;
$username=$_POST['user_name'];
$pwd=$_POST['pwd'];
    $query="INSERT INTO  users (username,passwordd) VALUES ('$username','$pwd')";
if(mysqli_query($con,$query)){
    echo "Inserted";
}
else
{
    echo "$username";
}

?>