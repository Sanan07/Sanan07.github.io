function send() {
    var name = document.getElementById("name").value;
    var surName = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var dop = document.getElementById("dop").value;
    
    if (name == "" || phone == "" || dop == "" ||
        name.length == 0 || phone.length == 0 || dop.length == 0)
    {    
        alert("Поля обозначенные звездочкой обязательны для заполнения.");
        return;    
    }
    
    var regex1 = /[A-Z]/g;
    var regex2 = /[a-z]/g;
    var regex3 = /[а-я]/g;
    var regex4 = /[А-Я]/g;
    
    var found1 = phone.match(regex1);
    var found2 = phone.match(regex2);
    var found3 = phone.match(regex3);
    var found4 = phone.match(regex4);
    
    if(found1!=null || found2!=null || found3!=null || found4!=null) {
        alert("Телефонный номер не должен содержать буквы.");
        return;
    }
    
    var str = "Имя : " + name + "<br>" + "Фамилия" + surName + "<br>" + "Телефон : " + phone +  "<br>" + "Дополнительная информация : " +  dop;;
    
    Email.send({
        SecureToken: "76825919-ab51-45b3-b18d-5a7e72e78aad",
        To: 'grijaproshai@gmail.com',
        From: "info.grija@gmail.com",
        Subject: "Информация о новом пациенте : " + name,
        Body: str
    }).then(
        message => alert("Информация отправлена. Спасибо за заявку. В скором времени с Вами свяжутся.")
    );
    
}
