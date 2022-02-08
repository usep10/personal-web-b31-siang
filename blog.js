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
  let tglAwal = document.getElementById('input-start-date').value
  let tglAkhir = document.getElementById('input-end-date').value
  let checklist = document.querySelectorAll('input[name="centang"]:checked');
  let imageBlog = document.getElementById('input-blog-image')

  imageBlog = URL.createObjectURL(imageBlog.files[0])

  startDate = new Date(tglAwal);
  endDate = new Date(tglAkhir);
  const joinTgl = Math.max((endDate.getFullYear() - startDate.getFullYear()) * 12 +
    endDate.getMonth() - startDate.getMonth(), 0)

  let valueCeklis = []
  checklist.forEach((checkbox) => {
    valueCeklis.push(checkbox.value)
  })

  let blog = {
    author: "Kang Usep",
    title,
    joinTgl,
    valueCeklis,
    content,
    imageBlog,
    postedAt: new Date()
  }

  // let array = [title, content, imageBlog]
  // let showGambar = document.getElementById('coba')

  // showGambar.innerHTML += `<img src="${imageBlog}"/>`
  blogs.push(blog)

  console.log(blogs)

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
        
        <div class="card-blog">
          <div class="image-blog">
            <img src="${blogs[i].imageBlog}" alt="" />
          </div>
          <article>
            <h2>${blogs[i].title}e</h2>
            <span>Durasi : ${blogs[i].joinTgl} bulan</span>
            <p>${blogs[i].content}</p>
            <div class="card-logo-blog">
              <p>${blogs[i].valueCeklis}</p>
              <img src="assets/playstore.png" alt="">
              <img src="assets/android.png" alt="">
              <img src="assets/java.png" alt="">
            </div>
            <div class="tombol-card">
              <button>edit</button>
              <button>delete</button>
            </div>
          </article>
        </div>
      
        `
  }

  function getBulan(time) {

  }

  function firstBlogContent() {
    return `
    
        <div class="card-blog">
          <div class="image-blog">
            <img src="assets/blog-img.png" alt="" />
          </div>
          <article>
            <h2>One</h2>
            <span>Durasi : 3 bulan</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="card-logo-blog">
              <img src="assets/playstore.png" alt="">
              <img src="assets/android.png" alt="">
              <img src="assets/java.png" alt="">
            </div>
            <div class="tombol-card">
              <button>edit</button>
              <button>delete</button>
            </div>
          </article>
        </div>

      
    `
  }

  setInterval(function () {
    renderBlog()
  }, 2000)

}