const quotes = [
    {
        id:1,
        content:"Try to be a rainbow in someone else’s cloud.",
        author:"Maya Angelou"
    },
    {
        id:2,
        content:"Happiness is not by chance but by choice.",
        author:" Jim Rohn"
    },
    {
        id:3,
        content:"Extraordinary things are always hiding in places people never think to look.",
        author:"Jodi Picoult"
    },
    {
        id:4,
        content:"Learn as if you will live forever, live like you will die tomorrow.",
        author:"Mahatma Gandhi"
    },
    {
        id:5,
        content:"When you change your thoughts, remember to also change your world.",
        author:"Norman Vincent Peale"
    },
    {
        id:6,
        content:"Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author:"Winston Churchill"
    },
    {
        id:7,
        content:"The road to success and the road to failure are almost exactly the same.",
        author:"Colin R. Davis"
    },
]

const images = [
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBt8fP-rj4FxQk6K2sd45A7mNhqjPpIj-sTA&s",
    alt: "Placeholder Image 150x150",
    title: "Image 1"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s",
        alt: "Placeholder Image 200x200",
        title: "Image 2"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&s",
        alt: "Placeholder Image 200x200",
        title: "Image 3"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4dtsUW5HDjgqlUt5QX0x7AjIqxVcMaCcQ&s",
        alt: "Placeholder Image 200x200",
        title: "Image 4"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXxfn1j1vKFy8yJeBGl2AS6Dcah-lKgHofg&s",
        alt: "Placeholder Image 200x200",
        title: "Image 5"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-1TqadKkTciFJY4EnJCI2VPO0L1PdHIWMg&s",
        alt: "Placeholder Image 200x200",
        title: "Image 6"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhD41ZrZcjhRG1lH7aRFqbqQjaHEFSKghovA&s",
        alt: "Placeholder Image 200x200",
        title: "Image 7"
    },
   
  

]




let button = document.querySelector("#button")
let quote = document.getElementById("quote")
let authors = document.getElementById("authors")
let imgsec = document.querySelector(".image-section")
let imgdemo = document.getElementById("imgdemo")
let read = document.getElementById("readquote")


imgsec.appendChild(imgdemo)



const changeQuotes = () => {
    let random  = Math.floor(Math.random() * 7)
    quote.innerText = quotes[random].content
   
    let randomImage = Math.floor(Math.random() * images.length);
    
    authors.innerText = quotes[random].author
    const selectedImage = images[randomImage]
   imgdemo.src = selectedImage.url
   imgdemo.alt = selectedImage.alt || "Image";
    
    
   
    
}


button.addEventListener("click",changeQuotes)




read.addEventListener("click",speakQuote)
