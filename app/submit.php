<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
/**
 * Created by PhpStorm.
 * User: Rinko
 * Date: 2016/9/3
 * Time: 20:32
 */
try {
    $opt_values=array(PDO::ATTR_PERSISTENT=>true,PDO::ATTR_ERRMODE=>2,PDO::MYSQL_ATTR_INIT_COMMAND=>'SET NAMES utf8');
    $db = new PDO('mysql:host=localhost;dbname=ISTA', 'ista', 'join_ista',$opt_values);
    $db->query("set names 'utf8'");
    $db->query("set character set 'utf8'");
    $name = $_POST['name'];
    $stu_id = $_POST['stu_id'];
    $class = $_POST['class'];
    $tel = $_POST['tel'];
    $department = 0;
    switch ($_POST['department']) {
        case 'hardware':
            $department = 1;
            break;
        case 'electronic technique';
            $department = 2;
            break;
        case 'software':
            $department = 3;
            break;
        case 'esports':
            $department = 4;
            break;
        case 'humanresource':
            $department = 5;
            break;
        default:
            $department = 0;
    }
    $sql_insert = "insert into Application VALUES (uuid_short(),:name,:stu_id,:class,:tel,:department)";
    $sql = $db->prepare($sql_insert);
    $sql->bindValue(':name', $name);
    $sql->bindValue(':stu_id', $stu_id);
    $sql->bindValue(':class', $class);
    $sql->bindValue(':tel', $tel);
    $sql->bindValue(':department', $department);
    $sql->execute();
//    echo 'success';
    echo $name."|".$stu_id."|".$class."|".$tel."|".$department;
} catch (PDOException $e){
    echo $e->getMessage();
    die("Database Error: " . $e->getMessage());
}
?>