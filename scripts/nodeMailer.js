const nodemailer = require('nodemailer');

// Configuration du transporteur pour SMTP OVH
let transporter = nodemailer.createTransport({
  host: 'ssl0.ovh.net', // Serveur SMTP d'OVH
  port: 465, // Port SSL
  secure: true, // Utilisation de SSL
  auth: {
    user: 'ton-email@ton-domaine.com',  // Ton email OVH
    pass: 'ton-mot-de-passe-email' // Mot de passe de ton email OVH
  }
});

// Options de l'email
let mailOptions = {
  from: 'ton-email@ton-domaine.com',
  to: 'contact@stoners-geneve.com',
  subject: 'Nouveau Message via OVH',
  text: 'Hello, voici un email envoyé via le SMTP OVH!'
};

// Envoyer l'email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email envoyé: ' + info.response);
  }
});
