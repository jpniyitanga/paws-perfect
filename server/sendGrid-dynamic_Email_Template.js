// curl -X "POST" "https://api.sendgrid.com/v3/mail/send" \
//      -H 'Authorization: Bearer <<YOUR_API_KEY>>' \
//      -H 'Content-Type: application/json' \
//      -d 
{
  from: {
    name: 'Paws Perfect';
    email:'jpniyitanga@gmail.com'
  };
  templateId: "d-1684f89a209a4c4da69354a7f68febec";
  personalizations: [
    {
      to: [
        {
          "email": "example@sendgrid.net"
        }
      ],
      
      dynamic_template_data: {
        total: "$ 239.85",
        items: [
          {
            "text": "New Line Sneakers",
            "image": "https://marketing-image-production.s3.amazonaws.com/uploads/8dda1131320a6d978b515cc04ed479df259a458d5d45d58b6b381cae0bf9588113e80ef912f69e8c4cc1ef1a0297e8eefdb7b270064cc046b79a44e21b811802.png",
            "price": "$ 79.95"
          } 
        ],
        receipt: true,
        name: "Sample Name",
        address01: "1234 Fake St.",
        address02: "Apt. 123",
        city: "Place",
        state: "CO",
        zip: "80202"
      }
    }
  ];

   template_id:"[template_id]"
}
