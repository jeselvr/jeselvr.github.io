let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #B15EFF;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #B15EFF;">Jr. Developer</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
