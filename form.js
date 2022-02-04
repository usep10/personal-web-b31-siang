function showData() {

    //DOM get data
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    //DOM send data
    document.getElementById("input-name").value = ""
    document.getElementById("input-email").value = ""
    document.getElementById("input-phone").value = ""
    document.getElementById("input-subject").value = ""
    document.getElementById("input-message").value = ""

    //validasi
    if (name == "") {
        alert('nama tidak boleh kosong')
    }
    if (email == "") {
        alert('email tidak boleh kosong')
    }
    if (phone == "") {
        alert('telepon tidak boleh kosong')
    }
    if (subject == "") {
        alert('subjek tidak boleh kosong')
    }
    if (message == "") {
        alert('pesan tidak boleh kosong')
    }
    //dom create element
    let emailReceiver = "usepmuhammad10@gmail.com"

    let a = document.createElement("a")
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello nama saya ${name},
    ${subject}, ${message}, ini nomor telepon saya ${phone}`
    // a.click()

    let dataObject = {
        dataName: name,
        email,
        phone,
        subject,
        message
    }

    console.table(dataObject)
}