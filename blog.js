let blogs = []

let month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
]

function addBlog(event) {
    event.preventDefault()


    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let imageBlog = document.getElementById('input-blog-image')

    imageBlog = URL.createObjectURL(imageBlog.files[0])

    let blog = {
        author: "Kang Usep",
        title,
        content,
        imageBlog,
        postedAt: new Date()
    }

    let array = [title, content, imageBlog]
    // let showGambar = document.getElementById('coba')

    // showGambar.innerHTML += `<img src="${imageBlog}"/>`
    blogs.push(blog)

    // console.table(blogs)

    renderBlog()
    // getFullTime()
}

function renderBlog() {
    // console.log(blogs[0])
    // getFullTime()
    let lengthData = blogs.length

    let blogContainer = document.getElementById('contents')

    blogContainer.innerHTML = firstBlogContent()

    let i = 0
    for (i; i < lengthData; i++) {
        blogContainer.innerHTML += `
        <div class = "blog-list-item">
            <div class = "blog-image">
            <img src = "${blogs[i].imageBlog}"
        alt = ""/>
            </div> <div class = "blog-content">
            <div class = "btn-group">
            <button class = "btn-edit"> Edit Post </button> 
            <button class = "btn-post"> Post Blog </button> </div> 
            <h1>
            <a href = "blog-detail.html"
        target = "_blank" >
            ${blogs[i].title}</a>
            </h1> <div class = "detail-blog-content" >
            ${getFullTime(blogs[i].postedAt)} | ${blogs[i].author} </div> 
            <p>
            ${blogs[i].content}
            </p> 
            <div style = "text-align: right;">
            <span style = "font-size:15px; color: grey">
            ${getDistanceTime(blogs[i].postedAt)}
            </span>
            </div>
            </div> 
            </div>
        `
    }

    function getFullTime(time) {
        let tgl = time.getDate()
        let bulan = time.getMonth()
        let tahun = time.getFullYear()
        let jam = time.getHours()
        let menit = time.getMinutes()

        return `${tgl} ${month[bulan]} ${tahun} ${jam}:${menit} WIB`
        // console.log(tgl)
        // console.log(bulan)
        // console.log(year)
        // console.log(jam)
        // console.log(menit)
    }

    function getDistanceTime(time) {
        // waktu saat ini - waktu posting
        const distance = new Date() - new Date(time)

        // konversi ke hari
        const detik = 1000
        const detikToMenit = 60
        const menitToJam = 60
        const detikToJam = detikToMenit * menitToJam
        const jamToHari = 23

        let dayDistance = distance / (detik * detikToJam * jamToHari)
        // dayDistance = 3.6

        if (dayDistance >= 1) {
            return Math.floor(dayDistance) + ' day ago'
        } else {
            // konversi ke jam
            let hourDistance = Math.floor(distance / (detik * detikToJam))
            if (hourDistance > 0) {
                return hourDistance + ' hour ago'
            } else {
                // konversi ke menit
                const minuteDistance = Math.floor(distance / (detik * detikToMenit))
                return hourDistance + ' minutes ago'
            }
        }

        console.log(dayDistance)
    }

    function firstBlogContent() {
        return `
    <div class="blog-list-item">
    <div class="blog-image">
      <img src="assets/blog-img.png" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank">Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a>
      </h1>
      <div class="detail-blog-content">
        12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
      </div>
      <p>
        Ketimpangan sumber daya manusia (SDM) di sektor digital masih
        menjadi isu yang belum terpecahkan. Berdasarkan penelitian
        ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
        meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Quam, molestiae
        numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
        eligendi debitis?
      </p>
    </div>
  </div>
    `
    }

    setInterval(function () {
        renderBlog()
    }, 2000)

}