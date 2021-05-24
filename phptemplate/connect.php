<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Methods: *');

$username="root";
$password="password";
$server='172.17.0.3';
$db='cust_info';
$c=0;
$con=mysqli_connect($server,$username,  $password,$db);
$c=$c+1;
$name=$_POST['first_name'];
$mobile=$_POST['mobile'];
$orderdate=$_POST['orderdate'];

        $rice= $_POST ['rice'];

        $snacks= $_POST ['snacks'];

        $drinks= $_POST ['drinks'];

        $krushers= $_POST ['krushers'];

    $query="INSERT INTO  cust_info (cname,mobile,orderdate,rice,snacks,drinks,krushers) VALUES ('$name','$mobile','$orderdate','$rice','$snacks','$drinks','$krushers')";
if(mysqli_query($con,$query)){
    echo "Inserted";
}
else
{
    echo "$rice";
}
?>