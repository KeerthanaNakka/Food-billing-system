<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: *');

$SUCCESS_LOGIN="User details are correct";
$username="root";
$password="password";
$server='172.17.0.3';
$db='users';
$connect=mysqli_connect($server,$username, $password,$db) or die("Connection failed");

    $username=$_POST['user_name'];
    $password=$_POST['pwd'];
    $query="select * from users where username='$username' and passwordd='$password'";
    $result=mysqli_query($connect,$query);
    $count=mysqli_num_rows($result);
    if($count>0)
    {
        echo $count;
    }
    else
    {
        echo "try again";
    }
?>


