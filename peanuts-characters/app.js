const characters = [
  {
    id: 1,
    name: "Charlie Brown",
    role: "Main Character of Peanuts | Baseball Team Leader",
    img:
      "https://www.peanuts.com/wp-content/uploads/2017/09/charliebrown.png",
    text:
      "Charlie Brown possesses significant determination and hope but frequently fails because of his insecurities, outside interference, or plain bad luck. While he can be smart, he over-thinks things and this often gives him a tendency to procrastinate.",
  },
  {
    id: 2,
    name: "Snoopy",
    role: "Charlie Brown's Dog",
    img:
      "https://vignette.wikia.nocookie.net/peanuts/images/3/3e/Snoopytrans.png/revision/latest/scale-to-width-down/310?cb=20200323161900",
    text:
      "The wildly imaginative, supremely confident, world-famous beagle is a canine master of disguise. While pondering life from the top of his doghouse, he writes the great American novel, travels to the moon, and plots revenge on the cat next door.",
  },
  {
    id: 3,
    name: "Peppermint Patty",
    role: "In love with Charlie Brown",
    img:
      "https://www.peanuts.com/wp-content/uploads/2017/09/peppermintpatty.png",
    text:
      "A fearless born leader, doggedly loyal, tomboy and a natural athlete, Peppermint Patty is up to any challenge… except studying. She never met a school day she didn’t hate. For Peppermint Patty, sports are easy; it’s life that’s hard.",
  },
  {
    id: 4,
    name: "Sally Brown",
    role: "Charlie Brown's Sister",
    img:
      "https://www.peanuts.com/wp-content/uploads/2017/09/sally.png",
    text:
      "Charlie Brown’s little sister believes the world owes her an explanation. Why does she have to go to school? And what’s the capital of Venezuela? Sally is always on the hunt for answers-and when she doesn’t get them, she comes up with a whole new philosophy: 'Who cares?'.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const role = document.getElementById("role");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let itemCounter = 0;

window.addEventListener("DOMContentLoaded", () => {
  showCharacter();
});

prevBtn.addEventListener('click', () => {
  itemCounter--;
  if (itemCounter < 0) {
    itemCounter = characters.length - 1;
  }
  showCharacter();
})
nextBtn.addEventListener('click', () => {
  itemCounter++;
  if (itemCounter > characters.length - 1) {
    itemCounter = 0;
  }
  showCharacter();
})
randomBtn.addEventListener('click', () => {
  itemCounter = Math.floor(Math.random() * characters.length);
  showCharacter();
})

showCharacter = () => {
  const item = characters[itemCounter];
  img.src = item.img;
  author.textContent = item.name;
  role.textContent = item.role;
  info.textContent = item.text;
}
