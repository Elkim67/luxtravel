<?php
header('Content-Type: application/json');

// Récupérer les données JSON envoyées par JavaScript
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Vérifier si les données requises sont présentes
if (!isset($data['full_name']) || !isset($data['phone']) || !isset($data['trip_type'])) {
    echo json_encode(['success' => false, 'message' => 'Données du formulaire manquantes (nom, téléphone, type de voyage).']);
    exit;
}

// Nettoyer les données du formulaire
$fullName = htmlspecialchars(trim($data['full_name']));
$phone = htmlspecialchars(trim($data['phone']));
$email = isset($data['email']) ? htmlspecialchars(trim($data['email'])) : 'Non fourni';
$tripType = htmlspecialchars(trim($data['trip_type']));
$desiredDate = isset($data['desired_date']) && !empty($data['desired_date']) ? htmlspecialchars(trim($data['desired_date'])) : 'Non spécifiée';
$numTravelers = isset($data['num_travelers']) && !empty($data['num_travelers']) ? htmlspecialchars(trim($data['num_travelers'])) : 'Non spécifié';
$description = isset($data['description']) ? htmlspecialchars(trim($data['description'])) : 'Non fournie';

// Votre adresse e-mail de destination
$to = 'eliekiwoy67@gmail.com'; 

// Sujet de l'e-mail
$email_subject = "Nouvelle demande de voyage de $fullName";

// Modèle de l'e-mail
$email_body = "Nom complet: $fullName\n";
$email_body .= "Téléphone: $phone\n";
$email_body .= "Email: $email\n";
$email_body .= "Type de voyage: $tripType\n";
$email_body .= "Date souhaitée: $desiredDate\n";
$email_body .= "Nombre de voyageurs: $numTravelers\n\n";
$email_body .= "Description de votre voyage:\n$description\n";

// En-têtes de l'e-mail
$headers = "From: Lux Travel Agency <noreply@votre-site.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Envoyer l'e-mail
if (mail($to, $email_subject, $email_body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'E-mail envoyé avec succès.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Échec de l\'envoi de l\'e-mail.']);
}
?>