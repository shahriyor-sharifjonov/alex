<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    // от кого письмо
    $mail->setFrom('seo-personal@yandex.ru', 'alex.ru');
    // кому отправить
    $mail->addAddress('seo-personal@yandex.ru');

    // тема письмо
    $mail->Subject = $_POST['subject'];

    // time 
    date_default_timezone_set('Russia/Moskow');
    $date = date('d.m.Y H:i', time());

    // тело письмо
    $phone = str_replace(' ', '', $_POST['phone']);
    $body = '<h1 style="font-family: Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif; color: #282830; font-weight: 500;">'.$_POST['title'].'</h1>';
    $body.='<p style="font-size: 15px; font-family: Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif; color: #282830;"><strong style="font-weight: 500;">Дата заявки:</strong> '.$date.'</p>';

    if(trim(!empty($_POST['website']))){
        $body.='<p style="font-size: 15px; font-family: Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif; color: #282830;"><strong style="font-weight: 500;">Ссылка на сайт:</strong> <a href="'.$_POST['website'].'" style="color: #e75325 !important;"> '.$_POST['website'].'</a></p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body.='<p style="font-size: 15px; font-family: Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif; color: #282830;"><strong style="font-weight: 500;">Номер телефона:</strong> <a href="tel:'.$phone.'" style="color: #e75325 !important;"> '.$phone.'</a></p>';
    }

    $mail->Body = $body;

    // Отправляем
    if (!$mail->send()){  
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    echo json_encode($response);
?>