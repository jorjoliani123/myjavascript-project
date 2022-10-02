let data = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/37730/sunset-boat-sea-ship-37730.jpeg?cs=srgb&dl=pexels-pixabay-37730.jpg&fm=jpg",
      title: "ship1",
      url: "https://google.com",
    },
    {
      id: 2,
      imageUrl: "https://thumbs.dreamstime.com/b/pirate-ship-dominican-republic-83415735.jpg",
      title: "ship2",
      url: "https://google.com",
    },
    {
      id: 3,
      imageUrl:
        "https://www.thoughtco.com/thmb/D6dR0ruSIwI0Mo6sA-0wxl1zQh8=/3527x1984/smart/filters:no_upscale()/-mayflower-ii-replica-at-sunset--massachusetts--73068552-59c4643ac412440010f73d33.jpg",
      title: "ship3",
      url: "https://google.com",
    },
    {
      id: 4,
      imageUrl: "https://www.wondriumdaily.com/wp-content/uploads/2022/05/The_Period_of_the_Pirate_Round_QBS_Featured-Image.jpg",
      title: "ship4",
      url: "https://google.com",
    },
  ];
  
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");
  const sliderConetnt = document.getElementById("slider-content");
  const dotBurtuli = document.getElementsByClassName("dot");
  
  let sliderIndex = 0;
  
  function createAtag(item) {
    const tag = document.createElement("a");
    tag.setAttribute("href", item.url);
    tag.classList.add("slide");
  
    return tag;
  }
  
  function createImgtag(item) {
    const tagImage = document.createElement("img");
    tagImage.setAttribute("src", item.imageUrl);
    tagImage.setAttribute("alt", item.title);
  
    return tagImage;
  }
  
  function createH2ag(item) {
    const tagTitle = document.createElement("h2");
    tagTitle.textContent = item.title;
    
    tagTitle.classList.add("slider-title");
  
    return tagTitle;
  }
  
  function createDots(item) {
    const dotsParent = document.createElement("div");
    dotsParent.classList.add("dotsParent");
  
    data.forEach((element) => {
      const dotChild = document.createElement("div");
      dotChild.classList.add("dot");
      dotChild.setAttribute("data-id", element.id - 1);
  
      dotChild.addEventListener("click", function (event) {
        let id = event.target.getAttribute("data-id");
        sliderIndex = id;
        setSlide();
      });
  
      dotsParent.appendChild(dotChild);
    });
  
    return dotsParent;
  }
  function cuurentDotactive() {
    dotBurtuli[sliderIndex].classList.add("active");
  }
  
  function setSlide() {
    sliderConetnt.innerHTML = "";
    const slideItem = createAtag(data[sliderIndex]);
    const h2Tag = createH2ag(data[sliderIndex]);
    const imgTag = createImgtag(data[sliderIndex]);
    const dots = createDots();
  
    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);
    sliderConetnt.appendChild(slideItem);
    sliderConetnt.appendChild(dots);
  
    cuurentDotactive();
    console.log(slideItem);
  }
  
  function arrowLeftClick() {
    if (sliderIndex == 0) {
      sliderIndex = data.length - 1;
      setSlide();
      return;
    }
    sliderIndex--;
   
    setSlide();
  }
  function arrowRIghtClick() {
    if (sliderIndex == data.length - 1) {
      sliderIndex = 0;
      setSlide();
      return;
    }
    sliderIndex++;
   
    setSlide();
  }
  
  arrowLeft.addEventListener("click", arrowLeftClick);
  arrowRight.addEventListener("click", arrowRIghtClick);
 
  setSlide();
  